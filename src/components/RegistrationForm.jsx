// import { useState } from "react";
// import { useNavigate, Link } from "react-router";
// import axios from "axios";
// import { toast } from "react-toastify";

// const RegistrationForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("https://ecom-backend-shopsy.onrender.com/auth/register", {
//         name,
//         email,
//         password,
//       });

//       toast.success("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.error || "Registration failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-indigo-100">
//       <form
//         onSubmit={handleRegister}
//         className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
//       >
//         <h1 className="text-3xl font-bold mb-6 text-indigo-900 text-center">
//           Register
//         </h1>

//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="w-full border p-2 rounded mb-4"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full border p-2 rounded mb-4"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full border p-2 rounded mb-4"
//         />

//         <button
//           type="submit"
//           className="w-full bg-indigo-900 text-white py-2 rounded hover:bg-indigo-800"
//         >
//           Register
//         </button>

//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-indigo-900 font-bold">
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;


import { useState } from "react";
import { useNavigate, Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://ecom-backend-shopsy.onrender.com/auth/register",
        {
          name,
          email,
          password,
        }
      );

      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        {/* 🌸 Brand */}
        <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-2">
          StyleUp
        </h1>
        <p className="text-slate-500 text-center mb-8">
          Create your StyleUp account
        </p>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-1 font-medium text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-pink-200 rounded-lg px-4 py-2
            focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-1 font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-pink-200 rounded-lg px-4 py-2
            focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-pink-200 rounded-lg px-4 py-2
            focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-full
          hover:bg-pink-700 transition font-semibold"
        >
          Create Account
        </button>

        {/* Login Link */}
        <p className="text-sm text-slate-500 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
