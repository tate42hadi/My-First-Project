"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./component/Nav";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import {
  BsDot,
  BsSpeedometer,
  BsSpeedometer2,
  BsTagFill,
  BsGooglePlay,
  BsApple,
  BsCameraVideoFill,
} from "react-icons/bs";
import Page1 from "./component/Page1";
import PartnerMarquee from "./component/PartnerMarquee";
import Counter from "./component/Countup";

export default function page() {
  return (
    <div>
      <div className="my-15 flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5 md:gap-y-8 md:px-25 px-4">
          <div className="flex flex-col gap-y-3">
            <p className="md:mx-15 border rounded-2xl p-1 md:w-98 border-gray-300 text-[15px] text-gray-500 font-semibold">
              Your communication bridge to the world{" "}
              <a href="" className="text-blue-500">
                Explore Now
              </a>
            </p>
            <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-800">
              Hindukush Bridge
            </h1>
          </div>
          <p className="text-center text-2xl text-gray-500">
            Your trusted path to better connectivity, delivering fast, reliable,
            and secure internet tailored to meet your needs every step of the
            way.
          </p>
          <div className="flex flex-row gap-x-5 md:justify-start justify-around">
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
            <a href="">
              <button className="group relative overflow-hidden cursor-pointer border border-blue-500 py-2 px-4 text-lg font-medium text-slate-800 dark:text-slate-200 rounded-4xl flex flex-row items-center gap-x-2 transition-colors duration-600 hover:text-white active:scale-95">
                <span className="absolute inset-0 top-0 left-0 h-full w-full -translate-x-full bg-blue-500 transition-transform duration-300 ease-out group-hover:translate-x-0 group-active:translate-x-0" />
                <span className="relative z-10 flex flex-row items-center gap-x-2">
                  Learn More{" "}
                  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-8 px-4 md:px-10">
          <Image
            src={"/hero1.png"}
            alt="hero1"
            height={200}
            width={280}
            className="md:w-80 w-full md:h-75 h-60"
          />
          <Image
            src={"/hero2.png"}
            alt="hero2"
            height={200}
            width={280}
            className="md:w-80 w-full md:h-75 h-70"
          />
          <Image
            src={"/hero3.png"}
            alt="hero3"
            height={200}
            width={280}
            className="md:w-80 w-full md:h-75 h-70"
          />
          <div className="text-xl  bg-blue-200 md:text-xl md:h-75 h-50 items-end md:justify-end font-bold p-4 w-full md:w-70 flex">
            <a href="" className="hover:text-blue-500 transition-colors ">
              We Provide Best Services
            </a>
          </div>
        </div>
      </div>
      {/* collab */}
      <div className="flex flex-col gap-5 md:px-20 text-center px-4 my-20">
        <PartnerMarquee />
      </div>
      <Counter />
      {/* HKB */}
      <div className="flex flex-col gap-y-10 my-15">
        <div className="text-center flex flex-col gap-y-2">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-white uppercase tracking-[0.25em] pl-[0.25em]">
            HKB ICT
          </h1>
          <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800 max-w-xs mx-auto my-2" />
          <p className="text-xl text-gray-400 dark:text-slate-400 font-medium italic">
            Internet Management Application
          </p>
        </div>

        <div className="md:px-20 px-8 flex md:flex-row flex-col gap-15">
          <div className="flex justify-center">
            <Image src={"/phone.webp"} alt="phone" height={100} width={220} />
          </div>
          <div className="flex md:flex-row flex-col gap-15">
            {" "}
            {/* father */}
            <div className="flex flex-col gap-y-10 justify-center">
              {" "}
              {/* right 1 */}
              <div className="shadow-lg rounded-2xl px-4 pt-2 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Your Internet Balance</h3>
                <hr className="text-gray-300" />
                <div className="flex flex-row justify-around gap-x-9">
                  <h1 className=" font-semibold flex items-center text-gray-400">
                    <BsDot className="text-gray-300 text-2xl" /> Data Usage:
                    20Gb
                  </h1>
                  <h1 className="flex items-center ">
                    <BsDot className="text-blue-600 text-2xl" />{" "}
                    <span className="font-semibold px-1">Remaining: </span>80Gb
                  </h1>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={"/data_usage.png"}
                    alt="data usage"
                    height={100}
                    width={210}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col text-lg font-semibold">
                  <Image
                    src={"/support.svg"}
                    alt="support"
                    height={80}
                    width={40}
                  />
                  <h2 className="hover:text-blue-300">
                    <a href="">
                      Contact <br /> Customer Service
                    </a>
                  </h2>
                </div>
                <div className="flex flex-col text-lg text-end items-end font-semibold">
                  <Image
                    src={"/router.svg"}
                    alt="support"
                    height={80}
                    width={40}
                  />
                  <h2 className="hover:text-blue-300">
                    <a href="">
                      Manage <br /> User Limits
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col dark:border dark:border-blue-300 gap-y-8 rounded-2xl shadow-2xl">
              {" "}
              {/* right 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-y-1 py-2">
                  <p className="p-2 px-4 font-semibold text-xl">
                    Internet Packages
                  </p>
                  <hr className="text-gray-400" />
                </div>
                <div className="px-2 pt-3 pb-4 flex gap-5 flex-col">
                  {" "}
                  {/* rows */}
                  <div className="bg-gray-100 rounded-4xl py-2 w-full pl-2 flex flex-row gap-1">
                    <div className="bg-blue-500 text-xl text-white py-2 px-3 rounded-full">
                      U2
                    </div>
                    <div className="pr-40">
                      <h1 className="text-[14px] dark:text-blue-800 font-semibold">
                        Speed: 1mb
                      </h1>
                      <p className="text-[13px] font-semibold text-gray-400">
                        Duration: 1 month
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-4xl py-2 w-full pl-2 flex flex-row gap-1">
                    <div className="bg-blue-500 text-xl text-white py-2 px-3 rounded-full">
                      U2
                    </div>
                    <div className="pr-40">
                      <h1 className="text-[14px] dark:text-blue-800  font-semibold">
                        Speed: 1.5mb
                      </h1>
                      <p className="text-[13px] font-semibold text-gray-400">
                        Duration: 1 month
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-4xl py-2 w-full pl-2 flex flex-row gap-1">
                    <div className="bg-blue-500 text-xl text-white py-2 px-3 rounded-full">
                      U2
                    </div>
                    <div className="pr-40">
                      <h1 className="text-[14px] dark:text-blue-800  font-semibold">
                        Speed: 2mb
                      </h1>
                      <p className="text-[13px] font-semibold text-gray-400">
                        Duration: 1 month
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-4xl py-2 w-full pl-2 flex flex-row gap-1">
                    <div className="bg-blue-500 text-xl text-white py-2 px-3 rounded-full">
                      U2
                    </div>
                    <div className="pr-40">
                      <h1 className="text-[14px] dark:text-blue-800  font-semibold">
                        Speed: 2.5mb
                      </h1>
                      <p className="text-[13px] font-semibold text-gray-400">
                        Duration: 1 month
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-4xl py-2 w-full pl-2 flex flex-row gap-1">
                    <div className="bg-blue-500 text-xl text-white py-2 px-3 rounded-full">
                      U2
                    </div>
                    <div className="pr-40">
                      <h1 className="text-[14px] dark:text-blue-800  font-semibold">
                        Speed: 3mb
                      </h1>
                      <p className="text-[13px] font-semibold text-gray-400">
                        Duration: 1 month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page1 />
    </div>
  );
}
