import Image from "next/image";
import Link from "next/link";
import React from "react";

import FooterContack from "./footerCostom/FooterContack";
import Useful from "./footerCostom/Useful";
import Products from "./footerCostom/Products";
import Medias from "./footerCostom/Media";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#0076b61e]">
      <div className="w-11/12  flex flex-wrap items-center">
        <div className="w-full me-5 flex md:flex-wrap border-b-2 border-[#0077b6] px-5 py-[20px] justify-center items-center">
          <span className="text-md font-normal hidden md:block md:text-lg lg:text-xl">
            Get connected with us on social networks:
          </span>
          <Medias />
        </div>

        <div className=" w-full flex flex-col md:flex-row gap-2 px-5 py-[20px] ">
          <div className="flex flex-col w-full p-1 items-center md:items-start">
            <div className="flex flex-warp gap-3 text-lg md:text-xl lg:text-[1.4rem] tracking-wide font-bold mb-[2em]">
              <Image src={"/Ar-black.svg"} height={20} width={30} alt="logo" />
              <h1>COMPANY NAME</h1>
            </div>
            <p className="text-md md:text-lg lg:text-xl font-normals tracking-wide">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores voluptatum magnam sit?
            </p>
          </div>
          <div className="flex flex-col w-full p-1 items-center md:items-start">
            <Products />
          </div>
          <div className="flex flex-col w-full  p-1 items-center md:items-start">
            <Useful />
          </div>
          <div className="flex flex-col w-full p-1 ">
            <FooterContack />
          </div>
        </div>
      </div>
      <div className="text-center py-9 w-full bg-[#0077b6] text-white">
        © 2023 Copyright:
        <Link className="text-reset font-bold" href="">
          AndriDevoloper.com
        </Link>
      </div>
    </div>
  );
}

export default Footer;
