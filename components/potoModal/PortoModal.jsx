"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
   
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};

customStyles.content["@media only screen and (max-width: 600px)"] = {
  width: "100%%",
};

function PortoModal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const subtitle = useRef(null);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/portofolios?populate=*"
        );
        setImageList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      {imageList.map((data, i) => (
        <div
          key={i}
          className="w-[300px] h-[205px] bg-red-300 rounded-md cursor-pointer"
          onClick={() => openModal(i)}
        >
          <figure
            className="relative"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <Image
              src={`http://localhost:1337${data.attributes.pickers.data[0]?.attributes.url}`}
              width={300}
              height={200}
              alt={data.dataalt}
              className="rounded-md"
            />
            <div className="bg-gray-100 opacity-0 hover:opacity-70 w-full h-full text-center absolute top-0 left-0 flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold">{data.attributes.judul}</h1>
              <p>{data.attributes.diskripsi}</p>
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
              {imageList[selectedImage]?.attributes.judul || ""}
            </h1>
            <button onClick={closeModal} className="text-lg md:text-2xl">
              <IoCloseSharp />
            </button>
          </div>
          {imageList[selectedImage] && (
            <Image
              src={`http://localhost:1337${imageList[selectedImage]?.attributes.pickers.data[0]?.attributes.url}`}
              width={600}
              height={500}
              alt={imageList[selectedImage]?.dataalt || ""}
            />
          )}
        </div>
      </Modal>
    </>
  );
}

export default PortoModal;
