import { lazy } from "react"
import Banner from "./components/Banner"
//const Home = lazy(()  => import('./Pages/Home'))
import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./components/home/Hero"; 
import Favorite from "./components/home/Favorite";
import Separate from "./components/home/Separate";
import Footer from "./components/Footer"
import TabGenre from "./components/home/TabGenre"

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero/>
      <Separate/>
              <Favorite/>
              <TabGenre/>
        <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow">
      </div>
      <Footer />
    </div>
    </div>
    
  );
}
