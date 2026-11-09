"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

export default function Services() {
  return (
    <div className="my-15 overflow-hidden w-full"> 
      <div className="grid md:grid-cols-3 grid-cols-1 md:px-15 px-4 gap-8 md:gap-5 items-center">
        <div className="flex flex-col gap-9">
          <h1 className="md:text-5xl text-2xl text-center md:text-start md:pt-8 text-slate-400 font-semibold">
            More Features With Application
          </h1>
          <div className="flex sm:flex-row flex-col items-center gap-5 justify-center md:justify-start">
            <div className="flex flex-row bg-orange-400 rounded-2xl hover:text-orange-400 hover:bg-black justify-center items-center h-14 px-3 min-w-[170px] transition-colors cursor-pointer">
              <a href="" className="flex flex-row items-center gap-2 text-white hover:text-inherit">
                <span className="text-2xl"><BsGooglePlay /></span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wide opacity-90">Get it on</span>
                  <span className="font-bold text-lg leading-tight">Google Play</span>
                </div>
              </a>
            </div>
            <div className="flex flex-row bg-orange-400 rounded-2xl hover:text-orange-400 hover:bg-black justify-center items-center h-14 px-4 min-w-[160px] transition-colors cursor-pointer">
              <a href="" className="flex flex-row items-center gap-2 text-white hover:text-inherit">
                <span className="text-2xl"><BsApple /></span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wide opacity-90">Download on the</span>
                  <span className="font-bold text-lg leading-tight">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-full flex items-center justify-center" 
        >
          <Image
            src="/phone.webp"
            alt="phone"
            height={400}
            width={250}
            className="object-contain"
          />
        </motion.div>
        <div className="flex flex-col gap-y-5">
          <h1 className="md:text-3xl text-xl font-semibold text-slate-900 dark:text-white">
            Easily Manage Your Internet with Our App!
          </h1>
          <p className="text-[19px] text-slate-500 dark:text-slate-400 leading-relaxed">
            With our dedicated app, you have full control over your internet.
            Easily manage your package, restrict users, monitor usage, and
            connect directly with our support team. Everything is designed in a
            simple and user-friendly interface, always at your fingertips!
          </p>
          <a href="" className="w-fit">
            <button className="group relative overflow-hidden cursor-pointer border border-blue-500 py-2 px-4 text-lg font-medium text-slate-800 dark:text-slate-200 rounded-4xl flex flex-row items-center gap-x-2 transition-colors duration-300 hover:text-white active:scale-95">
              <span className="absolute inset-0 top-0 left-0 h-full w-full -translate-x-full bg-blue-500 transition-transform duration-300 ease-out group-hover:translate-x-0 group-active:translate-x-0" />
              <span className="relative z-10 flex flex-row items-center gap-x-2">
                Learn More{" "}
                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="my-15 py-10 md:px-16 px-6 gap-8 items-center bg-blue-600 dark:bg-blue-700 rounded-3xl mx-4 md:mx-15 flex flex-col md:flex-row justify-between shadow-xl transition-colors">
        <div className="flex flex-col gap-5 flex-1 max-w-2xl">
          <h2 className="md:text-4xl text-2xl font-bold text-white leading-tight">
            Watch the Latest Movies & Series on Movieland!
          </h2>
          <p className="text-blue-100 font-medium text-lg leading-relaxed">
            On Movieland, access all the latest movies and series with the best
            speed and highest quality. From the newest blockbusters to the most
            popular shows, enjoy seamless streaming. Enter the world of cinema now!
          </p>
          <a href="https://movieland.af" className="w-fit mt-2">
            <button className="group relative overflow-hidden cursor-pointer border border-white py-2 px-5 text-lg font-semibold text-white rounded-4xl flex flex-row items-center gap-x-2 transition-colors duration-300 hover:text-blue-600 active:scale-95">
              <span className="absolute inset-0 top-0 left-0 h-full w-full -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0 group-active:translate-x-0" />
              <span className="relative z-10 flex flex-row items-center gap-x-2">
                Enter Movieland{" "}
                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </a>
        </div>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex-1 flex justify-center items-center w-full max-w-lg"
        >
          <Image
            src="/last_of_us.webp"
            alt="last of us"
            height={400}
            width={520}
            className="object-contain rounded-2xl shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>

    </div>
  );
}
