import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto text-gray-800">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>About - ShortsSaver | YouTube Shorts & Reels </title>
        <meta
          name="description"
          content="Learn about ShortsSaver – a clean, fast and ad-free YouTube Shorts & Instagram Reels downloader. Built by Ashutosh for privacy-conscious users."
        />
        <meta
          name="keywords"
          content="About ShortsSaver, Developer ShortsSaver, YouTube Shorts Downloader Info, Reels Downloader Developer"
        />
        <link rel="canonical" href="https://shortsaver.co.in/about" />
      </Helmet>

      <h1 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
        About This Project
      </h1>

      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          <span className="font-semibold">ShortsDownloader</span> is a clean, no-nonsense tool
          designed to help you download YouTube Shorts for personal offline viewing. It's fast,
          lightweight, and privacy-friendly — no signups, no trackers, no ads (for now).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">💡 Why I Built This</h2>
        <p className="leading-relaxed">
          I noticed how many existing downloaders were overloaded with popups, spammy redirects,
          or just didn’t work. As a developer who loves building useful tools, I wanted to create
          something simple that “just works” for everyone — whether on desktop or mobile.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🛠️ Technologies Used</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Frontend: <strong>React + Tailwind CSS</strong>
          </li>
          <li>
            Backend: <strong>Node.js + Express + yt-dlp</strong>
          </li>
          <li>
            Hosting: <strong>Vercel (frontend), Railway / Render (backend)</strong>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🙋‍♂️ Who Made This</h2>
        <p className="leading-relaxed">
          I'm Ashutosh, a BCA student & aspiring developer from India. I’m currently balancing
          college, self-study for coding & government exams, and working out — and building real
          projects like this to level up.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">⚠️ Legal Note</h2>
        <p className="text-sm text-gray-600">
          This tool is intended for personal use only. Please respect content creators’ rights and
          avoid downloading or redistributing videos without proper permission.
        </p>
      </section>

      <section className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}
