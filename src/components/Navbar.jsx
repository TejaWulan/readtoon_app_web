import { useState } from "react";
import logoLight from "../assets/macatoon_smallresolution.png";
import logoDark from "../assets/macatoon.png";
import { Link, useLocation } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

export default function Navbar() {
 return (
    <nav className="w-full bg-accent border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="w-full px-6 py-3">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-8">
          {/* Logo Area */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img 
              src={logoDark} 
              alt="macatoon logo icon" 
              className="h-12 w-12 object-contain"
              width={48}
              height={48}
            />
            <span className="font-heading font-bold text-xl text-primary">MACATOON</span>
          </div>

          {/* Search Bar Area */}
          <div className="flex items-center flex-1 max-w-md mx-auto">
            <label htmlFor="search-input" className="sr-only">Search comics</label>
            <input
              id="search-input"
              type="text"
              placeholder="cari komik"
              className="flex-1 rounded-l-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all ease-in-out duration-200"
              aria-label="Search for comics"
            />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-l-none rounded-r-lg bg-gray-200 text-gray-800 hover:bg-primary hover:text-primary-foreground border border-l-0 border-gray-300 transition-all ease-in-out duration-200"
              aria-label="Search"
            >
              <i className='bx bx-search text-xl'></i>
            </Button>
          </div>

          {/* Menu Icons Area */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <button
              className="flex items-center gap-2 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
              aria-label="Account Login or Register"
            >
              <i className='bx bx-user-circle text-2xl'></i>
              <span className="text-sm font-normal">Akun Login/Daftar</span>
            </button>
            <button
              className="flex items-center gap-2 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
              aria-label="Trending comics"
            >
              <i className='bx bx-trending-up text-2xl'></i>
              <span className="text-sm font-normal">komik trending</span>
            </button>
            <button
              className="flex items-center gap-2 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
              aria-label="Comic shop"
            >
              <i className='bx bx-cart text-2xl'></i>
              <span className="text-sm font-normal">komik shop</span>
            </button>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden items-center justify-between gap-4">
          {/* Logo Area */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="https://c.animaapp.com/mi49nj6nMRTJQv/img/ai_1.png" 
              alt="macatoon logo icon" 
              className="h-10 w-10 object-contain"
              width={40}
              height={40}
            />
            <span className="font-heading font-bold text-lg text-primary">MACATOON</span>
          </div>

          {/* Search Bar Area */}
          <div className="flex items-center flex-1 max-w-xs">
            <label htmlFor="search-input-tablet" className="sr-only">Search comics</label>
            <input
              id="search-input-tablet"
              type="text"
              placeholder="cari komik"
              className="flex-1 rounded-l-lg border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all ease-in-out duration-200"
              aria-label="Search for comics"
            />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-l-none rounded-r-lg bg-gray-200 text-gray-800 hover:bg-primary hover:text-primary-foreground border border-l-0 border-gray-300 transition-all ease-in-out duration-200"
              aria-label="Search"
            >
              <i className='bx bx-search text-xl'></i>
            </Button>
          </div>

          {/* Menu Icons Area */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              className="flex items-center gap-1 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
              aria-label="Account"
            >
              <i className='bx bx-user-circle text-2xl'></i>
            </button>
            <button
              className="flex items-center gap-1 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
              aria-label="Trending"
            >
              <i className='bx bx-trending-up text-2xl'></i>
            </button>
            <button
              className="flex items-center gap-1 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
              aria-label="Cart"
            >
              <i className='bx bx-cart text-2xl'></i>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-3">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex items-center gap-2">
              <img 
                src="https://c.animaapp.com/mi49nj6nMRTJQv/img/ai_1.png" 
                alt="macatoon logo icon" 
                className="h-10 w-10 object-contain"
                width={40}
                height={40}
              />
              <span className="font-heading font-bold text-lg text-primary">MACATOON</span>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button
                // eslint-disable-next-line no-undef
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
                aria-label="Toggle search"
                // eslint-disable-next-line no-undef
                aria-expanded={isSearchExpanded}
              >
                <i className='bx bx-search text-2xl'></i>
              </button>
              <button
                className="text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
                aria-label="Cart"
              >
                <i className='bx bx-cart text-2xl'></i>
              </button>
            </div>
          </div>

          {/* Expandable Search Bar */}
          // eslint-disable-next-line no-undef, no-undef
          {isSearchExpanded && (
            <div className="flex items-center w-full animate-in fade-in slide-in-from-top-2 duration-200">
              <label htmlFor="search-input-mobile" className="sr-only">Search comics</label>
              <input
                id="search-input-mobile"
                type="text"
                placeholder="cari komik"
                className="flex-1 rounded-l-lg border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all ease-in-out duration-200"
                aria-label="Search for comics"
              />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-l-none rounded-r-lg bg-gray-200 text-gray-800 hover:bg-primary hover:text-primary-foreground border border-l-0 border-gray-300 transition-all ease-in-out duration-200"
                aria-label="Search"
              >
                <i className='bx bx-search text-xl'></i>
              </Button>
            </div>
          )}

          {/* Mobile Menu Items */}
          <div className="flex items-center justify-around pt-2 border-t border-gray-200">
            <button
              className="flex flex-col items-center gap-1 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-2"
              aria-label="Account Login or Register"
            >
              <i className='bx bx-user-circle text-2xl'></i>
              <span className="text-xs font-normal">Akun</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-2"
              aria-label="Trending comics"
            >
              <i className='bx bx-trending-up text-2xl'></i>
              <span className="text-xs font-normal">Trending</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-accent-foreground hover:text-primary transition-all ease-in duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-2"
              aria-label="Comic shop"
            >
              <i className='bx bx-cart text-2xl'></i>
              <span className="text-xs font-normal">Shop</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};


