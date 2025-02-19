import createSupabase from '../../config/supabase.js'; 
import { createSupabaseClientWithUUID } from '../../config/supabaseToken.js';
import logger from '../../utils/logger.js';
import config from '../../utils/config.js';

export const uploadVideoToSupabase = async (user, videoFile, sessionId) => {
  if (!videoFile) {
    logger.error("Video file is missing in the request");
    throw new Error("No video file provided.");
  }

  const clerkSupabase = await createSupabase(sessionId);

  const { data: userData, error: userError } = await clerkSupabase
    .from("users")
    .select("id")
    .eq("clerk_user_id", user.id)
    .single();

  if (userError || !userData) {
    logger.error("User UUID lookup failed:", userError?.message);
    throw new Error("User not found in database.");
  }

  const userUUID = userData.id;
  logger.info("Mapped Clerk ID to Supabase UUID:", userUUID);

  const supabaseWithUUID = createSupabaseClientWithUUID(userUUID);

  const storagePath = `${userUUID}/${videoFile.originalname.replace(/\s+/g, '_')}`;
  logger.info("Generated Storage Path:", storagePath);

  const { data: uploadData, error: uploadError } = await supabaseWithUUID.storage
    .from("video_storage")
    .upload(storagePath, videoFile.buffer, {
      cacheControl: "3600",
      upsert: true,
      contentType: videoFile.mimetype
    });

  if (uploadError) {
    logger.error("Supabase Upload Error:", uploadError.message);
    throw new Error("Failed to upload video to storage.");
  }

  logger.info("Video uploaded to storage:", uploadData);

  const videoUrl = `${config.DB_URI}/storage/v1/object/public/video_storage/${storagePath}`;
  logger.info("Generated Video URL:", videoUrl);

  const { error: dbError } = await supabaseWithUUID
    .from("videos")
    .insert([{ id: userUUID, url: videoUrl }]);

  if (dbError) {
    logger.error("Database Insert Error:", dbError.message);
    throw new Error("Failed to save video metadata.");
  }

  return videoUrl;
};

export const fetchUserVideos = async (user, sessionId) => {
  const clerkSupabase = await createSupabase(sessionId);

  const { data: userData, error: userError } = await clerkSupabase
    .from("users")
    .select("id")
    .eq("clerk_user_id", user.id)
    .single();

  if (userError || !userData) {
    logger.error("User UUID lookup failed:", userError?.message);
    throw new Error("User not found in database.");
  }

  const userUUID = userData.id;
  logger.info("Mapped Clerk ID to Supabase UUID:", userUUID);

  const supabaseWithUUID = createSupabaseClientWithUUID(userUUID);

  const { data: videos, error } = await supabaseWithUUID
    .from("videos")
    .select("*")
    .eq("id", userUUID)
    .order("created_at", { ascending: false });

  if (error) {
    logger.error("Error Fetching Videos:", error.message);
    throw new Error("Failed to fetch videos.");
  }

  if (!videos || videos.length === 0) {
    logger.warn("No videos found for user:", userUUID);
    return [];
  }

  logger.info("Fetched Videos:", videos);
  return videos;
};

export const fetchSpecificVideo = async (user, videoName) => {
  const params = {
    Bucket: config.S3_BUCKET,
    Key: `${user.id}/uploads/${videoName}`
  };

  const command = new GetObjectCommand(params);
  const data = await s3.send(command);
  return { body: data.Body, contentType: data.ContentType };
};

export const deleteVideo = async (user, videoName) => {
  const key = `${user.id}/uploads/${videoName}`;
  const params = {
    Bucket: config.S3_BUCKET,
    Key: key
  };

  const command = new DeleteObjectCommand(params);
  await s3.send(command);
};
