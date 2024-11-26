import React from "react";

function Categories(){
    return(
        <>
            <div className="product-categories flex flex-col items-center justify-center">
                <div className="header">
                    <h1 className="text-white text-center font-extrabold  text-6xl lg:text-8xl  font-patrickHand m-10"> Our crafts</h1>
                </div>
                <div className="body-card grid grid-rows-1 gap-2 md:grid-cols-2 b shadow rounded mb-5">
                    <div className="card p-10 hover:rounded-lg  hover:scale-105 transition-all ease-in">
                        <img src="./images/products/5.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                    </div>
                    <div className="card p-10 hover:rounded-lg  hover:scale-105 transition-all ease-in">
                        <img src="./images/products/6.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                    </div>
                    <div className="card p-10 hover:rounded-lg  hover:scale-105 transition-all ease-in">
                        <img src="./images/products/7.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                    </div>
                    <div className="card p-10 hover:rounded-lg  hover:scale-105 transition-all ease-in">
                        <img src="./images/products/8.png" alt="" className="h-70 md:h-90 md:w-96  rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;