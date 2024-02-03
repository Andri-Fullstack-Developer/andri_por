"use client";

import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import About from "@/components/About";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaAngleDown } from "react-icons/fa6";
import { Background } from "@tsparticles/engine";

function Hero() {
  const [text] = useTypewriter({
    words: ["Hello", "I'im", "Web Devoloper", "Full Stack", "Mobile App!"],
    loop: true,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div
      name="home"
      className="h-[85vh] w-full bg-[url(/images/bacground.jpg)] "
    >
      <div className="bg-[#0077b6] h-[85vh] opacity-80 w-full flex justify-center">
        <div className="flex flex-col justify-center items-center z-20 relative">
          <h1
            className="font-header text-center text-white sm:text-left sm:text-5xl lg:text-6xl text-3xl tracking-wider mb-3"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Hello I&#39;m Andrianto!
          </h1>
          <h3
            className="text-white text-2xl sm:text4xl lg:text-5xl tracking-wide "
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            {text}
            <Cursor cursorColor="white" />
          </h3>

          <ScrollLink
            to="about" 
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="py-2 px-6 absolute bottom-0  rounded-full text-lg font-semibold transition duration-300 ease-in-out  flex flex-col justify-center items-center text-white"
          >
            Get Started
            <h1 className="animate-bounce text-gray-950 text-center mt-14 text-xl">
              <FaAngleDown size={30} />
            </h1>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
