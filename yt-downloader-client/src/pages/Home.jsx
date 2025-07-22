import { useState } from "react";
import Header from "../components/Header";
import VideoForm from "../components/VideoForm";
import VideoPreview from "../components/VideoPreview";
import ErrorToast from "../components/ErrorToast";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";

const Home = () => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchVideo = async (url) => {
    setError("");
    setVideoData(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setVideoData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* ✅ SEO Helmet Section */}
      <Helmet>
        <title>Download YouTube Shorts & Instagram Reels | Free & No Watermark</title>
        <meta
          name="description"
          content="ShortsSaver is a fast and free online downloader for YouTube Shorts and Instagram Reels. Download videos instantly without watermark!"
        />
        <meta
          name="keywords"
          content="Download YouTube Shorts, Instagram Reels Downloader, Shorts Saver, No Watermark, Free Shorts Downloader, Save Shorts, ShortsSaver"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ShortsSaver Team" />
        <link rel="canonical" href="https://shortsaver.netlify.app/" />

        {/* 🔗 Open Graph Meta for Social Preview */}
        <meta property="og:title" content="ShortsSaver | Download YouTube Shorts & Instagram Reels Free" />
        <meta property="og:description" content="Free tool to download Shorts and Reels without watermark. No login required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shortsaver.netlify.app/" />
        <meta property="og:image" content="https://shortsaver.netlify.app/og-image.jpg" />

        {/* 🐦 Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ShortsSaver | Download Shorts & Reels Free" />
        <meta name="twitter:description" content="Download YouTube Shorts & Instagram Reels for free, no watermark, no login. Fast and easy!" />
        <meta name="twitter:image" content="https://shortsaver.netlify.app/og-image.png" />
      </Helmet>

      <Header />
      <VideoForm onFetch={fetchVideo} />
      {loading && <Loading />}
      {error && <ErrorToast message={error} />}
      {videoData && <VideoPreview data={videoData} />}
    </div>
  );
};

export default Home;
