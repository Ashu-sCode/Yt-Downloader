import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Disclaimer from "./pages/disclaimer";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DMCA from "./pages/DMCA";
import Faq from "./pages/faq";

import { Helmet } from "react-helmet";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <>
              <Helmet>
                <title>Download YouTube Shorts & Instagram Reels - ShortsSaver</title>
                <meta
                  name="description"
                  content="Fast and free downloader for YouTube Shorts & Instagram Reels. Save videos without watermark instantly!"
                />
                <meta
                  name="keywords"
                  content="YouTube Shorts Downloader, Instagram Reels Downloader, Save Shorts, ShortsSaver, Download Shorts Free"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="ShortsSaver Team" />
                <link rel="canonical" href="https://shortsaver.netlify.app/" />
              </Helmet>

              <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
                  YouTube Shorts & Instagram Reels Downloader
                </h1>
                <p className="text-center text-lg text-gray-600 max-w-2xl mb-6">
                  Fast, free, and easy video downloads. Paste your URL, choose
                  quality, and save it instantly.
                </p>
                <Home />
              </div>
            </>
          </Layout>
        }
      />

      {/* Other routes remain the same, but we'll SEO-optimize them one by one next */}
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/disclaimer" element={<Layout><Disclaimer /></Layout>} />
      <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
      <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
      <Route path="/dmca" element={<Layout><DMCA /></Layout>} />
      <Route path="/faq" element={<Layout><Faq /></Layout>} />

      <Route
        path="*"
        element={
          <Layout>
            <div className="p-10 text-center">
              <h1 className="text-3xl font-bold text-red-600 mb-2">404</h1>
              <p className="text-gray-600">Page Not Found</p>
            </div>
          </Layout>
        }
      />
    </Routes>
  );
}
