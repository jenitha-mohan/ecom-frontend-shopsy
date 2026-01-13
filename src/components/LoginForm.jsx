// import { useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";
// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   if (username === "admin" && password === "admin123") {
//   //     sessionStorage.setItem("isLoggedIn", "true");
//   //     sessionStorage.setItem("role", "admin");
//   //     navigate("/admin");
//   //   } else if (username === "user" && password === "user123") {
//   //     sessionStorage.setItem("isLoggedIn", "true");
//   //     sessionStorage.setItem("role", "user");
//   //     navigate("/home");
//   //   } else {
//   //     alert("Invalid credentials!");
//   //   }
//   // };
//   const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post(
//       "https://ecom-backend-shopsy.onrender.com/auth/login", // 🔥 backend
//       {
//         email: username,   // backend expects email
//         password: password
//       }
//     );

//     // ✅ SAVE TOKEN HERE (ANSWER TO YOUR QUESTION)
//     localStorage.setItem("token", response.data.token);
//     localStorage.setItem("role", response.data.role);

//     // optional
//     sessionStorage.setItem("isLoggedIn", "true");

//     // redirect
//     if (response.data.role === "admin") {
//       navigate("/admin");
//     } else {
//       navigate("/home");
//     }

//   } catch (err) {
//     alert(err.response?.data?.error || "Login failed");
//   }
// };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-zinc-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-6 text-slate-900 text-center">Login</h1>
//         <div className="mb-4">
//           <label className="block mb-1 font-semibold text-gray-700">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1 font-semibold text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-indigo-900 text-white py-2 rounded-md hover:bg-slate-800 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ecom-backend-shopsy.onrender.com/auth/login",
        {
          email: username,
          password: password,
        }
      );

      // Save token & role
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      sessionStorage.setItem("isLoggedIn", "true");

      if (response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        {/* 🌸 Brand */}
        <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-2">
          StyleUp
        </h1>
        <p className="text-slate-500 text-center mb-8">
          Welcome back! Please login to your account
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-1 font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-pink-200 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full border border-pink-200 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-full 
          hover:bg-pink-700 transition font-semibold"
        >
          Login
        </button>

        {/* Footer Text */}
        <p className="text-sm text-slate-500 text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-pink-600 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

