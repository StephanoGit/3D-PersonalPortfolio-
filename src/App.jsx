import React, { useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Social from "./components/Social";
import About from "./components/About";


import GrainyOverlay from "./components/GrainyOverlay";


const App = () => {
  return (
    <BrowserRouter>
        <GrainyOverlay alpha={0.2}>
            <div className="z-4 bg-primary">
                <div className="bg-cover bg-no-repeat bg-center">
                    <Navbar/>
                </div>
            </div>
            <Hero/>
            <Social/>
            <About/>
            {/* <Works/> */}
            {/* <Contact/> */}
        </GrainyOverlay>
    </BrowserRouter>
  );
};

export default App;
