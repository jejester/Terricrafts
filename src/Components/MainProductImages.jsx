import {React} from "react";
import { ReactTyped } from "react-typed";


function MainProductImages(){
    return(
        <>
            <div className="image-showcase flex-col lg:flex-row relative flex items-center justify-center product-group px-20 lg:pt-28 overflow-hidden xl:overflow-visible">
                <div className='product-group-child flex-1 relative bg-graph-light dark:bg-graph-dark bg-no-repeat bg-1000px'>
                    <img src="./images/products/product-group-shadow.png" alt="" className="" />
                </div>
                <div className="main-tagline relative flex flex-col items-center lg:items-start justify-start text-balance flex-1 mt-5 px-1 mx-5 gap-5">
                    <ReactTyped
                        className="text-red-400 dark:text-yellow-200 text-2xl lg:text-6xl xl:text-8xl flex-1 tagline tracking-tighter"
                        strings={["MADE FOR YOU", "MADE BY US ❤"]}
                        typeSpeed={80}
                        backSpeed={60}
                        loop={true}
                    ></ReactTyped>
                    <p className="flex-1 align-middle text-slate-800 dark:text-white text-sm md:text-lg lg:text-2xl tracking-wide text-justify">Bring your creative ideas to life with 
                        our <span className="text-red-900 dark:text-yellow-100">print and cut services</span>, 
                        designed for anyone who needs high-quality, custom-crafted products that make an impact. 
                        Whether it’s <span className="underline decoration-red-500 dark:decoration-yellow-100 italic">personalized packaging</span>, <span className="underline decoration-red-500 dark:decoration-yellow-100 font-medium">unique event decor</span>,
                        or <span className="underline decoration-red-500 dark:decoration-yellow-100 font-semibold">branded materials</span>, 
                        we bring your vision to reality with precision and attention to detail. Using premium 
                        materials and state-of-the-art equipment, we ensure each product is beautifully crafted to suit your style and purpose.</p>
                        <button className="mt-3 font-bubblegum text-sm lg:text-lg px-6 py-3 lg:px-8 rounded-full text-gray-700 bg-yellow-200 shadow-sm shadow-gray-300 hover:bg-yellow-300 hover:-translate-y-1 transition-all ease duration-300"> 
                            EXPLORE NOW
                        </button>
           
                </div>
                    {/* <div className="absolute -z-50 md:-top-20 left-0"> 
                        <img className="opacity-30 dark:opacity-5" src="./images/decorations/graph.png" alt="" />                     
                    </div>
                    <div className="absolute -z-50 bottom-0 md:-top-20 right-0 lg:-right-4"> 
                        <img className="opacity-30 dark:opacity-5" src="./images/decorations/graph.png" alt="" />                     
                    </div> */}
                    {/* <div className="absolute -z-10 scale-50 -bottom-0"> 
                        <img className="xl:scale-75 dark:opacity-5" src="./images/decorations/worm.png" alt="" />                     
                    </div> */}
                    <div className="absolute -z-50 scale-50 mt-20 -top-80 -right-96 md:-top-96 md:-right-60"> 
                        <img className="hidden xl:block xl:scale-75 opacity-85 dark:opacity-55" src="./images/decorations/flowers.png" alt="" />                     
                    </div>
            </div>
        </>
    )
}

export default MainProductImages;