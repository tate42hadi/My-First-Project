"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { BsPhoneFill, BsEnvelopeFill, BsGeoAltFill, BsBagCheckFill } from "react-icons/bs";

export default function Contact_Us() {
  const [activeCity, setActiveCity] = useState("Herat");

  return (
    <div className="mb-10 w-full text-slate-800 dark:text-slate-100 transition-colors">
      {/* Upper Main Heading Section */}
      <div className="flex md:px-25 px-4 my-15 flex-col gap-y-4">
        <h1 className="text-4xl font-semibold text-center text-slate-400">
          Contact Us
        </h1>
        <p className="mt-4 text-center text-slate-500 dark:text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
          Have questions or need assistance? Our team is here to help! Reach out
          to us for inquiries about our internet services, support, or business
          solutions.
        </p>
      </div>

      {/* Main Structural Core Grid Wrapper */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-12">
        {/* Section Decorative Title Track */}
        <div className="text-center flex flex-col gap-y-2">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-white uppercase tracking-[0.25em] pl-[0.25em]">
            Get In Touch
          </h1>
          <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800 max-w-xs mx-auto my-2" />
          <p className="text-xl text-gray-400 dark:text-slate-400 font-medium italic">
            You can reach us at any time
          </p>
        </div>

        {/* Two-Column Responsive Layout Body Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start py-4">
          {/* COLUMN 1: THE INPUT CONTENT CONTACT FORM */}
          <div className="w-full flex justify-center lg:justify-start">
            <form className="flex flex-col gap-4 w-full max-w-md bg-[#F3F4F6] dark:bg-slate-800 p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 transition-colors">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 placeholder:text-slate-400 dark:placeholder:text-slate-400 text-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 dark:text-white rounded-xl transition-all"
                />
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 placeholder:text-slate-400 dark:placeholder:text-slate-400 text-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 dark:text-white rounded-xl transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 placeholder:text-slate-400 dark:placeholder:text-slate-400 text-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 dark:text-white rounded-xl transition-all"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 placeholder:text-slate-400 dark:placeholder:text-slate-400 text-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 dark:text-white rounded-xl transition-all"
              />
              <select className="border border-slate-300 dark:border-slate-600 rounded-xl p-3 bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-semibold cursor-pointer w-full focus:ring-2 focus:ring-blue-500">
                <option>Kabul</option>
                <option>Herat</option>
                <option>Jawzjan</option>
                <option>Mazar</option>
              </select>
              <textarea
                placeholder="Type your message..."
                rows={4}
                className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 placeholder:text-slate-400 dark:placeholder:text-slate-400 text-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 dark:text-white rounded-xl transition-all resize-none"
              />
              <button
                className="font-bold py-3 px-10 rounded-xl cursor-pointer text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-lg shadow-sm"
                type="submit"
              >
                Submit Message
              </button>
            </form>
          </div>
          {/* COLUMN 2: INTERACTIVE MAP VIEWPORT & LOCATION DETAILS */}
          <div className="flex flex-col gap-8 w-full">
            {/* The Google Maps Viewport Frame */}
            <div className="w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 relative">
              <Image
                src="/location.png"
                alt="Our global office location map"
                fill
                className="object-cover dark:brightness-90 transition-all duration-300"
                sizes="(max-w-7xl) 100vw"
              />
            </div>

            {/* Inner Heading Block */}
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 font-bold">
                Our location
              </p>
              <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                Connecting near and far
              </h1>
            </div>

            {/* Premium Pill Capsule City Selection Slider Track */}
            <div className="flex flex-row items-center justify-between p-1 bg-slate-200/80 dark:bg-slate-800 border border-slate-300/30 dark:border-slate-700/50 rounded-full w-full max-w-md transition-colors">
              {["Herat", "Kabul", "Jawzjan", "Mazar"].map((city) => {
                const isActive = activeCity === city;
                return (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    className={`flex-1 py-2 text-center text-sm font-bold rounded-full transition-all duration-300 outline-none cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md font-extrabold"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    {city}
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Sales Row */}
              <div className="flex flex-row gap-3 items-center group">
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center border border-transparent dark:border-slate-600/40 shrink-0">
                  <BsBagCheckFill className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg text-slate-500 dark:text-slate-400 font-bold leading-tight">
                    Sales
                  </h1>
                  <p className="text-base text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                    088236452452
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center group">
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center border border-transparent dark:border-slate-600/40 shrink-0">
                  <BsPhoneFill className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg text-slate-500 dark:text-slate-400 font-bold leading-tight">
                    Support
                  </h1>
                  <p className="text-base text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                    09872435
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center group">
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center border border-transparent dark:border-slate-600/40 shrink-0">
                  <BsEnvelopeFill className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg text-slate-500 dark:text-slate-400 font-bold leading-tight">
                    Email
                  </h1>
                  <p className="text-base text-slate-800 dark:text-slate-200 font-semibold mt-0.5 break-all">
                    sales.herat@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center group">
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center border border-transparent dark:border-slate-600/40 shrink-0">
                  <BsGeoAltFill className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg text-slate-500 dark:text-slate-400 font-bold leading-tight">
                    Location
                  </h1>
                  <p className="text-base text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                    Herat/Jebraeel/Azadi 4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
