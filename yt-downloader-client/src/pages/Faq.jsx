import { Helmet } from "react-helmet";

export default function Faq() {
  const faqs = [
    {
      question: "Is it free?",
      answer: "Yes, all downloads are free of cost. No hidden charges or subscriptions.",
    },
    {
      question: "Do you save my downloads?",
      answer: "No. We do not store any videos, URLs, or personal data. Your privacy is important to us.",
    },
    {
      question: "Can I download private videos?",
      answer: "No. We only support publicly available videos. Private or age-restricted content is not supported.",
    },
    {
      question: "Is login required?",
      answer: "No. You can use this tool without signing up or logging in.",
    },
    {
      question: "Can I use it on mobile?",
      answer: "Absolutely! Our service is optimized for all devices — mobile, tablet, and desktop.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="px-4 py-10 max-w-3xl mx-auto text-gray-800">
      {/* ✅ SEO HEAD */}
      <Helmet>
        <title>FAQs - ShortsSaver</title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about ShortsSaver – free YouTube Shorts downloader. Learn about privacy, cost, and mobile support."
        />
        <meta
          name="keywords"
          content="ShortsSaver FAQ, free shorts downloader, no login, mobile-friendly, download youtube shorts"
        />
        <link rel="canonical" href="https://shortsaver.co.in/faq" />

        {/* ✅ JSON-LD Structured Data for Google Rich Results */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <h1 className="text-3xl font-extrabold text-red-600 mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-1">Q: {item.question}</h2>
            <p className="text-sm text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
