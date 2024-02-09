import React from "react";

function Contack() {
  return (
    <div
      name="contact"
      className=" mt-24 flex justify-center items-center mb-8"
    >
      <div className="w-11/12 flex flex-col ">
        <div className="flex flex-col items-center mt-3 md:mt-0 lg:mt-0 mb-4">
          <h1 className=" text-3xl ms:text-4xl lg:text-4xl font-bold p-2 mt-2 border-[#0077b6] border-b-4 mb-2">
            Contact us
          </h1>
          <h4
            className="text-md md:text-lg uppercase"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Lets talk about everything!
          </h4>
        </div>
        <div className=" w-ful flex flex-wrap ">
          <div className="w-full md:w-6/12 flex flex-col p-2 justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7919.662864821445!2d112.01681926441272!3d-7.029090773541964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e779af31e12ed27%3A0xbf5509078aab71c1!2sSambungrejo%2C%20Dahor%2C%20Kec.%20Grabagan%2C%20Kabupaten%20Tuban%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1707410594025!5m2!1sid!2sid"
              width="580"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-[30vh] md:w-{550px} md:h-[450px] rounded-lg"
            ></iframe>
          </div>
          <div className="w-full md:w-6/12 flex items-center mt-8 md:mt-0">
            <div className="w-full flex items-center justify-center">
              <form action="" className="w-11/12 md:w-9/12">
                <div className="flex flex-col md:flex-wrap gap-2">
                  <div>
                    <span className="uppercase text-sm  font-bold">
                      Full Name
                    </span>
                    <input
                      className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="mt-5 md:mt-0">
                    <span className="uppercase text-sm  font-bold">Email</span>
                    <input
                      className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="mt-5 md:mt-8">
                  <span className="uppercase text-sm  font-bold">Message</span>
                  <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mt-8">
                  <button className="uppercase text-sm font-bold tracking-wide bg-[#0077b6] text-white  p-3 rounded-lg w-full focus:outline-none focus:shadow-outline mb-8">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contack;
