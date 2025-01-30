const BASE_URL = "http://localhost:3000/api"

export const uploadVideo = async (file, token) => {
    const formData = new FormData()
    formData.append("file", file)
    const response = await fetch(`${BASE_URL}/video`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
    }

    const data = await response.json()
    return data
}

export const fetchVideos = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/video`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
      }
      );

      const data = await response.json();
      return data
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
};

// export const createUser = async (token) => {
//     const response = await fetch(`${BASE_URL}/user/create`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         }
//     });

//     if (!response.ok) {
//         throw new Error("Failed to create user");
//     }
//     return response
// }

export const getUserData = async (token) => {
    const response = await fetch(`${BASE_URL}/user`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    return data
}