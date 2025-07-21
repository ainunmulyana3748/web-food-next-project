import React from "react";
import Image from "next/image";

const DownloadApps = () => {
  return (
    <div className="w-full my-24">
      <div className="container mx-auto px-4 bg-[#b3dcc1] py-16 rounded-3xl relative overflow-visible shadow-2xl hover:shadow-3xl transition-shadow duration-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-16 text-center md:text-left z-10 space-y-6">
            <p className="text-green-700 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in">
              DOWNLOAD APP
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Get Started With
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-800 bg-clip-text text-transparent">
                <p className="font-bold text-white">
                  <span className="text-orange-400">Dimas</span>akin.
                </p>{" "}
                Today!
              </span>
            </h1>

            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 max-w-md mx-auto md:mx-0 opacity-90">
              Discover food wherever and whenever, and get your food delivered
              quickly.
            </p>

            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full 
          transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl
          flex items-center gap-2 mx-auto md:mx-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Get The App
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[55%] hidden md:flex relative z-0 h-[600px]">
            <Image
              src="/images/imageDownload.png"
              alt="Fresh Feast App"
              width={400}
              height={650}
              className="absolute -right-10 -top-20 h-[650px] w-auto transform rotate-[5deg] 
          hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-3xl
          hover:scale-105 cursor-pointer animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApps;
