import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-6 text-center text-sm border-t mt-10 px-4">
      <div className="flex flex-wrap justify-center gap-4 mb-3">
        <Link to="/" className="hover:text-red-600 transition">Home</Link>
        <Link to="/privacy-policy" className="hover:text-red-600 transition">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-red-600 transition">Terms of Service</Link>
        <Link to="/disclaimer" className="hover:text-red-600 transition">Disclaimer</Link>
        <Link to="/dmca" className="hover:text-red-600 transition">DMCA</Link>
        <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
      </div>
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-semibold">ShortsSaver</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
