import { useState } from "react";

// Utility to format bytes
const formatBytes = (bytes) => {
  if (!bytes) return "Unknown";
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
};

const VideoPreview = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [isPreparing, setIsPreparing] = useState(false);

  const handleSelect = (quality) => {
    setSelected(quality);
    setIsPreparing(true);
    setTimeout(() => setIsPreparing(false), 600); // Small UX delay
  };

  const handleDownload = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "download", {
        event_category: "Video",
        event_label: `${data.title} - ${selected.label}`,
        value: selected.filesize || 0,
      });
    } else {
      console.warn("Google Analytics not ready");
    }
  };

  return (
    <div className="mt-6 w-full max-w-md bg-white p-4 rounded-xl shadow-md border">
      <img
        src={data.thumbnail}
        alt="Video thumbnail"
        className="rounded-xl mb-3 aspect-video object-cover"
      />

      <h2 className="text-lg font-bold text-gray-800 mb-3">{data.title}</h2>

      <p className="text-sm text-gray-600 mb-2">Select Download Quality:</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {data.qualities.map((q, index) => (
          <button
            key={index}
            onClick={() => handleSelect(q)}
            title={`Format: ${q.label}, Size: ${q.filesize ? formatBytes(q.filesize) : "Unknown"}`}
            className={`px-3 py-1 rounded-full border text-sm transition-all ${
              selected?.label === q.label
                ? "bg-red-600 text-white font-semibold"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {q.label}
            <span className="ml-1 text-xs text-gray-500">
              ({q.filesize ? formatBytes(q.filesize) : "?"})
            </span>
          </button>
        ))}
      </div>

      {/* Show download button */}
      {selected && !isPreparing && (
        <a
          href={selected.url}
          className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownload}
        >
          Download {selected.label}
        </a>
      )}

      {/* Loading feedback */}
      {isPreparing && (
        <div className="text-center text-sm text-gray-500 animate-pulse">
          Preparing download link...
        </div>
      )}
    </div>
  );
};

export default VideoPreview;
