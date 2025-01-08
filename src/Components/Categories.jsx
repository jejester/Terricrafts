import React from "react";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";  

function Categories(){
    const [showTitle, setShowTitle] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const checkVisibility = (selector, setState) => {
                const element = document.querySelector(selector);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isInView = rect.top < window.innerHeight - 100;
                    setState(isInView);
                }
            };

            checkVisibility(".showcase-title", setShowTitle);
            checkVisibility(".showcase-products", setShowProducts);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <>
            <div className="product-categories flex flex-col items-center justify-center p-10 lg:p-20 bg-red-400 dark:bg-slate-950 bg-dots dark:bg-dots-dark">
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate= {showTitle ? {opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}>
                    <div className="header">
                        <h1 className="showcase-title text-white text-center font-extrabold text-6xl lg:text-8xl drop-shadow-lg font-bubblegum m-10"> Our crafts</h1>
                    </div>
                </motion.div>
                
                <motion.div
                initial={{ opacity: 1, y: -150 }}
                animate= {showTitle ? {opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}>
                    <div className="body-card grid grid-rows-1 gap-2 md:grid-cols-3 rounded mb-5">
                        <div className="card p-10 hover:rounded-lg  hover:scale-105 hover:rotate-12 transition-all ease-in">
                            <img src="./images/products/5.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                        </div>
                        <div className="card p-10 hover:rounded-lg  hover:scale-105 hover:-translate-y-5 transition-all ease-in">
                            <img src="./images/products/6.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                        </div>
                        <div className="card p-10 hover:rounded-lg  hover:scale-105 hover:-rotate-12 transition-all ease-in">
                            <img src="./images/products/7.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                        </div>
                        <div className="card p-10 hover:rounded-lg  hover:scale-105 hover:rotate-12 transition-all ease-in">
                            <img src="./images/products/8.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                        </div>
                        <div className="card p-10 hover:rounded-lg  hover:scale-105 hover:translate-y-5 transition-all ease-in">
                            <img src="./images/products/1.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                        </div>
                        <div className="card p-10 hover:rounded-lg  hover:scale-105 hover:-rotate-12 transition-all ease-in">
                            <img src="./images/products/2.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                        </div>
                    </div>
                </motion.div>
                <div>
                    <p className="text-center lg:text-4xl xl:mx-72 lg:my-20 text-white font-patrickHand drop-shadow-md">Creative, unique, and crafted with care! From custom packaging to personalized designs, we bring your ideas to life with top-quality materials and expert precision. Perfect for any occasion or need!</p>
                </div>
            </div>
        </>
    )
}

export default Categories;