require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');  // ✅ File system for checking index.html

const app = express();

// ✅ Check if SendGrid API Key is loaded
if (!process.env.API_SENDGRID) {
  console.warn("⚠️ SendGrid API key not found in .env file");
} else {
  console.log("✅ SendGrid API Key loaded");
}

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static frontend files (React build)
const clientBuildPath = path.join(__dirname, './client/build');
app.use(express.static(clientBuildPath));

// API Routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));

// Fallback route for React SPA (handle all routes)
// ✅ Log the index.html path and existence check
// app.get("*", (req, res) => {
//   const indexPath = path.resolve(clientBuildPath, "index.html");
//   console.log("➡️ Serving index.html from:", indexPath);
  
//   if (fs.existsSync(indexPath)) {
//     res.sendFile(indexPath);
//   } else {
//     console.error("❌ index.html not found. Build might be missing.");
//     res.status(404).send("Build not found. Please run 'npm run build' in client folder.");
//   }
// });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
