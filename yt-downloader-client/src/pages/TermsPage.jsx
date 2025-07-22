import { Helmet } from "react-helmet";

export default function TermsPage() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto text-gray-800">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Terms of Service | ShortsSaver</title>
        <meta
          name="description"
          content="Read the terms of service for using ShortsSaver. Understand your rights, limitations, and responsibilities when using our platform."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shortsaver.co.in/terms-of-service" />

        {/* Open Graph / Twitter (optional but good) */}
        <meta property="og:title" content="Terms of Service | ShortsSaver" />
        <meta property="og:description" content="By using ShortsSaver, you agree to these terms of service. Stay informed about legal use and limitations." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://shortsaver.co.in/terms-of-service" />
        <meta property="og:image" content="https://shortsaver.co.in/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | ShortsSaver" />
        <meta name="twitter:description" content="Know the terms before using ShortsSaver. Full disclaimer and legal details inside." />
        <meta name="twitter:image" content="https://shortsaver.co.in/og-image.jpg" />
      </Helmet>

      <h1 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
        Terms of Service
      </h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">2. Prohibited Use</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          You agree not to use this tool for downloading copyrighted material or engaging in any activity that violates applicable laws or the intellectual property rights of others.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">3. Intellectual Property</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          We do not claim ownership over any content downloaded through this service. All content belongs to the respective copyright holders.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">4. Disclaimer of Liability</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          We do not guarantee the accuracy, completeness, or legality of any content accessed through this service. Use it at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">5. Modifications</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          We reserve the right to modify or terminate this service at any time, with or without notice.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">6. Violation of Terms</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          Misuse of the website or breach of these terms may result in restricted access, IP banning, or legal action.
        </p>
      </section>
    </div>
  );
}
