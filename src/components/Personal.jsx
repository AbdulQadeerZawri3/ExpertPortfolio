import React from "react";
import Contactus from "./Contactus";

function Personal() {
  return (<>
      <div className="w-[90%] mx-auto mt-[7%] mb-[9%]">
      <div className="w-full justify-center items-center mb-7 py-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold py-5 ">Personal</h2>
        <h2 className="text-2xl font-normal py-4">What am I doing in my Spare Time</h2>
      </div>
      <span className=" block w-[90%] pt-[10%] mx-auto border-t  border-gray-400 border-solid"></span>
      <div className="flex flex-col mx-auto">
        <div  className="flex flex-col py-8 items-center">
        <h2 className="text-4xl py-5 ">Family</h2>
        <p>Rooted in the rich tapestry of Balochistan's unique culture, I am deeply connected to my family, the heart and soul of my world. From the rugged mountains to the vast deserts, our heritage resonates in every facet of our lives, shaping our traditions and values. Spending time with my loved ones is a cherished treasure, as we come together to share laughter, stories, and the warmth of our bonds. In our gatherings, we celebrate the essence of Balochi heritage, embracing its vibrant colors, tantalizing flavors, and timeless traditions. Our unity is our strength, and in each moment spent with family, I am reminded of the beauty and resilience of our culture, a beacon of light illuminating our path forward.</p>
        </div>
        <div className="flex flex-col py-8 items-center">
            <h2 className="text-4xl py-5 ">Writing </h2>
            <p>Immersed in the allure of life's myriad wonders, I find inspiration in the beauty that surrounds us, from the delicate petals of a blooming flower to the majestic hues of a sunset painting the sky. Through my writing, I aim to capture the essence of these enchanting moments, inviting others to join me in marveling at the intricacies of the world around us. With each word, I seek to weave a tapestry of appreciation for the simple joys and extraordinary wonders that adorn our existence, celebrating the beauty of every thing, big and small</p>
        </div>
        <div className="flex flex-col py-8 items-center">
            <h2 className="text-4xl py-5">Photography</h2>
            <p>Photography is my passion, my creative outlet through which I capture the essence of every beautiful moment life has to offer. With camera in hand, I become a storyteller, weaving narratives of joy, love, and wonder with each click of the shutter. From the soft glow of a sunrise to the vibrant hues of a bustling cityscape, I seek to freeze-frame the magic of fleeting moments, preserving them for eternity. Through my lens, I invite you to join me on a journey of discovery, where every photograph is a window into the beauty that surrounds us, waiting to be explored and cherished.</p>
        </div>
      </div>

    </div>
    <Contactus/>
    </>

  );
}

export default Personal;
