import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.et} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            1050 Shencha Road <br /> Nech Sar
          </p>
          <p className="text-gray-500">
            Tel: +251 987 156 534 <br /> Email: amuteachinghosp@gmail.com
          </p>

          <div className="flex flex-row gap-2">
            <button
              onClick={() =>
                window.open(
                  "https://web.facebook.com/p/Arbaminch-University-Teaching-and-Comprehensive-Specialized-Hospital-61559863165124/?_rdc=1&_rdr#",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border border-gray-400 px-4 py-2 rounded text-sm hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer "
            >
              Facebook
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=0RAqUu5sFIM",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border border-gray-400 px-4 py-2 rounded text-sm hover:bg-[#e74c3c]  hover:text-white transition-all duration-500 cursor-pointer "
            >
              YouTube
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://t.me/arbaminch_university",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border border-gray-400 px-4 py-2 rounded text-sm hover:bg-[#3498db] hover:text-white transition-all duration-500 cursor-pointer "
            >
              Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
