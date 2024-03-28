import React from "react";
import aslam from "../assets/c.jpeg";
import Contactus from "./Contactus";

function Main() {
    
  return (
   <>
   <div className="hidden  md:flex lg:w-[75%] md:w-[90%] mt-[8%]  mx-auto items-center justify-between mb-[7%]">
      <div className="">
        <img
          src={aslam}
          className="lg:h-[500px] lg:w-[500px] md:w-[400px] md:h-[400px] rounded-full "
          alt="my profile"
        />
      </div>
      <div className="flex flex-col mx-8">
        <h2 className="lg:text-7xl md:text-5xl font-bold py-3">Aslam</h2>
        <h2 className="pt-2 lg:text-2xl md:text-xl font-bold">A Bit More About Me</h2>
        <p className="py-3"> "I am a Business Economist, passionately delving into the complexities of business cycles and trends. I thrive on deciphering their patterns, utilizing insights to navigate the ever-evolving economic landscape. Through writing, I articulate the narratives behind these phenomena, illuminating their significance for fellow enthusiasts."</p>
      </div>

    </div>
    <div className="md:hidden  flex flex-col mt-[8%] w-[90%] mx-auto items-center justify-center mb-[9%]">
      <div className="">
        <img
          src={aslam}
          className="w-[400px] h-[400px] rounded-full "
          alt="my profile"
        />
      </div>
      <div className="flex flex-col mx-auto">
        <h2 className="text-7xl text-center font-bold py-3">Aslam</h2>
        <h2 className="pt-2 text-2xl text-center font-bold">A Bit More About Me</h2>
        <p className="py-3 text-center"> "I am a Business Economist, passionately delving into the complexities of business cycles and trends. I thrive on deciphering their patterns, utilizing insights to navigate the ever-evolving economic landscape. Through writing, I articulate the narratives behind these phenomena, illuminating their significance for fellow enthusiasts."</p>
      </div>

    </div>
    {/* links */}
    <Contactus/>
    </>
  );
}

export default Main;
