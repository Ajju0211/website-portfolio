import React from "react";
import "./technologies.css"
import {
  express,
  mongodb,
  nodejs,
  react,
  javascript,
  github,
  mysql,
  tailwind,
} from "../../assets";

const technologies = [
  { icon: mongodb, name: "MongoDB", description: "NoSQL Database" },
  { icon: express, name: "Express.js", description: "Node.js Framework" },
  { icon: react, name: "React.js", description: "JavaScript Library" },
  { icon: nodejs, name: "Node.js", description: "Server Language" },
  { icon: mongodb, name: "MongoDB", description: "NoSQL Database" },
  { icon: express, name: "Express.js", description: "Node.js Framework" },
  { icon: react, name: "React.js", description: "JavaScript Library" },
  { icon: nodejs, name: "Node.js", description: "Server Language" },
];
const Tech = [
  { icon: javascript, name: "JavaScript", description: "Programming Language" },
  { icon: mysql, name: "MySQL", description: "SQL Database" },
  { icon: tailwind, name: "Tailwind CSS", description: "Utility-first CSS" },
  { icon: github, name: "GitHub", description: "Version Control" },
  { icon: javascript, name: "JavaScript", description: "Programming Language" },
  { icon: mysql, name: "MySQL", description: "SQL Database" },
  { icon: tailwind, name: "Tailwind CSS", description: "Utility-first CSS" },
  { icon: github, name: "GitHub", description: "Version Control" },
];

const Technologies = () => (
  <div className="bg-transparent  flex flex-col items-start justify-center mt-0 gap-4 cursor-pointer h-full w-screeb">
    <h2 className="2xl:text-3xl ml-4 2xl:ml-0 text-xl font-bold font-poppins  mb-2">
      ✦ Technologies
    </h2>
    <div
      className="bg-white bg-opacity-10 scrollbar-hide lg:h-[100%] lg:w-[100%] xl:h-[100%] xl:w-[100%]  rounded-[35px] 2xl:p-7 md-[] 2xl:h-[100%] 2xl:w-[100%] h-[400px] w-[370px] hover:scale-105 transition-transform duration-200 flex flex-col 2xl:gap-6 gap-4 justify-center items-center box-border border-[#6c6b6b] border-[1px] border-opacity-10 p-6 shadow-lg shadow-white"
      style={{ boxShadow: "10px 10px 60px 10px rgba(255, 255, 255,0.1)" }}
    >
      <div className="bg-[#282829]   bg-opacity-5 overflow-auto scrollbar-none hover:scale-100 transition-transform duration-200 rounded-[23px]  2xl:h-[200px] lg:h-[180px] lg:w-[600px] 2xl:w-[650px] h-[200px] w-[330px]  border-[#6c6b6b] border-[1px] border-opacity-30 p-2 flex flex-wrap justify-center items-center gap-3">
        {technologies.map((technologies, index) => (
          <div
            key={index}
            className=" hover:scale-105 scroll-container scrollbar-hide transition-transform duration-200 bg-[#282829] 2xl:h-[80px] lg:h-[70px] lg:w-[220px] 2xl:w-[300px] h-[40%] bg-opacity-100 rounded-[10px] w-[140px] flex items-center justify-start gap-1 2xl:gap-4 shadow-[inset_0_1px_7px_1px_rgba(102,_101,_101,_0.5)] border-[#9B9A9A] shadow-[#666565] ml-0"
          >
            <img
              className="2xl:h-[58px] lg:h-[50px] lg:w-[50px] 2xl:w-[58px] ml-4 h-[43px] w-[43px]"
              src={technologies.icon}
              alt="mongodb"
            />
            <div className=" font-serif 2xl:font-bold lg:text-lg text-[11px] 2xl:text-xl">
              {technologies.name}
              <p className="font-serif 2xl:text-sm lg:text-sm text-[9px] text-[#bfbebe]">
                {technologies.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#afaeae]   bg-opacity-5  overflow-auto scrollbar-none hover:scale-100 transition-transform duration-200 rounded-[23px]  2xl:h-[200px] lg:h-[180px] lg:w-[600px] 2xl:w-[650px] h-[200px] w-[330px]  border-[#6c6b6b] border-[1px] border-opacity-30 p-2 flex flex-wrap justify-center items-center gap-3">
        {Tech.map((technologies, index) => (
          <div
            key={index}
            className=" hover:scale-105 scroll-container transition-transform duration-200 bg-[#292929] 2xl:h-[80px] lg:h-[70px] lg:w-[220px] 2xl:w-[300px] h-[40%] bg-opacity-100 rounded-[10px] w-[140px] flex items-center justify-start gap-1 2xl:gap-4 shadow-[inset_0_1px_7px_1px_rgba(102,_101,_101,_0.5)] border-[#9B9A9A] shadow-[#666565] ml-0"
          >
            <img
              className="2xl:h-[58px] lg:h-[50px] lg:w-[50px] 2xl:w-[58px] ml-4 h-[43px] w-[43px]"
              src={technologies.icon}
              alt="mongodb"
            />
            <div className=" font-serif 2xl:font-bold lg:text-lg text-[11px] 2xl:text-xl">
              {technologies.name}
              <p className="font-serif 2xl:text-sm lg:text-sm text-[9px] text-[#bfbebe]">
                {technologies.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Technologies;
