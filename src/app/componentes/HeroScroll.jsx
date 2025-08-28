"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

const HeroScroll = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="left w-1/2">
        {/* You can add content here for the left side if needed */}
      </div>
      <div className="right w-1/2">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Editing
                </span>
              </h1>
            </>
          }
        >
          <video
            src="/car-3.mp4"
            alt="hero"
            height="full"
            width="full"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            autoPlay
            muted
            loop
            playsInline
          />
        </ContainerScroll>
      </div>
    
      {/* <div className="max-w-md mx-auto h-[50vh] mt-10 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 border border-blue-300/20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2">
          AZUL
        </h1>
        <p className="text-base md:text-lg text-blue-100 text-center mb-4">
          Tricked-out rides, glow-up mods, and your edit fam. Squad up. Level up. Let’s ride.
        </p>
        <div className="w-full rounded-xl overflow-hidden shadow-lg mb-4">
          <video
            src="/feature-4.mp4"
            className="w-full h-48 md:h-64 object-cover"
            loop
            autoPlay
            muted
            playsInline
          />
        </div>
        <button
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200 cursor-not-allowed opacity-80"
          disabled
        >
          COMING SOON
        </button>
      </div> */}
    </div>
  );
};

export default HeroScroll;