import React from "react";
import MainProductImages from "@/components/MainProductImages";
import {Waves, WavesUp} from "@/components/ThemeIcons";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import HowToOrder from "@/components/HowToOrder";
import Layout from "@/Layouts/Layout";

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
        </>
    ) 
}

Home.layout = page => <Layout children={page} />


export default Home;