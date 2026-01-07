import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";

/* Resolve __dirname for ES modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Cloudinary configuration */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

/* Image path (separate folder) */
const imagePath = path.join(__dirname, "images", "images.jpeg");

/* Upload and display image details */
async function uploadImage() {
  if (!fs.existsSync(imagePath)) {
    throw new Error("Image file not found at given path");
  }

  const uploadResult = await cloudinary.uploader.upload(imagePath);
  const imageStats = fs.statSync(imagePath);

  const output = {
    imageName: path.basename(imagePath),
    imageType: `${uploadResult.resource_type}/${uploadResult.format}`,
    imageSizeBytes: imageStats.size,
    uploadedImageUrl: uploadResult.secure_url,
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY
  };

  console.log(JSON.stringify(output, null, 2));
}

/* Execute */
uploadImage().catch((error) => {
  console.error("Error:", error.message);
});
