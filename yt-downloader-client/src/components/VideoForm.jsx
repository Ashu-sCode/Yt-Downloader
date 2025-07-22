import { useState } from "react";

const isYouTubeUrl = (url) => {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i;
  return regex.test(url);
};

const isShortsUrl = (url) => {
  const shortRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return shortRegex.test(url);
};

const VideoForm = ({ onFetch }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      setError("Please enter a video URL.");
      return;
    }

    if (!isYouTubeUrl(url)) {
      setError("Currently only YouTube links are supported.");
      return;
    }

    if (!isShortsUrl(url)) {
      setError("Only YouTube Shorts are supported right now.");
      return;
    }

    setError("");

    // 🔥 Track with Google Analytics
    if (typeof gtag === "function") {
      gtag("event", "shorts_url_submitted", {
        event_category: "User Interaction",
        event_label: url,
        value: 1,
      });
    }

    onFetch(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      aria-labelledby="video-url-form"
    >
      <label
        htmlFor="shorts-url"
        id="video-url-form"
        className="block mb-1 font-medium text-gray-800"
      >
        Paste a YouTube Shorts URL
      </label>

      <input
        type="text"
        id="shorts-url"
        name="youtube_shorts_url"
        placeholder="e.g. https://youtube.com/shorts/abc123xyz"
        className={`w-full px-4 py-2 border rounded-md mb-2 transition 
          ${error ? "border-red-500 focus:outline-red-500" : "border-gray-300"}`}
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          setError("");
        }}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? "url-error" : undefined}
      />

      {error && (
        <p id="url-error" className="text-red-500 text-sm mb-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition"
        aria-label="Download YouTube Shorts video"
      >
        Get Video
      </button>
    </form>
  );
};

export default VideoForm;
