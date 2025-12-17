import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex w-full h-20 bg-white shadow-sm border-b border-gray-200 justify-between items-center px-8 sticky top-0 z-50">
      
      {/* Logo */}
      <div className="text-slate-800 text-3xl font-extrabold tracking-wide">
        Shopsy
      </div>

      {/* Nav Links */}
      <div className="flex gap-8 text-lg font-medium text-slate-700">
        <Link 
          to="/Home" 
          className="hover:text-slate-900 transition"
        >
          Home
        </Link>

        <Link 
          to="/product" 
          className="hover:text-slate-900 transition"
        >
          Products
        </Link>

        <Link 
          to="/cart" 
          className="hover:text-slate-900 transition"
        >
          Cart
        </Link>

        <Link 
          to="/order" 
          className="hover:text-slate-900 transition"
        >
          Order
        </Link>

        <Link 
          to="/about" 
          className="hover:text-slate-900 transition"
        >
          About
        </Link>

        <Link 
          to="/login" 
          className="hover:text-slate-900 transition"
        >
          Admin
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link 
          to="/login" 
          className="bg-zinc-800 text-white px-5 py-2 rounded-lg hover:bg-zinc-900 transition"
        >
          Login
        </Link>

        <Link 
          to="/register" 
          className="bg-zinc-200 text-slate-800 px-5 py-2 rounded-lg border border-gray-300 hover:bg-zinc-300 transition"
        >
          Sign Up
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
