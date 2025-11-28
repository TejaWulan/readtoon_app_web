//import { lazy } from "react"
//const Home = lazy(()  => import('./Pages/Home'))
import React from "react";
import Hero from "../components/home/Hero"; 
import Favorite from "../components/home/Favorite";
import Separate from "../components/home/Separate";
import TabGenre from "../components/home/TabGenre";
import Pamflet from "../components/home/PamfletImage";
function Home() {
  return (
<div className="w-full overflow-hidden">
      <Hero/>
              <Favorite/>
              <Pamflet/>
                    <Separate/>
              <TabGenre/>
    </div>
    
  );
}

export default Home;
