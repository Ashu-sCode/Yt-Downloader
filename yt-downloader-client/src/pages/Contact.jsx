import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto text-gray-800">
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Contact Us - ShortsSaver | Get in Touch</title>
        <meta
          name="description"
          content="Need help or have a question about ShortsSaver? Contact us directly via email for support, feedback, or business inquiries."
        />
        <meta
          name="keywords"
          content="Contact ShortsSaver, ShortsSaver Support, ShortsSaver Email, YouTube Shorts Downloader Help"
        />
        <link rel="canonical" href="https://shortsaver/contact" />
      </Helmet>

      <h1 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
        Contact Us
      </h1>

      <p className="text-lg mb-4 text-center">
        Have a question, feedback, or business inquiry? Feel free to reach out!
      </p>

      <div className="bg-gray-100 border rounded-lg p-6 text-center shadow-md">
        <p className="mb-2 text-gray-700 font-medium">📧 Email us at:</p>
        <a
          href="mailto:ashutosh72004@gmail.com"
          className="text-lg font-semibold text-red-600 hover:underline break-words"
        >
          ashutosh72004@gmail.com
        </a>
      </div>

      <div className="mt-10 text-sm text-gray-600 leading-relaxed">
        <h2 className="font-semibold text-base mb-2">⚠️ Please note:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>This tool is provided for personal, non-commercial use only.</li>
          <li>We do not host or store any copyrighted content.</li>
          <li>
            For DMCA-related requests, please refer to our{" "}
            <a href="/dmca" className="text-red-500 hover:underline">
              DMCA page
            </a>.
          </li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/faq"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
        >
          Visit FAQ
        </a>
      </div>
    </div>
  );
}
