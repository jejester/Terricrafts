import React from "react";
import Navbar from "@/components/Navbar";
import MainTagline from "@/components/MainTagline";
import Gradients from "@/components/Gradients";
import MainProductImages from "@/components/MainProductImages";


function Home(){
    return (
        <>
            <Navbar></Navbar>
            <MainProductImages></MainProductImages>
            <MainTagline></MainTagline>
            <Gradients></Gradients>
        </>
    ) 







}

export default Home;