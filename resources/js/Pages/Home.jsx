import React from "react";
import Navbar from "@/components/Navbar";
import MainTagline from "@/components/MainTagline";
import Gradients from "@/components/Gradients";
import MainProductImages from "@/components/MainProductImages";
import Sidebar from "@/components/Sidebar";
import {Waves} from "@/components/ThemeIcons";
import Categories from "@/components/Categories";

function Home(){
    return (
        <>
            <div className="main bg-yellow-50 dark:bg-blue-950">
                <Navbar></Navbar>
                <MainProductImages></MainProductImages>
                {/* <Gradients></Gradients> */}
            </div>
            <div className="bg-yellow-50 dark:bg-blue-950">
                <Waves></Waves>
            </div>
            <div className="bg-red-400 dark:bg-slate-950">
                <Categories></Categories>
            </div>
        </>
    ) 







}

export default Home;