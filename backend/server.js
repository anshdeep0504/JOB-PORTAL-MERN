import app from "./app.js";         // Import the app (express app)
import cloudinary from "cloudinary"; // Import Cloudinary package

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,  // Use env variables for credentials
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
