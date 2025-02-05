import createSupabase from '../../config/supabase.js';
import logger from '../../utils/logger.js';
import config from '../../utils/config.js';

export const uploadVideoToSupabase = async (user, videoFile, sessionId) => {
  if (!videoFile) {
    logger.error("Video file is missing in the request");
    throw new Error("No video file provided.");
  }

  const storagePath = `${user.id}/${videoFile.originalname.replace(/\s+/g, '_')}`;
  logger.info("Generated Storage Path:", storagePath);

  const supabase = await createSupabase(sessionId);
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("video_storage")
    .upload(storagePath, videoFile.buffer, {
      cacheControl: "3600",
      upsert: true,
      contentType: videoFile.mimetype,
    });

  if (uploadError) {
    logger.error("Supabase Upload Error:", uploadError.message);
    throw new Error("Failed to upload video to storage.");
  }
  
  logger.info("Video uploaded to storage:", uploadData);
  const videoUrl = `${config.DB_URI}/storage/v1/object/public/video_storage/${storagePath}`;
  logger.info("Generated Video URL:", videoUrl);

  const { error: dbError } = await supabase
    .from("videos")
    .insert([{ clerk_user_id: user.id, url: videoUrl }]);

  if (dbError) {
    logger.error("Database Insert Error:", dbError.message);
    throw new Error("Failed to save video metadata.");
  }

  return videoUrl;
};

export const fetchUserVideos = async (user, sessionId) => {
  const supabase = await createSupabase(sessionId);
  const { data: videos, error } = await supabase
    .from("videos")
    .select("*")
    .eq("clerk_user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    logger.error("Error Fetching Videos:", error.message);
    throw new Error("Failed to fetch videos.");
  }

  if (videos.length === 0) {
    console.warn("No videos found for user:", user.id);
  } else {
    logger.info("Fetched Videos:", videos);
  }

  return videos;
};
