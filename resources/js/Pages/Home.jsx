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
            </div>
            <div className="bg-yellow-50 dark:bg-blue-950">
                <Waves></Waves>
            </div>
            <div className="bg-red-400 dark:bg-slate-950">
                <Categories></Categories>
            </div>
            <div className="bg-blue-400 dark:bg-blue-950">
                <WavesUp></WavesUp>
            </div>
            <HowToOrder/>
            <Banner/>
            <Footer/>
        </>
    ) 







}

export default Home;