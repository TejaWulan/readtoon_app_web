import { lazy } from "react"
import Banner from "./components/Banner"
//const Home = lazy(()  => import('./Pages/Home'))
import React from "react";
import Navbar from "./components/Navbar"; 

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="mt-10 text-center">
        <h1 className="text-xl font-semibold">Halaman Utama</h1>
        <p className="text-gray-600 mt-2">Ini hanya contoh tampilan setelah navbar.</p>
      </div>
    </div>
  );
}
