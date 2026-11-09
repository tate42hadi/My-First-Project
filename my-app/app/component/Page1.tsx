"use client";

import { BsSpeedometer, BsSpeedometer2, BsTagFill } from "react-icons/bs";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import StartedBtn from "./StartedBtn";

export default function Page1() {
  return (
    <div className="w-full bg-[#F8F8F8] dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <div className="flex flex-col gap-y-10 md:px-8 px-4">
        <div className="my-15 flex md:flex-row flex-col gap-10 md:px-8 px-4">
          {/* Left Text Header Info */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col md:items-start items-center gap-5">
              <h1 className="text-3xl md:text-start text-center font-semibold md:pr-10 pr-3 text-gray-800 dark:text-white">
                Find the internet package for your needs
              </h1>
              <a href="">
                <button className="group relative rounded-4xl px-5 py-2.5 text-lg font-semibold text-white bg-blue-600 dark:bg-blue-700 transition-all duration-300 overflow-hidden shadow-[0_4px_14px_0_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 ease-out" />

                  <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                    See new packages
                    <span className="inline-block transform translate-x-0 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 text-sm">
                      ✦
                    </span>
                  </span>
                </button>
              </a>
            </div>
            <hr className="border-gray-300 dark:border-slate-700" />
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-500 dark:text-slate-400 font-semibold">
                If you need help choosing the right internet package, {`we're`}{" "}
                here to assist you!
              </h3>
              <p className="text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 w-25">
                <a href="" className="flex flex-row items-center gap-x-1">
                  Contact us <HiArrowRight />
                </a>
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-6">
            <div className="border rounded-2xl border-gray-400 dark:border-slate-700 flex flex-col gap-y-7 items-center bg-white dark:bg-slate-800 px-10 py-5 shadow-md transition-colors">
              <h1 className="bg-blue-100 dark:bg-blue-950/50 shadow-lg w-32 rounded-2xl shadow-blue-200/50 dark:shadow-none text-blue-600 dark:text-blue-400 px-3 py-1 text-center font-semibold">
                Volume based
              </h1>
              <div className="flex flex-col gap-1 text-center">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                  100GB
                </h1>
                <p className="font-semibold text-[15px] text-gray-700 dark:text-slate-300">
                  5MB
                </p>
                <p className="text-[15px] font-semibold text-gray-700 dark:text-slate-300">
                  Free{" "}
                  <span className="text-gray-400 dark:text-slate-500">
                    (12 AM - 8 AM)
                  </span>
                </p>
              </div>
              <StartedBtn />
              <div className="flex flex-col items-start text-start space-y-1 text-gray-700 dark:text-slate-300">
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 100GB
                </p>
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 1 Month
                </p>
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 700 AFN
                </p>
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 5 Mbps
                </p>
              </div>
            </div>

            <div className="border rounded-2xl border-gray-400 dark:border-slate-700 flex flex-col gap-y-7 items-center bg-white dark:bg-slate-800 px-10 py-5 shadow-md transition-colors">
              <h1 className="bg-blue-100 dark:bg-blue-950/50 shadow-lg w-25 text-center rounded-2xl shadow-blue-200/50 dark:shadow-none text-blue-600 dark:text-blue-400 px-3 py-1 font-semibold">
                Unlimited
              </h1>
              <div className="flex flex-col gap-1 text-center">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                  4Mbps
                </h1>
                <p className="font-semibold text-[15px] text-gray-700 dark:text-slate-300">
                  5MB
                </p>
                <p className="text-[15px] font-semibold text-gray-700 dark:text-slate-300">
                  Free{" "}
                  <span className="text-gray-400 dark:text-slate-500">
                    (12 AM - 8 AM)
                  </span>
                </p>
              </div>
              <StartedBtn />
              <div className="flex flex-col items-start text-start space-y-1 text-gray-700 dark:text-slate-300">
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 100GB
                </p>
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 1 Month
                </p>
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 700 AFN
                </p>
                <p className="flex text-lg flex-row gap-x-2 items-center">
                  <HiCheck className="text-green-500" /> 5 Mbps
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="py-15 flex flex-col gap-8">
          <div className="text-center flex flex-col gap-y-2 select-none">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-teal-400 dark:from-blue-400 dark:to-teal-300">
              Services
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Lightning-Fast Connectivity
            </p>
          </div>

          {/* Father */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto md:px-4 px-1">
            {/* Card 1: High-Speed Wireless Internet */}
            <div className="w-full bg-white dark:bg-slate-800 flex flex-row gap-4 items-center rounded-3xl shadow-lg shadow-gray-200/60 dark:shadow-none border border-transparent dark:border-slate-700/50 py-4 px-4 transition-colors">
              <h2 className="text-3xl bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-200 h-13 w-17 rounded-xl hover:text-white dark:hover:text-white justify-center hover:bg-gray-500 dark:hover:bg-blue-600 items-center flex transition-colors shrink-0">
                <BsSpeedometer />
              </h2>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  High-Speed Wireless Internet
                </h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium text-sm sm:text-base">
                  Providing fast, reliable, and cable-free connectivity with
                  extensive coverage, ideal for both residential and commercial
                  use.
                </p>
              </div>
            </div>

            {/* Card 2: Fiber Optic Internet */}
            <div className="w-full bg-white dark:bg-slate-800 flex flex-row gap-4 items-center rounded-3xl shadow-lg shadow-gray-200/60 dark:shadow-none border border-transparent dark:border-slate-700/50 py-4 px-4 transition-colors">
              <h2 className="text-3xl bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-200 h-13 w-17 rounded-xl hover:text-white dark:hover:text-white justify-center hover:bg-gray-500 dark:hover:bg-blue-600 items-center flex transition-colors shrink-0">
                <BsTagFill />
              </h2>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Fiber Optic Internet
                </h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium text-sm sm:text-base">
                  Ultra fast, stable, and low latency connectivity, perfect for
                  business and high demand users.
                </p>
              </div>
            </div>

            {/* Card 3: Dedicated Business Internet (Centered spans below) */}
            <div className="w-full max-w-2xl bg-white dark:bg-slate-800 flex flex-row gap-4 items-center rounded-3xl shadow-lg shadow-gray-200/60 dark:shadow-none border border-transparent dark:border-slate-700/50 py-4 px-4 transition-colors md:col-span-2 md:mx-auto">
              <h2 className="text-3xl bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-200 h-13 w-17 rounded-xl hover:text-white dark:hover:text-white justify-center hover:bg-gray-500 dark:hover:bg-blue-600 items-center flex transition-colors shrink-0">
                <BsSpeedometer2 />
              </h2>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Dedicated Business Internet
                </h1>
                <p className="text-gray-500 dark:text-slate-400 font-medium text-sm sm:text-base">
                  Exclusive, stable, and high reliability connectivity for
                  organizations and businesses, ideal for servers, video
                  conferencing, and online operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 pb-15">
          <div className="text-center flex flex-col gap-y-2 select-none">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-teal-400 dark:from-blue-400 dark:to-teal-300">
              FAQ
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Frequently Asked Questions
            </p>
          </div>

          <div className="flex md:flex-row flex-col gap-5">
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl shadow-sm flex-1 transition-colors">
              <h1 className="text-xl text-blue-600 dark:text-blue-400 hover:text-orange-500 font-semibold mb-2">
                1. How can I subscribe to your internet service?
              </h1>
              <p className="text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed">
                You can easily subscribe by visiting our website, filling out
                the registration form, and selecting the service plan that best
                suits your needs. Our team will contact you to complete the
                setup.
              </p>
            </div>
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl shadow-sm flex-1 transition-colors">
              <h1 className="text-xl text-blue-600 dark:text-blue-400 hover:text-orange-500 font-semibold mb-2">
                2. What Services does Hindukush Bridge provide?
              </h1>
              <p className="text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Hindukush Bridge provides high-speed internet services, secure
                networking solutions, and 24/7 support for residential and
                business customers.
              </p>
            </div>

            {/* FAQ Box 3 */}
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl shadow-sm flex-1 transition-colors">
              <h1 className="text-xl text-blue-600 dark:text-blue-400 hover:text-orange-500 font-semibold mb-2">
                3. Do you offer customer support?
              </h1>
              <p className="text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes, we offer 24/7 customer support via phone, email, and live
                chat to help you with any technical or service-related
                inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
