import { useState } from "react";
import Header from "../components/Header";
import VideoForm from "../components/VideoForm";
import VideoPreview from "../components/VideoPreview";
import ErrorToast from "../components/ErrorToast";
import Loading from "../components/Loading";

const Home = () => {
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // 👈 new state


  const fetchVideo = async (url) => {
    setError("");
    setVideoData(null);
    setLoading(true); // 👈 show loading

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
      setLoading(false); // 👈 hide loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <Header />
      <VideoForm onFetch={fetchVideo} />
      {loading && <Loading />}
      {error && <ErrorToast message={error} />}
      {videoData && <VideoPreview data={videoData} />}
    </div>
  );
};

export default Home;
