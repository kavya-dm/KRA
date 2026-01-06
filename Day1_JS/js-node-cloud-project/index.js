import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import { uploadImage } from "./uploadImage.js";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct image path from images folder
const imagePath = path.join(__dirname, "images", "sample.jpeg");

try {
  const imageUrl = await uploadImage(imagePath);

  console.log("Image uploaded successfully");
  console.log("Uploaded Image URL:");
  console.log(imageUrl);
} catch (error) {
  console.error("Error:", error.message);
}
