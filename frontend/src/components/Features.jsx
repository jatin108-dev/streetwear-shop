import React from 'react'

function Features() {
  return (
   <>
   <section className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 md:px-16 py-10">

        {["Premium Fit", "Modern Look", "Street Ready"].map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-violet-500 transition"
          >
            <h3 className="text-lg font-semibold text-violet-400">
              {item}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Designed for modern fashion lovers.
            </p>
          </div>
        ))}

      </section>
   </>
  )
}

export default Features
