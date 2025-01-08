import React from "react";
import MainProductImages from "../Components/MainProductImages";
import {Waves, WavesUp} from "../Components/ThemeIcons";
import Categories from "../Components/Categories";
import Banner from "../Components/Banner";
import HowToOrder from "../Components/HowToOrder";
import Footer from "../Components/Footer";

function Home(){
    return (
        <>
            <div className="main bg-yellow-50 dark:bg-blue-950">
                <MainProductImages></MainProductImages>
            </div>
            <div className="bg-yellow-50 dark:bg-blue-950 relative">
                <Waves> </Waves>
                <div className="absolute top-0 -right-10 w-36 xl:w-96 xl:top-10 z-30 overflow-hidden">
                    <img src="./images/decorations/cog-light.png" alt="" />
                </div>
                <div className="absolute top-0 mt-24 -left-10 w-36 xl:w-96 xl:top-10 z-30 overflow-hidden">
                    <img className="opacity-85" src="./images/decorations/tulips.png" alt="" />
                </div>
            </div>  
            <Categories></Categories>
            <div className="bg-yellow-50 dark:bg-blue-950">
                <WavesUp></WavesUp>
            </div>
            <HowToOrder/>
            <Banner/>
            <Footer />
        </>
    ) 
}



export default Home;