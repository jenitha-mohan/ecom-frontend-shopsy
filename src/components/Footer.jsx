// // import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white mt-10">
//       <div className="max-w-5xl mx-auto px-6 py-8 text-center">
//         {/* Logo and Contact */}
//         <h2 className="text-2xl font-bold mb-2">Shopsy</h2>
//         <p className="text-sm mb-4">support@shopsy.com</p>

//         {/* Social Icons
//         <div className="flex justify-center gap-4 mb-4">
//           <FaFacebookF className="hover:text-gray-400 transition cursor-pointer" />
//           <FaInstagram className="hover:text-gray-400 transition cursor-pointer" />
//           <FaYoutube className="hover:text-gray-400 transition cursor-pointer" />
//           <FaTiktok className="hover:text-gray-400 transition cursor-pointer" />
//         </div> */}

//         {/* Navigation Links */}
//         <div className="flex justify-center gap-6 text-sm mb-4">
//           <a href="/home" className="hover:text-gray-400 transition" >Home</a>
//           <a href="/product" className="hover:text-gray-400 transition">Products</a>
//           <a href="/about" className="hover:text-gray-400 transition">About</a>
//           <a href="#" className="hover:text-gray-400 transition">Contact</a>
//         </div>

//         {/* Copyright */}
//         <p className="text-xs text-gray-400">
//           &copy; 2025 Shopsy. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

//export default Footer;
import { Link } from "react-router";
// import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-50 border-t border-pink-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        {/* 🌸 Logo */}
        <h2 className="text-3xl font-extrabold text-pink-600 mb-2">
          StyleUp
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          support@styleup.com
        </p>

        {/* 🌸 Navigation */}
        <div className="flex justify-center flex-wrap gap-6 text-sm text-slate-700 mb-6">
          <Link to="/home" className="hover:text-pink-600 transition">
            Home
          </Link>
          <Link to="/product" className="hover:text-pink-600 transition">
            Products
          </Link>
          <Link to="/about" className="hover:text-pink-600 transition">
            About
          </Link>
          <Link to="#" className="hover:text-pink-600 transition">
            Contact
          </Link>
        </div>

        {/* 🌸 Social Icons (optional)
        <div className="flex justify-center gap-4 mb-6 text-pink-500">
          <FaFacebookF className="hover:text-pink-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-600 cursor-pointer" />
          <FaYoutube className="hover:text-pink-600 cursor-pointer" />
          <FaTiktok className="hover:text-pink-600 cursor-pointer" />
        </div>
        */}

        {/* 🌸 Copyright */}
        <p className="text-xs text-slate-500">
          &copy; 2025 StyleUp. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
