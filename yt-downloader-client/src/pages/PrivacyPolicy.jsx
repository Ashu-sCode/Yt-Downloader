import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto text-gray-800">
      {/* ✅ Helmet SEO Head Tags */}
      <Helmet>
        <title>Privacy Policy | ShortsSaver</title>
        <meta
          name="description"
          content="Read the privacy policy of ShortsSaver. Learn what data we collect (none), how we handle cookies, and our stance on user privacy."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shortsaver.co.in/privacy-policy" />

        {/* Optional for link previews */}
        <meta property="og:title" content="Privacy Policy | ShortsSaver" />
        <meta property="og:description" content="No personal data stored. Transparent, simple privacy policy." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://shortsaver.co.in/privacy-policy" />
        <meta property="og:image" content="https://shortsaver.co.in/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | ShortsSaver" />
        <meta name="twitter:description" content="ShortsSaver values your privacy. We do not store videos or personal data." />
        <meta name="twitter:image" content="https://shortsaver.co.in/og-image.jpg" />
      </Helmet>

      <h1 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
        Privacy Policy
      </h1>

      <p className="mb-4 text-sm leading-relaxed">
        We respect your privacy. This privacy policy outlines what information we do and do not collect when you use our service.
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">1. No Personal Data Collected</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          We do not require you to create an account or provide personal details to use our site. No names, emails, or IP addresses are stored by us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">2. Real-Time Video Processing</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          All video URL processing happens in real-time on our servers. We do not retain any videos, links, or metadata after your session ends.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">3. Analytics & Cookies</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          We may use third-party tools like Google Analytics to anonymously track general usage trends (e.g., total visitors, popular pages) to improve user experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">4. External Links</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Our site may contain links to external websites. We are not responsible for the content or privacy policies of these third-party sites.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">5. Changes to Policy</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          This privacy policy may be updated periodically. Continued use of the service implies acceptance of the latest terms.
        </p>
      </section>
    </div>
  );
}
