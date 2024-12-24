import React, { useState, useRef } from "react";
import { Lock, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { background } from "../../assets";
import { MapPin, Phone, Navigation } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Description: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    emailjs
      .sendForm(
        process.env.SERVER_ID,
        process.env.TAMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.PUBLIC_KEY,
        }
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen p-2">
      <div
        className="flex bg-gradient-to-r from-[#12100E] to-[#2B4162] flex-col bg-[#3c3c3c] bg-opacity-100 border-[#828282] shadow-black rounded-[10px] lg:w-[78%]  mb-20 md:h-[76%] md:w-[90%] h-[86%] w-[100%]"
        style={{
          boxShadow: "1px 10px 90px 10px rgba(255, 255, 255,0.1)",
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="bg-[rgb(40,39,39)] h-10 rounded-tl-[10px] flex items-center justify-evenly pl-5 rounded-tr-[10px] w-full">
          <div className="flex md:ml-[-32%] ml-[-15%] relative items-center justify-center gap-2">
            <div
              className="h-3 w-3 rounded-[100%] bg-[#ff0000] cursor-pointer"
              onClick={handleButtonClick}
            ></div>
            <div className="h-3 w-3 rounded-[100%] bg-[#ffcc00]"></div>
            <div className="h-3 w-3 rounded-[100%] bg-[#00ff00]"></div>
          </div>
          <div className="flex flex-row bg-[#3c3c3c] bg-opacity-100 items-center justify-center  border-[#828282] shadow-black rounded-[8px] md:h-[50%] sm:w-[30%] md:w-[34%] xl:w-[18%] lg:w-[30%] h-[70%] w-[50%]">
            <div className="inset-y-0 flex-row justify-evenly h-full w-full left-0 pl-3 flex items-center pointer-events-none">
              <div className="flex flex-row items-center gap-2">
                <Lock
                  className="size-4 text-[#828282] hover:text-gray-300 transition-colors duration-300"
                  style={{
                    filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))",
                  }}
                />
                <p className="text-gray-300 text-sm sm:text-sm md:text-sm font-medium text-[10px] text-center">
                  www.about.com
                </p>
              </div>
              <button
                aria-label="Reload"
                className="relative inline-flex items-center justify-center w-10 h-10 rounded-full text-[#828282] shadow-md hover:scale-105 transform transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <RefreshCcw className="w-5 h-4 md:w-6 md:h-5 animate-spin" />
                <span className="sr-only">Reload</span>
              </button>
            </div>
          </div>
        </div>

        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="bg-[#222329] xl:w-[70%] flex h-[90%] w-[90%] md:h-[80%] md:w-[90%] rounded-md">
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 overflow-auto scrollbar-none rounded-md bg-gray-800">
              <h2 className="text-sm md:text-lg font-bold flex items-center justify-center text-white mb-6">
                Contact Me
              </h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="block text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-[15px] p-1 h-[4%] font-[offside] md:h-[6%] md:text-[20px] md:mt-2 text-white bg-transparent rounded-lg border-b-[1px]"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-[15px] p-1 h-[4%] font-[offside] md:h-[6%] md:text-[20px] md:mt-2 text-white bg-transparent rounded-lg border-b-[1px]"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="Subject"
                    value={formData.Subject}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-[15px] p-1 h-[4%] font-[offside] md:h-[6%] md:text-[20px] md:mt-2 text-white bg-transparent rounded-lg border-b-[1px]"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2">Description</label>
                  <textarea
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full focus:outline-none text-[15px] p-1 h-[4%] font-[offside] md:h-[6%] md:text-[20px] md:mt-2 text-white bg-transparent rounded-lg border-b-[1px]"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full outline-none text-[15px] p-1 h-[9%] font-[offside] md:h-[8%] md:text-[20px] md:mt-2 text-white bg-transparent rounded-lg border-[1px] hover:bg-slate-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="w-1/2 p-8 hidden md:flex md:flex-col justify-center items-center bg-gray-700">
              <div className="md:mt-[-72%] lg:mt-[-54%]">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-6 font-sans">
                  Contact Information
                </h2>
                <p className="text-gray-400 mb-4 text-base md:text-lg lg:text-xl font-light">
                  We’re open for any suggestion or just to have a chat.
                </p>
                <ul className="text-gray-400 space-y-3 flex flex-col items-start justify-start">
                  <li>
                    <div className="flex items-center gap-4 justify-center">
                      <MapPin className="size-14" />
                      <div className="font-light text-sm md:text-base lg:text-lg">
                        <strong>Address:</strong> Mhatre gate, Samarth Krupa chawl, Diva-Agasan Rd, behind drip drop School, Thane, Maharashtra
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-3 justify-center">
                      <Phone className="size-8" />
                      <div className="font-light text-sm md:text-base lg:text-lg">
                        <strong>Phone:</strong> +91 7906172359
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-3 justify-center">
                      <Navigation className="size-8" />
                      <div className="font-light text-sm md:text-base lg:text-lg">
                        <strong>Email:</strong> ajaysdoriyal@gmail.com
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
