import React from "react";
import logoMacatoon from "../../assets/macatoon.png"; 

export default function PartnershipBox() {
  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <div
        className="
          w-full 
          max-w-full  
          bg-[#e9faff]
          border border-gray-300 
          rounded-lg
          px-8 py-2       
          flex flex-col sm:flex-row
          sm:items-center
          justify-between
          gap-2
        "
      >
        {/* Teks kiri */}
        <h2 className="text-black font-bold text-sm sm:text-base text-center sm:text-left">
        DALAM KEMITRAAN
        </h2>

        {/* Logo kanan */}
        <div className="flex flex-col items-center sm:items-end leading-none">
          <img
            src={logoMacatoon}
            alt="Macatoon Logo"
            className="w-15 h-15 sm:w-12 sm:h-12 object-contain"
          />
          <span className="text-[#66c7ff] font-semibold text-xs sm:text-sm mt-1">
            INDONESIA
          </span>
        </div>

      </div>
    </div>
  );
}