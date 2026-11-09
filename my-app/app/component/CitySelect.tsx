"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CitySelect() {
  const cities = ["Kabul", "Herat", "Mazar", "Jawzjan"];
  const [activeCity, setActiveCity] = useState("Herat");

  return (
    <div className="w-full flex items-center justify-center py-10 px-4 bg-transparent select-none">
      
      {/* Outer Capsule Pills Track Component Layout */}
      <div className="flex flex-row items-center justify-between p-1.5 gap-x-1 md:gap-x-2 bg-slate-200 dark:bg-slate-800 border border-slate-300/30 dark:border-slate-700/50 rounded-full w-full max-w-2xl transition-colors">
        {cities.map((city) => {
          const isActive = activeCity === city;
          
          return (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className="group relative flex-1 py-2.5 text-center text-sm md:text-base font-bold transition-colors duration-300 rounded-full outline-none cursor-pointer"
              style={{
                color: isActive ? "#000000" : "var(--text-inactive)"
              }}
            >
              {/* Dynamic Theme Color Mappings based on Active status */}
              <span className={`relative z-10 transition-colors duration-300 ${
                isActive 
                  ? "text-slate-900 font-extrabold" 
                  : "text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200"
              }`}>
                {city}
              </span>

              {/* Framer Motion Layout Liquid Pill Layer Sliding Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeCityIndicator"
                  className="absolute inset-0 bg-[#387dff] rounded-full z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Ghost background overlay indicator layer emerging on cursor hover */}
              {!isActive && (
                <span className="absolute inset-0 bg-slate-300/40 dark:bg-slate-700/40 rounded-full scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-0" />
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}
