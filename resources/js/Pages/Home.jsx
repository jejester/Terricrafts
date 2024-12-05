import React from "react";
import Navbar from "@/components/Navbar";
import MainTagline from "@/components/MainTagline";
import Gradients from "@/components/Gradients";
import MainProductImages from "@/components/MainProductImages";
import Sidebar from "@/components/Sidebar";
import {Waves, WavesUp} from "@/components/ThemeIcons";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";

function Home(){
    return (
        <>
            <div className="main bg-yellow-50 dark:bg-blue-950">
                <Navbar></Navbar>
                <MainProductImages></MainProductImages>
                {/* <div className="absolute top-10 -left-10 w-36 z-30 overflow-hidden">
                    <img src="./images/decorations/cog-light.png" alt="" />
                </div> */}
            </div>
            <div className="bg-yellow-50 dark:bg-blue-950 relative">
                <Waves> </Waves>
                <div className="absolute top-0 -right-10 w-36 xl:w-96 xl:top-10 z-30 overflow-hidden">
                    <img src="./images/decorations/cog-light.png" alt="" />
                </div>
            </div>  
            <Categories></Categories>
            <div className="bg-yellow-50 dark:bg-blue-950">
                <WavesUp></WavesUp>
            </div>
            <HowToOrder/>
            <Banner/>
            <Footer/>
        </>
    ) 







}

export default Home;