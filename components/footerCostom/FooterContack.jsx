import React from "react";
import { TiHome } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa";

function FooterContack() {
  const Contack = [
    {
      icon: TiHome,
      title: "Indonesia, Jawa Timur Surabaya",
    },
    {
      icon: MdEmail,
      title: "andri.code25@gmail.com",
    },
    {
      icon: FaPhone,
      title: "+62 990 772 88",
    },
    {
      icon: FaPrint,
      title: "+62 990 772 88",
    },
  ];
  return (
    <>
      <h1 className="mb-[2em] text-lg md:text-[1.4rem] tracking-wide font-bold text-center md:text-start ">
        CONTACT
      </h1>
      {Contack.map((data, i) => (
        <div key={i}>
          <h6 className="mb-[1.5em] font-normal text-md md:text-lg  tracking-wide flex items-center">
            <data.icon className="mr-2" size={27} />
            <span className="text-md">{data.title}</span>
          </h6>
        </div>
      ))}
    </>
  );
}

export default FooterContack;
