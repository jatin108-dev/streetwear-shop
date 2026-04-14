import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        alt="background"
        className="absolute w-full h-full object-cover opacity-30"
      />

      {/* SIGNUP CARD */}
      <div className="relative z-10 w-full max-w-md bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl">

        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Create Account
        </h2>

        {/* USERNAME */}
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 outline-none text-white"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 outline-none text-white"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 outline-none text-white"
        />

        {/* BUTTON */}
        <button className="w-full py-3 bg-violet-500 hover:bg-violet-400 transition rounded-lg text-white font-medium">
          Signup
        </button>

        {/* LOGIN LINK */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-400 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}