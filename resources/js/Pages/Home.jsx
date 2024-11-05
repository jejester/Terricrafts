import React from "react";
import Navbar from "../components/Navbar";


function Home(){
    return (
        <>
            <Navbar></Navbar>
            <div className="main-tagline flex flex-col items-center justify-center font-extrabold">
                <h1 className="text-pink-300">MADE FOR YOU</h1>
                <h1 className="text-pink-300">MADE FOR YOU</h1>
                <h1 className="text-pink-300">MADE FOR YOU</h1>
                <h1 className="text-pink-300">MADE FOR YOU</h1>
            </div>
            <div className="gradient">
                <img className="96 dark:hidden" src="./images/light_gradient_arch.png" alt="" />
                <img className="96 hidden dark:block" src="./images/dark_gradient_arch.png" alt="" />
            </div>
        </>
    ) 







}

export default Home;