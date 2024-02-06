"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "react-modal";
import { Background } from "@tsparticles/engine";

const imageList = [
  {
    dataalt: "Portofoli 1",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/25/04/55/cat-7544821_960_720.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 2",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 3",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 4",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 5",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 6",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 7",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 8",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
  {
    dataalt: "Portofoli 9",
    dataimg:
      "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_1280.jpg",
    dataheading: "Kucing",
    datades: "Anda seharusnya tidak lagi mendapatkan kesalahan tersebut",
  },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
  "@media only screen and (max-width: 600px)": {
    content: {
      width: "80%",
    },
  },
};

function PortoModal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const subtitle = useRef(null);

  function openModal(index) {
    setSelectedImage(index);
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = "#0077b6";
    }
  }

  function closeModal() {
    setSelectedImage(null);
    setIsOpen(false);
  }

  useEffect(() => {
    Modal.setAppElement("#portofolioApp");
  }, []);

  const displayedImages = imageList.slice(0, 8);

  return (
    <>
      {displayedImages.map((data, i) => (
        <div
          key={i}
          className="w-[300px] h-[205spx] bg-red-300 rounded-md cursor-pointer"
          onClick={() => openModal(i)}
        >
          <figure className="relative">
            <Image
              src={data.dataimg}
              width={300}
              height={200}
              alt={data.dataalt}
              className="rounded-md"
            />
            <div className="bg-gray-100 opacity-0 hover:opacity-70 w-full h-full text-center absolute top-0 left-0 flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold">{data.dataheading}</h1>
              <p>{data.datades}</p>
            </div>
          </figure>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col ">
          <div className="flex justify-between bg-[#0077b6] text-white font-bold rounded-lg p-2 mb-2">
            <Image src={"/Ar.svg"} width={25} height={100} alt="logo" />
            <h1 className=" text-lx md:text-2xl ">
              {imageList[selectedImage]?.dataheading || ""}
            </h1>
            <button onClick={closeModal} className="text-lg md:text-2xl">
              <IoCloseSharp />
            </button>
          </div>
          <Image
            src={imageList[selectedImage]?.dataimg || ""}
            width={600}
            height={500}
            alt={imageList[selectedImage]?.dataalt || ""}
          />
        </div>
      </Modal>
    </>
  );
}

export default PortoModal;
