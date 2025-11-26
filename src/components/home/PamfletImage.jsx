import React from "react";
import PamfletImage from "../../assets/img/pamflet/musicvideo.png"; 

export default function Hero() {
  return (
    <section className="relative w-full h-[100px] md:h-[200px] lg:h-[200px] overflow-hidden">
      {/* Background Image */}
      <img
        src={PamfletImage}
        alt="Pamflet"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-4 md:px-12 lg:px-20">
          <h1
            className="text-white font-bold text-lg md:text-2xl lg:text-3xl drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
          >
            Buat video musik komik favorit kamu.
          </h1>

          <h2
            className="text-white font-medium text-sm md:text-lg lg:text-xl mt-2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
          >
            Dapatkan uang dari viewer
          </h2>
        </div>
      </div>
    </section>
  );
}
