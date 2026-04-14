import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();

        // ✅ TOKEN SAVE
        localStorage.setItem("token", data.token);

        alert("Login successful");
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        alt="bg"
        className="absolute w-full h-full object-cover opacity-30"
      />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Welcome Back
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 outline-none text-white"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 outline-none text-white"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg text-white font-semibold shadow-lg transition hover:opacity-90"
          style={{
            background: "linear-gradient(to right, var(--primary), var(--secondary))",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* SIGNUP LINK */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-violet-400 hover:underline">
            Signup
          </Link>
        </p>
      </form>

    </div>
  );
}