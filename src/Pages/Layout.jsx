import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout() {
  const [navShow, setNavShow] = useState(false);

  return (
    
    <div className="flex flex-col w-full min-h-screen"> 
      <Navbar navShow={navShow} setNavShow={setNavShow} />
      <main className="flex-grow w-full"> 
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;