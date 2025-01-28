import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [file, setFile] = useState(null);
  const [videos, setVideos] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!isLoaded || !isSignedIn) {
        alert("You must be logged in to upload videos.");
        return;
      }
      if (!file) {
        alert("Please select a video first.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", user.id);

      console.log("Uploading video:", formData);

      const response = await fetch("http://localhost:3000/api/uploadVideos", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const data = await response.json();
      alert(data.message || "Upload successful!");
      setFile(null);
      fetchVideos();
    } catch (error) {
      console.error("Error uploading video:", error);
      alert(error.message || "Something went wrong uploading the video.");
    }
  };

  const fetchVideos = async () => {
    if (!isLoaded || !isSignedIn) return;
    try {
      const response = await fetch(
        `http://localhost:3000/api/getVideos?userId=${user.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const data = await response.json();
      setVideos(data.videos || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const createUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      console.log("User created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.sessionId}`, // Use Clerk's session token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      console.log("User data:", data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      createUser();
      fetchUserData();
      fetchVideos();
    }
  }, [isLoaded, isSignedIn, user]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>Upload a Video</h2>
        <input
          type="file"
          accept="video/mp4, video/quicktime"
          onChange={handleFileChange}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div>
        <h2>Your Uploaded Videos</h2>
        {videos.length === 0 ? (
          <p>No videos found.</p>
        ) : (
          videos.map((video) => (
            <div key={video.id} style={{ marginBottom: "1rem" }}>
              <video src={video.url} controls width="320" height="240" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
