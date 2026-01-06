import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export async function uploadImage(imagePath) {
  if (!fs.existsSync(imagePath)) {
    throw new Error("Image file not found at given path");
  }

  const result = await cloudinary.uploader.upload(imagePath);
  return result.secure_url;
}
