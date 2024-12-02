import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function HowToOrder() {
  const [showTitle, setShowTitle] = useState(false);
  const [showStepOne, setShowStep] = useState(false);
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [showStepThree, setShowStepThree] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const checkVisibility = (selector, setState) => {
              const element = document.querySelector(selector);
              if (element) {
                  const rect = element.getBoundingClientRect();
                  const isInView = rect.top < window.innerHeight;
                  setState(isInView);
              }
          };

          checkVisibility(".title", setShowTitle);
          checkVisibility(".step-one", setShowStep);
          checkVisibility(".step-two", setShowStepTwo);
          checkVisibility(".step-three", setShowStepThree);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <div className="bg-blue-400 dark:bg-blue-950 p-10 lg:p-20">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate= {showTitle ? {opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}>
          <h1 className="title text-white text-center font-extrabold text-6xl lg:text-8xl drop-shadow-lg font-patrickHand my-20 lg:my-20 lg:mb-44">How to Order</h1>
        </motion.div>

        <div className="how-to flex flex-col gap-10 lg:gap-36">
          <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={showStepOne ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}>
            <div className="step-one flex items-center justify-start gap-2">
              <div className="how-to-desc basis-1/2 waves-section">
                <h2 className='text-2xl lg:text-7xl font-bubblegum font-bold text-white'>Slide into Our Inbox</h2>
                <p className='text-white text-sm lg:text-xl text-pretty font-jost'>Got an idea? Message us on our social media to get started! 
                  Share your vision, your design ideas, or just tell us what you need—we’re here to bring your imagination to life.</p>
              </div> 
              <div className="how-to-image basis-1/2">
                <img className='lg:h-96' id="message-us" src="./images/materials/message_us.png " alt="Message us" />
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={showStepTwo ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}>
            <div className="step-two flex items-center justify-end">
              <div className="basis-1/2 flex justify-end">
                <img className='lg:h-96' src="./images/materials/deal.png" id="deal" alt="Message us" />
              </div>
              <div className="basis-1/2">
                <h2 className='text-2xl lg:text-7xl font-bubblegum font-bold text-white'>Seal the Deal</h2>
                <p className='text-white text-sm lg:text-xl text-pretty font-jost'>Once we finalize the design and details, it’s time to lock it in with a down payment. 
                  Don’t worry, we’ll guide you through every step, ensuring everything is crystal clear.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={showStepThree ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}>
            <div className="step-three flex items-center justify-start gap-2">
              <div className="how-to-desc basis-1/2">
                <h2 className='text-2xl lg:text-7xl font-bubblegum font-bold text-white'>We Work Our Magic</h2>
                <p className='text-white text-sm lg:text-xl text-pretty font-jost'>Sit back, relax, and let us bring your request to life! From printing to cutting, 
                  we’ll craft your order with love and precision. Once it’s ready, we’ll let you know for pickup or delivery.</p>
              </div>
              <div className="how-to-image basis-1/2">
                <img className='lg:h-96' src="./images/materials/final.png" id="final" alt="Message us" />
              </div>
            </div>
          </motion.div>
        </div>
    </div>
    </>
  )
}

export default HowToOrder