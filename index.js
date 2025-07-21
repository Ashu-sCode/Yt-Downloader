const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/download", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "No URL provided" });

  const command = `yt-dlp -j "${url}"`;

  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error("yt-dlp error:", stderr);
      return res.status(500).json({ error: "Failed to fetch video data" });
    }

    try {
      const data = JSON.parse(stdout);
      const formats = data.formats || [];

      const formatMap = new Map();

      for (const f of formats) {
        if (f.vcodec === "none") continue; // skip video-less formats

        const label = f.format_note || `${f.height}p`;
        if (!label) continue;

        // Prefer the first match per label
        if (!formatMap.has(label)) {
          formatMap.set(label, {
            label: label,
            formatId: f.format_id,
            url: f.url,
            ext: f.ext,
            filesize: f.filesize || null,
            hasAudio: f.acodec !== "none",
            hasVideo: f.vcodec !== "none",
          });
        }
      }

      // Optional: Convert bytes to readable size here or do it on frontend
      const formatSize = (bytes) => {
        if (!bytes) return null;
        return bytes >= 1024 * 1024
          ? (bytes / 1024 / 1024).toFixed(2) + " MB"
          : (bytes / 1024).toFixed(2) + " KB";
      };

      const filteredFormats = Array.from(formatMap.values())
        .sort((a, b) => {
          const getHeight = (label) =>
            parseInt(label.replace(/[^\d]/g, "")) || 0;
          return getHeight(b.label) - getHeight(a.label);
        })
        .map((f) => ({
          ...f,
          filesizeText: formatSize(f.filesize),
        }));

      res.json({
        title: data.title,
        thumbnail: data.thumbnail,
        qualities: filteredFormats,
      });
    } catch (error) {
      console.error("JSON Parse error:", error);
      res.status(500).json({ error: "Invalid yt-dlp output" });
    }
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
