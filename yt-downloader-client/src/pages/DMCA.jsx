import { Helmet } from "react-helmet";

export default function DMCA() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto text-gray-800">
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>DMCA Policy - ShortsSaver</title>
        <meta
          name="description"
          content="Read ShortsSaver’s DMCA takedown policy. Learn how to report copyright infringement and protect your intellectual property rights."
        />
        <meta
          name="keywords"
          content="ShortsSaver DMCA, copyright infringement, DMCA takedown, Shorts downloader policy"
        />
        <link rel="canonical" href="https://shortsaver.co.in/dmca" />
      </Helmet>

      <h1 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
        DMCA Takedown Policy
      </h1>

      <p className="mb-4 text-sm">
        We respect the intellectual property rights of others and comply with the provisions of the
        Digital Millennium Copyright Act (DMCA). If you believe that content available through our
        service infringes your copyright, please notify us by providing a written DMCA notice with
        the following details:
      </p>

      <ul className="list-decimal list-inside text-sm space-y-2 mb-6">
        <li>Your full name and electronic or physical signature.</li>
        <li>Identification of the copyrighted work claimed to have been infringed.</li>
        <li>URL(s) of the content that you believe is infringing.</li>
        <li>Your contact information (email address, phone number, and address).</li>
        <li>
          A statement that you have a good faith belief that the use of the content is not
          authorized by the copyright owner, its agent, or the law.
        </li>
        <li>
          A statement, under penalty of perjury, that the information in the notice is accurate and
          that you are the copyright owner or authorized to act on their behalf.
        </li>
      </ul>

      <p className="text-sm mb-4">Send your DMCA takedown request to:</p>

      <div className="bg-gray-100 p-4 rounded shadow text-sm">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:ashutosh72004@gmail.com"
            className="text-red-600 hover:underline"
          >
            ashutosh72004@gmail.com
          </a>
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-600 italic">
        Please note: Submitting false claims may result in legal consequences. Misuse of the DMCA
        process is illegal.
      </p>
    </div>
  );
}
