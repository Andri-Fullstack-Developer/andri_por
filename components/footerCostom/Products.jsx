import React from "react";
import Link from "next/link";

function Products() {
  const Poducts = [
    {
      title: "HTML5",
      link: "https://html.com/html5/",
    },
    {
      title: "PHP",
      link: "https://www.w3.org/Style/CSS/",
    },
    {
      title: "Laravel",
      link: "https://laravel.com/",
    },
    {
      title: "React",
      link: "https://react.dev/",
    },
  ];

  return (
    <>
      <h1 className="mb-[2em] text-lg md:text-[1.4rem] tracking-wide font-bold ">
        PRODUCTS
      </h1>
      {Poducts.map((data, i) => (
        <Link key={i} href={data.link} target="_">
          <h6 className="mb-[1.5em] font-normal text-md md:text-lg lg:text-xl tracking-wide">
            {data.title}
          </h6>
        </Link>
      ))}
    </>
  );
}

export default Products;
