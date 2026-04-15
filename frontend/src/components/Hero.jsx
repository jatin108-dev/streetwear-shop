import React from 'react'
import heroImg from "../assets/images/hero.png"
function Hero() {
  return (
   <>
       <section className="px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
   
           {/* LEFT */}
           <div className="max-w-2xl space-y-5">
   
             <p className="text-gray-500 text-xs uppercase tracking-widest">
               Latest Drop
             </p>
   
             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
               Streetwear That <br />
               <span className="text-violet-400">Speaks for You</span>
             </h1>
   
             <p className="text-gray-400 text-sm md:text-base">
               Elevated essentials built for modern everyday wear.
             </p>
   
             <button className="px-6 py-3 rounded-lg bg-violet-500 hover:bg-violet-400 transition text-white">
               Shop Now
             </button>
   
           </div>
   
           {/* RIGHT IMAGE */}
   <div className="w-full md:w-1/2 flex justify-center">
     <img
       src={heroImg}
       alt="fashion"
       className="w-full h-80 md:h-96 object-cover hover:scale-105 transition rounded-xl shadow-lg"
     />
   </div>
   
         </section>
   </>
  )
}

export default Hero
