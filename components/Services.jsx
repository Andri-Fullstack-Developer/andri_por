"use client";
import React, { useState } from "react";
import Image from "next/image";
import ServicesCusotom from "./SerCustom/Services-Custom";

function Services() {
  const [isHoverRed1, setIsHoverRed1] = useState(false);
  const [isHoverRed2, setIsHoverRed2] = useState(false);

  return (
    <>
      <div
        id="services"
        className="mt-24 md:mt-10 lg:mt-10 flex justify-center  items-center  "
      >
        <div className="w-11/12 flex flex-col justify-center items-center mt-3 mb-10">
          <div className="flex flex-col items-center mt-3 md:mt-0 lg:mt-0 mb-3">
            <h1 className=" text-3xl ms:text-4xl lg:text-4xl font-bold p-2 mt-2 border-[#0077b6] border-b-4 mb-2">
              Services
            </h1>
            <h4
              className="text-md md:text-lg"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              HERE&#39;S WHAT I&#39;M GOOD AT
            </h4>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mt-10 md:mt-3 lg:mt-4 gap-8">
            <ServicesCusotom />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
