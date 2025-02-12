import React from 'react'
import { UserButton } from '@clerk/clerk-react';
import * as DashboardService from './DashboardService'
import { useState, useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import ProtectedRoute from '../Authentication/ProtectedRoute';
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SiteHeader } from '../ui/blocks/site-header';
import { AppSidebar } from '../ui/blocks/app-sidebar';

interface Video {
  id: string,
  url: string
}

const Dashboard: React.FC = ({children}: {children: React.ReactNode}) => {
  const { getToken } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        alert("Please select a video first.");
        return;
      }

      const token = await getToken()
      const data = await DashboardService.uploadVideo(file, token)

      alert(data.message || "Upload successful!");
      setFile(null);
      fetchVideos();
    } catch (error) {
      console.log("Error uploading video:", error);
      alert(error.message || "Something went wrong uploading the video.");
    }
  };

  const fetchVideos = async () => {
    const token = await getToken()
    const response = await DashboardService.fetchVideos(token)
    setVideos(response.videos || [])
  };

  const fetchUserData = async () => {
    try {
      const token = await getToken()
      const data = await DashboardService.getUserData(token)
      console.log("User data:", data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // useEffect(() => {
  //   if (isLoaded && isSignedIn && user) {
  //     fetchUserData();
  //     fetchVideos();
  //   }
  // }, [isLoaded, isSignedIn, user]);

  return (
    <div className="mb-4 text-white">
      <ProtectedRoute>
        {/* <UserButton />
      <div>
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
      </div> */}
        <div className="[--header-height:calc(theme(spacing.14))]">
          <SidebarProvider className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset>
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                  </div>
                  <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
      </ProtectedRoute>
    </div>
  );
}

export default Dashboard;
