import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  // 🔥 outside click → close dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[#050b28]/95 border-b border-gray-800">
        {/* sticky top-0 z-50 bg-[#020617] border-b border-gray-800 */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-gray-200">

        {/* LOGO */}
        <h1 className="text-lg font-semibold tracking-widest text-violet-400">
          CLOTHING
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <Link to="/" className="hover:text-violet-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-violet-400 transition">
            Shop
          </Link>
          <Link to="/admin" className="hover:text-violet-400 transition">
            Admin
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 relative" ref={menuRef}>

          {/* CART */}
          <span className="cursor-pointer hover:text-violet-400 text-lg transition">
            🛒
          </span>

          {/* PROFILE */}
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer text-xl hover:text-violet-400 transition"
          >
            👤
          </span>

          {/* DROPDOWN */}
          {showMenu && (
            <div className="absolute right-0 mt-12 w-44 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-2xl p-2">

              {/* Login */}
              <Link
                to="/login"
                onClick={() => setShowMenu(false)}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition group"
              >
                <span className="text-lg group-hover:text-violet-400">🔐</span>
                <span className="text-sm text-gray-300 group-hover:text-violet-400">
                  Login
                </span>
              </Link>

              {/* Divider */}
              <div className="h-px bg-gray-800 my-1"></div>

              {/* Signup */}
              <Link
                to="/signup"
                onClick={() => setShowMenu(false)}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition group"
              >
                <span className="text-lg group-hover:text-violet-400">✨</span>
                <span className="text-sm text-gray-300 group-hover:text-violet-400">
                  Signup
                </span>
              </Link>

            </div>
          )}

        </div>

      </div>
    </nav>
  );
}