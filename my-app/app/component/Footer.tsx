"use client";

import Image from "next/image";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-transparent text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <hr className="md:mx-8 mx-4 border-blue-800 dark:border-slate-800" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 items-start px-5 py-10 md:px-8 md:py-12">

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-start">
          <Image
            src="/logo_alone.svg"
            alt="logo"
            height={50}
            width={200}
            className="object-contain"
          />
          <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
            Hindukush Bridge ICT Services Company is a Kabul-based company
            specializing in providing internet services to NGOs, government
            entities, businesses, and home users in Afghanistan.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-start lg:pl-12">
          <h1 className="text-xl hover:text-blue-700 dark:hover:text-blue-400 w-fit cursor-pointer transition-colors font-bold text-gray-800 dark:text-white">
            Packages
          </h1>
          <div className="flex flex-col gap-2.5 items-center md:items-start text-[15px] font-medium text-slate-500 dark:text-slate-400">
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Herat Packages</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Kabul Packages</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Mazar-e-Sharif Packages</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Jawzjan Packages</a>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-start lg:pl-12">
          <h1 className="text-xl hover:text-blue-700 dark:hover:text-blue-400 w-fit cursor-pointer transition-colors font-bold text-gray-800 dark:text-white">
            Services
          </h1>
          <div className="flex flex-col gap-2.5 items-center md:items-start text-[15px] font-medium text-slate-500 dark:text-slate-400">
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">High Speed Wireless Internet</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Fiber Optic Internet</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Dedicated Business Internet</a>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-start lg:pl-12">
          <h1 className="text-xl hover:text-blue-700 dark:hover:text-blue-400 w-fit cursor-pointer transition-colors font-bold text-gray-800 dark:text-white">
            Helpful Links
          </h1>
          <div className="flex flex-col gap-2.5 items-center md:items-start text-[15px] font-medium text-slate-500 dark:text-slate-400">
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Services</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">About Us</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">Contact Us</a>
            </h2>
            <h2 className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-bold transition-colors w-fit opacity-90">
              <a href="">FAQs</a>
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-10 flex flex-col gap-8">
        <div className="flex md:flex-row flex-col items-center gap-5 justify-center md:justify-start pt-6 border-t border-slate-100 dark:border-slate-800/60">
          <div className="flex flex-row bg-slate-800/40 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-2xl text-white justify-center items-center h-14 px-4 min-w-[170px] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-blue-500/20 group">
            <a href="" className="flex flex-row items-center gap-2.5">
              <span className="text-2xl text-blue-400 group-hover:text-white transition-colors">
                <BsGooglePlay />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Get it on
                </span>
                <span className="font-bold text-lg leading-tight">
                  Google Play
                </span>
              </div>
            </a>
          </div>
          <div className="flex flex-row bg-slate-800/40 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-2xl text-white justify-center items-center h-14 px-4 min-w-[170px] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-blue-500/20 group">
            <a href="" className="flex flex-row items-center gap-2.5">
              <span className="text-2xl text-slate-300">
                <BsApple />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider  text-slate-600 dark:text-slate-400">
                  Download on the
                </span>
                <span className="font-bold text-lg leading-tight">
                  App Store
                </span>
              </div>
            </a>
          </div>
          <div className="flex flex-row bg-slate-800/40 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-2xl text-white justify-center items-center h-14 px-5 min-w-[170px] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-blue-500/20 group">
            <a
              href="https://movieland.af"
              className="flex flex-row items-center gap-2.5"
            >
              <span className="text-2xl text-blue-400">🎬</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider  text-slate-600 dark:text-slate-400">
                  Free movies on
                </span>
                <span className="font-bold text-lg leading-tight">
                  Movieland
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 justify-between items-center pt-2 text-sm">
          <h1 className="text-slate-500 dark:text-slate-400">
            © 2026{" "}
            <span className="text-blue-700 dark:text-blue-400 font-semibold">
              Hindukush Bridge
            </span>
            , All Rights Reserved.
          </h1>
          <div className="flex flex-row gap-4 text-slate-500 dark:text-slate-400 font-semibold">
            <p className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <a href="">Security</a>
            </p>
            <p className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <a href="">Privacy</a>
            </p>
            <p className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <a href="">Terms</a>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mx-auto py-2 w-fit text-2xl dark:text-gray-300 font-bold hover:text-blue-700 cursor-pointer text-gray-800">Designed By Hadi Haidari</p>
    </div>
  );
}
