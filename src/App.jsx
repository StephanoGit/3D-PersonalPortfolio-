import React from "react"
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-cover bg-no-repeat bg-center">
                    <Navbar/>
                    <Hero/>
                </div>
            </div>

            {/* <Social/> */}
            {/* <About/> */}
            {/* <Works/> */}
            {/* <Contact/> */}
        </BrowserRouter>
    )
}

export default App
