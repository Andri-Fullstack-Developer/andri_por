import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Media() {
  const mediaList = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com/",
    },
    {
      icon: FaGoogle,
      link: "https://www.google.com/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/",
    },
    {
      icon: FaGithub,
      link: "https://github.com/",
    },
  ];

  return (
    <>
      <div className="flex flex-warp items-end justify-end gap-[20px] md:ml-auto text-2xl">
        {mediaList.map((data, i) => (
          <Link
            key={i}
            href={data.link}
            target="_"
            className="hover:text-[#0077b6]"
          >
            {React.createElement(data.icon)}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Media;
