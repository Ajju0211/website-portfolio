import React from "react";
import { Lock, RefreshCcw } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { photo } from "../../assets";

import {
    SiPython, SiJavascript, SiMongodb, SiReact, SiNextdotjs, SiMysql, SiNodedotjs,
    SiExpress, SiVercel, SiNetlify, SiSocketdotio, SiGit, SiTailwindcss,
    SiHtml5, SiCss3, SiCplusplus
} from 'react-icons/si';

const skills = [
    { name: 'Python', icon: SiPython, color: "#3776AB" },
    { name: 'JavaScript', icon: SiJavascript, color: "#F7DF1E" },
    { name: 'MongoDB', icon: SiMongodb, color: "#47A248" },
    { name: 'ReactJS', icon: SiReact, color: "#61DAFB" },
    { name: 'Next.js', icon: SiNextdotjs, color: "#000000" },
    { name: 'MySQL', icon: SiMysql, color: "#4479A1" },
    { name: 'Node.js', icon: SiNodedotjs, color: "#339933" },
    { name: 'ExpressJS', icon: SiExpress, color: "#000000" },
    { name: 'Vercel', icon: SiVercel, color: "#000000" },
    { name: 'Netlify', icon: SiNetlify, color: "#00C7B7" },
    { name: 'React Native', icon: SiReact, color: "#61DAFB" },
    { name: 'Socket.io', icon: SiSocketdotio, color: "#010101" },
    { name: 'Git', icon: SiGit, color: "#F05032" },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: "#38B2AC" },
    { name: 'HTML', icon: SiHtml5, color: "#E34F26" },
    { name: 'CSS', icon: SiCss3, color: "#1572B6" },
    { name: 'C++', icon: SiCplusplus, color: "#00599C" },
];

const About = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen p-2">
            <div
                className="flex flex-col bg-[#3c3c3c] bg-opacity-100 border-[#828282] shadow-black rounded-[10px] mb-20 md:h-[80%] md:w-[80%] xl:w-[50%] h-[80%] w-[100%]"
                style={{ boxShadow: "1px 10px 90px 10px rgba(255, 255, 255,0.1)" }}
            >
                <div className="bg-[rgb(40,39,39)] h-10 rounded-tl-[10px] flex items-center justify-evenly pl-5 rounded-tr-[10px] w-full">
                    <div className="flex md:ml-[-32%] lg:ml-[-38%] ml-[-15%] relative items-center justify-center gap-2">
                        <div className="h-3 w-3 rounded-[100%] bg-[#ff0000] cursor-pointer" onClick={handleButtonClick}></div>
                        <div className="h-3 w-3 rounded-[100%] bg-[#ffcc00]"></div>
                        <div className="h-3 w-3 rounded-[100%] bg-[#00ff00]"></div>
                    </div>
                    <div className="flex flex-row bg-[#3c3c3c] bg-opacity-100 items-center justify-center border-[#828282] shadow-black rounded-[8px] md:h-[70%] sm:w-[30%] md:w-[38%] lg:w-[30%] xl:w-[18%] h-[70%] w-[60%]">
                        <div className="inset-y-0 flex-row justify-evenly h-full w-full left-0 pl-3 flex items-center pointer-events-none">
                            <div className="flex flex-row items-center justify-start gap-3">
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
                                className="relative justify-items-end inline-flex items-center w-10 h-10 rounded-full text-[#828282] shadow-md hover:scale-105 transform transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            >
                                <RefreshCcw
                                    className="w-5 h-4 md:w-6 md:h-5 animate-spin"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 flex-col items-center justify-center overflow-auto scrollbar-none text-white h-full w-full p-8">
                    <div className="max-w-6xl mx-auto flex flex-col justify-start items-start" >
                        <div className="flex">
                            <div className="flex flex-col items-start justify-center">
                                <h1 className="font-[offside] sm:font-bold">AjaySingh</h1>
                                <h2 className="text-gray-300 mb-6 sm:mb-9 sm:text-[16px] sm:font-sans xl:w-[60%] w-[90%] text-[13px]">
                                    Frontend Engineer proficient in javascript, Next.js, and React, dedicated to developing user-friendly applications.
                                </h2>
                            </div>
                            <img
                                src={photo}
                                alt="Ajay's Avatar"
                                className="rounded-full w-20 sm:w-32 sm:h-32 xl:w-40 xl:h-40 h-20 object-cover border-4 border-gray-700 mb-6"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h2>About</h2>
                            <p className="text-start sm:text-[18px] text-[10px] text-gray-300 max-w-lg mb-8 font-sans leading-relaxed">
                                Hello! I am Ajay, a dedicated Full Stack Developer specializing in MERN stack
                                development with a passion for creating impactful solutions. My work spans across AI,
                                IoT, and innovative tech projects. I aim to push the boundaries of technology and bring
                                creative ideas to life.
                            </p>
                        </div>
                        <div className="flex overflow-auto  flex-col items-start justify-start">
                            <h2 className="text-white text-xl font-semibold mb-4">Tech</h2>
                            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-5 justify-center items-center ">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <skill.icon size={40} color={skill.color} />
                                        <p className="text-gray-200 mt-2 text-xs sm:text-sm">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
