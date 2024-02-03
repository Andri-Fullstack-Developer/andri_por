"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { FaHtml5, FaCss3, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";

function About() {
  return (
    <Element
      id="about"
      className="mt-20 lg:mt-5 h-screen flex flex-col  justify-center items-center gap-4"
    >
      <h1 className=" text-3xl ms:text-4xl lg:text-4xl font-bold p-2 mt-2 border-[#0077b6] border-b-4">
        About
      </h1>
      <div className="w-11/12 flex flex-col-reverse mt-10 md:mt-0 lg:mt-0  md:flex-row gap-4 justify-center items-center">
        <div className="w-full text-center md:text-left ">
          <h1
            className="text-[#0077b6] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 "
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            WHO AM I?
          </h1>
          <h3
            className="text-2xl md:text-3xl lg:text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            I&#39;m Andri, a Web Developer & Mobile App
          </h3>
          <p className="text-lg text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            excepturi rem beatae maiores, quibusdam ex nobis ipsam facere quis
            nostrum odit dolore temporibus aliquid aut aperiam illo? Porro fuga,
            in facilis iste inventore quos. Nam distinctio commodi nobis.
            Dolorem consectetur, iure ducimus asperiores quis quos tenetur eaque
            enim neque at.
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center relative mt-10 md:mt-0 lg:mt-0 ">
            <Image
              src={"/images/profil.png"}
              width={600}
              height={600}
              alt="Profil"
              className=""
            />
            <span className="bottom-3/4 absolute text-2xl md:3xl lg:text-5xl text-red-400 right-3/4 animate-bounce-left-right-infinite">
              <FaHtml5 />
            </span>
            <span className="bottom-3/4 absolute text-2xl md:3xl lg:text-5xl text-blue-400 right-1/4 animate-bounce-top-button-infinit">
              <FaCss3 />
            </span>
            <span className="bottom-1/4 absolute text-2xl md:3xl lg:text-5xl text-yellow-400 right-3/4 animate-bounce-top-button-infinit">
              <IoLogoJavascript />
            </span>
            <span className="bottom-2/4 absolute text-2xl md:3xl lg:text-5xl text-gray-900 right-2/4 animate-bounce-left-right-infinite">
              <FaPhp />
            </span>
            <span className="bottom-1/4 absolute text-2xl md:3xl lg:text-5xl font-bold text-blue-400 right-1/4 animate-bounce-left-right-infinite">
              <SiMysql />
            </span>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
