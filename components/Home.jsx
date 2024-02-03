"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import About from "@/components/About";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaAngleDown } from "react-icons/fa6";
import { Background } from "@tsparticles/engine";

function Hero() {
  const [scrolling, setScrolling] = useState(false);

  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="" id="home">
      <div
        className={`  h-screen  overflow-hidden transition-all duration-300 ease-in-out   ${
          scrolling ? "scrolled" : ""
        }`}
      >
        <div className="absolute inset-0 ">
          <Image
            src="/images/03.png"
            width={550}
            height={400}
            alt="Background Image"
            className="object-cover object-center absolute right-0 bottom-48 lg:bottom-10 rounded-s-full opacity-100"
          />
          {/* <div className="absolute inset-0 -z-10 bg-gray-900 opacity-50 "></div> */}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4 ">
            Welcome to Our Awesome Website
          </h1>
          <p className="text-lg  mb-8">
            {text}
            <Cursor cursorColor="red" />
          </p>
          <Link
            href={"/about"}
            className=" py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out  flex flex-col justify-center items-center  "
          >
            Get Started
            <h1 className="animate-bounce text-red-700 text-center mt-16 tetx-xl">
              <FaAngleDown size={30} />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
