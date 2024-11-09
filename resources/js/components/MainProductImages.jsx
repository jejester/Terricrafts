import React from "react";
import { ReactTyped } from "react-typed";

function MainProductImages(){
    return(
        <>
            <div className="image-showcase flex-col lg:flex-row relative flex items-center justify-center product-group px-20 mt-10 lg:mt-28">
                <div className='product-group-child flex-1'>
                    <img src="./images/products/PRODUCT_GROUP.png" alt="" className="" />
                </div>
                <div className="main-tagline flex flex-col items-start justify-start text-balance flex-1 mt-5 px-1 mx-5 gap-5">
                    <ReactTyped
                        className="text-red-400 dark:text-yellow-200 text-4xl lg:text-8xl flex-1 tagline"
                        strings={["MADE FOR YOU.", "MADE BY US ❤"]}
                        typeSpeed={80}
                        backSpeed={60}
                        loop={true}
                    ></ReactTyped>
                    <p className="flex-1 align-middle text-slate-900 dark:text-white text-sm md:text-lg lg:text-lg tracking-wider text-justify">Bring your creative ideas to life with 
                        our <span className="text-red-900 dark:text-yellow-100">print and cut services</span>, 
                        designed for anyone who needs high-quality, custom-crafted products that make an impact. 
                        Whether it’s <span className="underline decoration-red-500 dark:decoration-yellow-100 italic">personalized packaging</span>, <span className="underline decoration-red-500 dark:decoration-yellow-100 font-medium">unique event decor</span>,
                        or <span className="underline decoration-red-500 dark:decoration-yellow-100 font-semibold">branded materials</span>, 
                        we bring your vision to reality with precision and attention to detail. Using premium 
                        materials and state-of-the-art equipment, we ensure each product is beautifully crafted to suit your style and purpose.</p>
                </div>
            </div>
        </>
    )
}

export default MainProductImages;