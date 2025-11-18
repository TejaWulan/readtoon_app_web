import { useState } from "react";
import logoLight from "../assets/macatoon.png";
import logoDark from "../assets/macatoon.png";
import { Link, useLocation } from "react-router-dom";
import "boxicons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#EAF9FF] py-3 px-6 shadow-sm">
      <div className="flex items-center justify-between">
        {logoLight}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
            alt="Logo"
            className="w-12 h-12"
          />
          <h1 className="text-[#38B6FF] font-bold text-lg tracking-wide">
            MACATOON
          </h1>
        </div>

        {/* Center (Desktop Only): Search Bar */}
        <div className="hidden md:flex items-center w-[40%] max-w-[420px]">
          <input
            type="text"
            placeholder="cari komik"
            className="w-full px-4 py-2 bg-white rounded-l-lg text-sm border border-gray-200 focus:outline-none"
          />
          <button className="px-4 py-2 bg-gray-300 rounded-r-lg flex items-center justify-center">
            <i className="bx bx-search text-xl"></i>
          </button>
        </div>

        {/* Right Menu (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8 text-[#333] text-sm">
          <div className="flex flex-col items-center cursor-pointer">
            <i className="bx bx-user text-2xl"></i>
            <span className="text-[11px] text-center">
              Akun<br />Login/Daftar
            </span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <i className="bx bx-trending-up text-2xl"></i>
            <span className="text-[11px] text-center">
              komik<br />trending
            </span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <i className="bx bx-cart text-2xl"></i>
            <span className="text-[11px]">komik shop</span>
          </div>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          <i className="bx bx-menu"></i>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="mt-4 md:hidden space-y-4">
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="cari komik"
              className="w-full px-4 py-2 bg-white rounded-l-lg text-sm border border-gray-200 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-300 rounded-r-lg flex items-center justify-center">
              <i className="bx bx-search text-xl"></i>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-4">
            <i className="bx bx-user text-2xl"></i>
            <span className="text-sm">Akun — Login/Daftar</span>
          </div>

          <div className="flex items-center space-x-4">
            <i className="bx bx-trending-up text-2xl"></i>
            <span className="text-sm">Komik Trending</span>
          </div>

          <div className="flex items-center space-x-4">
            <i className="bx bx-cart text-2xl"></i>
            <span className="text-sm">Komik Shop</span>
          </div>
        </div>
      )}
    </nav>
  );
}