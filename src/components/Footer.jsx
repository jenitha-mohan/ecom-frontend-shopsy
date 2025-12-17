// import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        {/* Logo and Contact */}
        <h2 className="text-2xl font-bold mb-2">Shopsy</h2>
        <p className="text-sm mb-4">support@shopsy.com</p>

        {/* Social Icons
        <div className="flex justify-center gap-4 mb-4">
          <FaFacebookF className="hover:text-gray-400 transition cursor-pointer" />
          <FaInstagram className="hover:text-gray-400 transition cursor-pointer" />
          <FaYoutube className="hover:text-gray-400 transition cursor-pointer" />
          <FaTiktok className="hover:text-gray-400 transition cursor-pointer" />
        </div> */}

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 text-sm mb-4">
          <a href="/home" className="hover:text-gray-400 transition" >Home</a>
          <a href="/product" className="hover:text-gray-400 transition">Products</a>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          &copy; 2025 Shopsy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
