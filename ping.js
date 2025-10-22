import axios from "axios";

const SERVER_URL = "https://eim-server.onrender.com"; // ✅ Replace with your Render URL

// Send a ping every 4 minutes to prevent Render cold start
setInterval(async () => {
  try {
    await axios.get(SERVER_URL);
    console.log("🔁 Keep-alive ping sent to Render server");
  } catch (err) {
    console.error("❌ Ping failed:", err.message);
  }
}, 4 * 60 * 1000); // every 4 minutes
