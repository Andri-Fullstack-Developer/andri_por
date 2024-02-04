"use client";
import React, { useEffect, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { useSelectedLayoutSegment } from "next/navigation";

import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const activeSegment = useSelectedLayoutSegment();

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Services", to: "services" },
    { label: "Portofolio", to: "portofolio" },
    { label: "Contact", to: "contact" },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (activeSegment !== null) {
      setActiveLink(activeSegment);
    }
  }, [activeSegment]);

  return (
    <div className="flex justify-center items-center z-10">
      <nav className="bg-[#0077b6] dark:bg-gray-900 fixed w-11/12 z-20 top-2 border-b lg:rounded-full md:rounded-lg rounded-lg border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            // href="/"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          >
            <Image src={"Ar.svg"} width={20} height={20} alt="Logo" />
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ThemeSwitcher />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-tranfarant focus:outline-none focus:ring-2 focus:ring-tranfarant dark:text-tranfarant dark:hover:bg-gray-700 dark:focus:ring-tranfarant "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <div
                className=" text-3xl item-center gap-3"
                onClick={handleClick}
              >
                {isOpen ? <MdOutlineClose /> : <IoReorderThreeOutline />}
              </div>
            </button>
          </div>
          <div
            className={`w-full md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            } md:block md:ml-2`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 e dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    activeClass="active"
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`p-0 mt-0 ${
                      activeLink === link.to
                        ? "text-red-500 dark:text-black"
                        : "text-white"
                    } rounded md:bg-transparent md:p-0 cursor-pointer`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
