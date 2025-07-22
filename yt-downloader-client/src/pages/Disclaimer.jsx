import { Helmet } from "react-helmet";

export default function Disclaimer() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto text-gray-800">
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Disclaimer - ShortsSaver | Legal Notice</title>
        <meta
          name="description"
          content="ShortsSaver's disclaimer page outlines the legal boundaries of our service. We do not host videos and are not affiliated with YouTube or Meta."
        />
        <meta
          name="keywords"
          content="ShortsSaver Disclaimer, legal notice, copyright policy, YouTube video downloader disclaimer"
        />
        <link rel="canonical" href="https://shortsaver.co.in/disclaimer" />
      </Helmet>

      <h1 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
        Disclaimer
      </h1>

      <p className="mb-4">
        This website is intended for educational and personal use only. By using this tool, you
        agree to comply with all applicable laws and regulations in your country.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 shadow-sm">
        <p className="text-sm text-yellow-800">
          <strong>⚠️ Important:</strong> We do not host or store any video or media content on our
          servers. All video data is fetched in real-time from public third-party platforms.
        </p>
      </div>

      <ul className="list-disc list-inside text-sm space-y-2">
        <li>
          The use of this service to download copyrighted content without permission is strictly
          prohibited and may violate the terms of service of the respective platforms (e.g., YouTube,
          Meta).
        </li>
        <li>
          The owner of this site assumes no responsibility for any improper use of the tool by its
          users.
        </li>
        <li>
          All content, logos, and trademarks belong to their respective owners. This site is not
          affiliated with or endorsed by YouTube, Meta, or any content platform.
        </li>
      </ul>

      <div className="mt-8 text-sm text-gray-600">
        For legal notices or takedown requests, please visit our{" "}
        <a href="/dmca" className="text-red-500 hover:underline">
          DMCA page
        </a>.
      </div>
    </div>
  );
}
