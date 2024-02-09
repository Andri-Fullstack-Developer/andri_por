import React from "react";
import Link from "next/link";

function Useful() {
  const Use = [
    {
      title: "Pricing",
      link: "https://Pricing",
    },
    {
      title: "Settings",
      link: "https://Setting",
    },
    {
      title: "Orders",
      link: "https://Orders",
    },
    {
      title: "Help",
      link: "https://help",
    },
  ];
  return (
    <>
      <h1 className="mb-[2em] text-lg md:text-[1.4rem] tracking-wide font-bold ">
        USEFUL LINKS
      </h1>
      {Use.map((data, i) => (
        <Link href={data.link} key={i} target='_'>
          <h6 className="mb-[1.5em] font-normal text-md md:text-lg lg:text-xl tracking-wide">
            {data.title}
          </h6>
        </Link>
      ))}
    </>
  );
}

export default Useful;
