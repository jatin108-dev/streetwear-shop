import Navbar from "../components/Navbar";
import heroImg from "../assets/images/hero.png"
import Hero from "../components/Hero";
import Features from "../components/Features";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">

      {/* <Navbar /> */}

      {/* HERO */}
      <Hero/>

      {/* FEATURES */}
     <Features/>

{/* SCROLL ARROW */}
<div className="hidden md:flex justify-center absolute bottom-4 left-0 right-0">
  <button
    onClick={() => {
      document.getElementById("products").scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="animate-bounce text-violet-400 text-3xl"
  >
    ↓
  </button>
</div>

      {/* PRODUCTS */}
      <section className="px-6 md:px-16 py-10">

        <h2 className="text-2xl font-semibold mb-6">
          Featured Products
        </h2>

        <div id="products" className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
            "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          ].map((img, i) => (
            <div key={i} className="group cursor-pointer">
              <img
                src={img}
                alt="product"
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition"
              />
              <p className="mt-2 text-sm text-gray-300">
                Product {i + 1}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* BANNER */}
      <section className="px-6 md:px-16 py-10">

        <div className="bg-gray-900 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">

          <h2 className="text-xl md:text-2xl font-semibold">
            Upgrade Your Wardrobe
          </h2>

          <button className="mt-4 md:mt-0 px-6 py-2 bg-violet-500 rounded-lg hover:bg-violet-400 transition">
            Explore Now
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 md:px-16 py-6 text-gray-400 text-sm">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p>© 2026 CLOTHING. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Contact</span>
          </div>

        </div>

      </footer>

    </div>
  );
}