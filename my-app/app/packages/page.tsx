import React from "react";
import { HiCheck } from "react-icons/hi";
import CitySelect from "../component/CitySelect";
import StartedBtn from "../component/StartedBtn";

export default function Packages() {
  return (
    <div className="my-15">
      <div className="my-15 flex flex-col gap-4">
        <h1 className="md:text-3xl text-2xl font-semibold text-center">
          Packages
        </h1>
        <p className="md:text-xl text-slate-400 font-semibold text-center text-md">
          Explore our exclusive packages tailored to meet your needs with the
          best quality and support!
        </p>
      </div>
      <CitySelect/>
      <div className="my-15 flex gap-8 flex-col md:px-8 px-4">
        <div className="grid md:gap-5 gap-3 md:grid-cols-4 grid-cols-2">
          {" "}
          {/* cards father */}
          <div className="border dark:bg-slate-800 rounded-2xl  border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 1 */}
            <h1 className="bg-blue-100 shadow-lg w-fit text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Unlimited
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">600GB</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 600GB
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 6Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 6 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3600 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 2 */}
            <h1 className="bg-blue-100 shadow-lg w-fit text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Unlimited
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">3.5Mbps</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3.5Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 4500 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 3 */}
            <h1 className="bg-blue-100 shadow-lg w-fit text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Unlimited
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">5Mbps</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 5Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 7000 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 4 */}
            <h1 className="bg-blue-100 shadow-lg md:w-fit w-35 text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Volume Based
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">250GB</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 250GB
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 6Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 1800 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 1 */}
            <h1 className="bg-blue-100 shadow-lg md:w-fit w-35 text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Volume Based
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">60GB</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 60GB
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 5Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 1 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 500 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 5 */}
            <h1 className="bg-blue-100 shadow-lg md:w-fit w-35 text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Volume Based
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">220GB</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 220GB
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 6Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 1500 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 6 */}
            <h1 className="bg-blue-100 shadow-lg md:w-fit w-35 text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Volume Based
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">180GB</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 180GB
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 5Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 1300 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 7*/}
            <h1 className="bg-blue-100 shadow-lg md:w-fit w-35 text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Volume Based
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">180GB</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 180GB
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 5Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3 Months
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 1300 AFN
              </p>
            </div>
          </div>
          <div className="border dark:bg-slate-800 rounded-2xl border-gray-400 flex flex-col gap-y-7 items-center bg-white px-10 py-5">
            {" "}
            {/* card 8 */}
            <h1 className="bg-blue-100 shadow-lg w-fit text-lg font-semibold rounded-2xl light:shadow-blue-200 text-blue-600 px-3 py-1">
              Unlimited
            </h1>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-5xl font-bold dark:text-blue-700">3Mbps</h1>
              {/* <p className="font-semibold text-[15px]">5MB</p> */}
              {/* <p className="text-[15px] font-semibold">
                Free <span className="text-gray-400">(12 AM - 8 AM)</span>
              </p> */}
            </div>
              <StartedBtn/>
            <div className="flex flex-col items-start text-start">
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 3Mbps
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 1 Month
              </p>
              <p className="flex text-lg font-semibold text-slate-500 flex-row gap-x-2 items-center">
                <h2 className="text-teal-400">✦</h2> 1400 AFN
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
