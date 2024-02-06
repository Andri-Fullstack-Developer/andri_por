"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function SkillsCustom({ onButtonClick }) {
  const SkillsList = [
    {
      SkIcon: "/images/svg/icon-frontend-black.svg",
      SkAlt: "Icon 1",
      SkText: "Frontend",
    },
    {
      SkIcon: "/images/svg/icon-backend-black.svg",
      SkAlt: "Icon 2",
      SkText: "Backend",
    },
    {
      SkIcon: "/images/svg/icon-tols-black.svg",
      SkAlt: "Icon 3",
      SkText: "Tolls",
    },
    {
      SkIcon: "/images/svg/icon-skills-black.svg",
      SkAlt: "Icon 4",
      SkText: "Skills",
    },
  ];

  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <>
      {SkillsList.map((data, i) => (
        <div
          key={i}
          className="w-5/12 h-24 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-2 font-medium text-lg "
        >
          <Image
            src={data.SkIcon}
            height={30}
            width={30}
            alt={data.SkAlt}
            className="absolute z-10 animate-bounce animate-infinite animate-delay-100 animate-ease-in-out"
          />
          <div className="flex w-full h-full p-[24px] justify-center items-center">
            <button
              className={`w-full h-full border-2 border-[#0077b6] rounded-xl hover:bg-[#0077b6] hover:text-white ${
                activeSkill === data.SkText.toLowerCase() 
                  ? "bg-[#0077b6] text-white"
                  : ""
              }`}
              onClick={() => {
                setActiveSkill(data.SkText.toLowerCase());
                onButtonClick(data.SkText.toLowerCase());
              }}
            >
              {data.SkText}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default SkillsCustom;
