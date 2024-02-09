"use client";
import React, { useState, useEffect, useRef } from "react";
import PortoModal from "./potoModal/PortoModal";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";


function Portofolio() {
  return (
    <>
      <div
        id="portofolioApp"
        name="portofolio"
        className="mt-24 md:mt-10 lg:mt-10 flex justify-center items-center"
      >
        <div className="w-11/12 h-full flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center mt-3 md:mt-0 lg:mt-0 mb-3">
            <h1 className="text-2xl ms:text-4xl lg:text-4xl font-bold p-2 mt-2 border-[#0077b6] border-b-4 mb-2 text-center">
              Explore my portfolio
            </h1>
            <h4
              className="text-md md:text-lg mb-5 text-center"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              DIVE INTO MY PAST ACHIEVEMENTS AND PROJECTS
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-2 md:mt-3 lg:mt-6">
              <PortoModal />
            </div>
            <Link
              href="../portofolio"
              className="font-bold text-xl md:text-2xl lg:text-3xl mt-5 flex flex-col items-center"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              See all
              <h1 className="animate-bounce text-[#0077b6] text-center mt-10 text-xl">
                <FaAngleDown size={30} />
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
