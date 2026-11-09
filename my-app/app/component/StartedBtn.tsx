import React from "react";

export default function StartedBtn() {
  return (
    <div>
      <button className="group relative overflow-hidden text-blue-500 dark:text-blue-400 font-semibold py-2.5 text-xl w-60 border rounded-2xl border-blue-500 dark:border-blue-400 items-center flex justify-center text-center cursor-pointer transition-all duration-300 bg-transparent hover:text-white dark:hover:text-slate-900 active:scale-95 shadow-sm hover:shadow-md">
        <span className="absolute inset-0 w-full h-full bg-blue-500 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 origin-center transition-transform duration-300 ease-out z-0" />
        <span className="relative z-10 flex items-center justify-center gap-1.5 transition-transform duration-300">
          Get Started
          <span className="inline-block transform translate-y-4 opacity-0 scale-70 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 ease-out text-base">
            ➔
          </span>
        </span>
      </button>
    </div>
  );
}
