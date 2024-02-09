"use client";

import React, { useState } from "react";
import { BsWindow } from "react-icons/bs";
import Image from "next/image";
import SkillsCustom from "./SkilCustom/SkillsCustom";
import TableFrontend from "./SkilCustom/TableFrontend";
import TableBackend from "./SkilCustom/TabelBackeend";
import TableSkills from "./SkilCustom/TableSkills";
import TableTolls from "./SkilCustom/TableTolls";

function Skills() {
  const [currentView, setCurrentView] = useState("frontend");

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div
      name="skills"
      className="mt-24 md:mt-10 lg:mt-10 flex flex-col justify-center items-center"
    >
      <div className="w-11/12 h-screen ">
        <div className="flex flex-col items-center mt-3 md:mt-0 lg:mt-0 mb-5">
          <h1 className=" text-3xl ms:text-4xl lg:text-4xl font-bold p-2 mt-2 border-[#0077b6] border-b-4 mb-2">
            Skills
          </h1>
          <h4
            className="text-md md:text-lg"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            SKILLS THAT I MASTER
          </h4>
        </div>
        <div className="flex w-full flex-col-reverse md:flex-row gap-2">
          <div className="flex w-full lg:w-6/12 h-[40vh] md:h-[52vh] p-2 justify-center items-center ">
            <div className="w-full md:w-11/12 md:h-[52vh] flex flex-wrap  justify-center items-center gap-2 ">
              <SkillsCustom onButtonClick={handleButtonClick} />
            </div>
          </div>
          <div className="flex justify-center items-top w-full lg:w-6/12  p-2 ">
            {currentView === "frontend" ? (
              <TableFrontend />
            ) : currentView === "backend" ? (
              <TableBackend />
            ) : currentView === "tolls" ? (
              <TableTolls />
            ) : (
              <TableSkills />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
