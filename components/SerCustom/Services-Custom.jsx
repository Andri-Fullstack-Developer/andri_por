import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function ServicesCustom() {
  const serviList = [
    {
      foto1: "/images/svg/icon-development-white.svg",
      foto2: "/images/svg/icon-development-black.svg",
      heding: "WEB DEVELOPMENT!",
      des: "Discover the exciting world of web development and unleash the power of coding!",
    },
    {
      foto1: "/images/svg/icon-mobile-white.svg",
      foto2: "/images/svg/icon-mobile-black.svg",
      heding: "MOBILE DEVELOPMENT!",
      des: " Dive into the world of mobile development and bring your app ideas to life!",
    },
    {
      foto1: "/images/svg/icon-email-white.svg",
      foto2: "/images/svg/icon-email-black.svg",
      heding: "EMAIL DEVELOPMENT!",
      des: "Create and optimize engaging email campaigns to reach your audience effectively!",
    },
    {
      foto1: "/images/svg/icon-design-white.svg",
      foto2: "/images/svg/icon-design-black.svg",
      heding: "WEB DESIGN!",
      des: "Explore the world of web design and create visually stunning and user-friendly websites!",
    },
    {
      foto1: "/images/svg/icon-content-white.svg",
      foto2: "/images/svg/icon-content-black.svg",
      heding: "TECHNICAL WRITING!",
      des: "Communicating complex technical information in a clear and concise manner is the essence of technical writing.",
    },
  ];

  const [hoverStatus, setHoverStatus] = useState(
    Array(serviList.length).fill(false)
  );
  const { theme } = useTheme();


  const handleHover = (index, isHovered) => {
    const newHoverStatus = [...hoverStatus];
    newHoverStatus[index] = isHovered;
    setHoverStatus(newHoverStatus);
  };

  return (
    <>
      {serviList.map((data, i) => (
        <div
          key={i}
          className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] lg:w-80 lg:h-80 flex  flex-col justify-center items-center border-2 border-[#0076b65e] rounded-md p-5 shadow-2xl hover:bg-[#0077b6] hover:text-white"
          onMouseEnter={() => handleHover(i, true)}
          onMouseLeave={() => handleHover(i, false)}
        >
          <figure className="p-2 ">
            <Image
              src={hoverStatus[i] ? (theme === "dark" ? data.foto2 : data.foto1) : (theme === "dark" ? data.foto1 : data.foto2)}
              width={150}
              height={150}
              alt="Shoes"
              className="rounded-xl w-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:md-[150px]"
              onMouseEnter={() => handleHover(i, true)}
              onMouseLeave={() => handleHover(i, false)}
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2
              className={`font-bold text-[10px] md:text-lg ${
                hoverStatus[i] ? "text-white" : "text-[#0077b6]"
              }`}
            >
              {data.heding}
            </h2>
            <p className="font-medium text-[8px] md:text-[15px]">{data.des}</p>
          </div>
        </div>
      ))}
      
    </>
  );
}

export default ServicesCustom;
