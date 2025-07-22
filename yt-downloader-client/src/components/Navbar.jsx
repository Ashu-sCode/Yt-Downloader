import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-600">
        ShortsSaver
      </Link>
      <div className="space-x-4">
        <Link to="/about" className="text-sm text-gray-700 hover:text-red-600">About</Link>
        <Link to="/faq" className="text-sm text-gray-700 hover:text-red-600">FAQ</Link>
        <Link to="/contact" className="text-sm text-gray-700 hover:text-red-600">Contact</Link>
        <Link to="/privacy-policy" className="text-sm text-gray-700 hover:text-red-600">Privacy</Link>
      </div>
    </nav>
  );
};

export default Navbar;
