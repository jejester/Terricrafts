import React from "react";

function Gradients(){
    return(
        <>
            <div className="gradient static">
                <img className="96 dark:hidden" src="./images/gradients/light_gradient_arch.png" alt="" />
                <img className="96 hidden dark:block" src="./images/gradients/dark_gradient_arch.png" alt="" />
            </div>
            <div className="top-gradient">
                <img src="./images/gradients/light_gradient_blob.png" alt="" className="dark:hidden" />
                <img src="./images/gradients/dark_gradient_blob.png" alt="" className="hidden dark:block" />
            </div>
        </>
    );
}

export default Gradients;