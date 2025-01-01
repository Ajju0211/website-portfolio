import React from "react";
import { mumbaiUnivercity, python, cplus, java, javascript } from "../../assets";



const Education = () => {

  const tech = [
    { icon: python, name: "Python", description: "Programing Language" },
    { icon: java, name: "Java", description: "Programing Language" },
    { icon: cplus, name: "C++", description: "Programing Language" },
    { icon: javascript, name: "JavaScript", description: "Programing Language" },
  ]
  return (
    <div className="bg-transparent  flex flex-col justify-center items-start mt-4 gap-4 cursor-pointer h-full ">
      <h2 className="2xl:text-3xl ml-4 2xl:ml-0  font-bold font-poppins mt-4">
        🎓 | Education
      </h2>
      <div className="bg-[#282829] bg-opacity-70 lg:h-[100%] lg:w-[100%] xl:h-[100%] xl:w-[100%]  rounded-[35px] 2xl:p-7 md:w-[500px] 2xl:h-[100%] 2xl:w-[100%] h-[400px] w-[370px] hover:scale-95 transition-transform duration-200 flex flex-col 2xl:gap-6 gap-4 justify-start items-start box-border border-[#C3C0C0] border-[1px] border-opacity-10 p-6 shadow-lg shadow-white"
        style={{ boxShadow: "10px 10px 60px 10px rgba(255, 255, 255,0.1)" }}>

        <div className="bg-[#afaeae]  bg-opacity-5  hover:scale-100 hover:bg-[#45454d] transition-transform duration-200 md:w-[450px] rounded-[23px]  2xl:h-[160px] lg:h-[160px] lg:w-[600px] 2xl:w-[600px] h-[100px] w-[330px]  border-[#6c6b6b] border-[1px] border-opacity-30 p-2 flex flex-wrap justify-center items-center gap-3">
          <img
            className="2xl:h-[100px] lg:h-[80px]  lg:w-[80px] md:h-[50px] md:w-[50px] 2xl:w-[100px] ml-4 h-[53px] w-[53px]"
            src={mumbaiUnivercity}
            alt="mongodb"
          />
          <div className="">
            <p className="font-[archivo-narrow] lg:text-[30px] 2xl:font-bold  text-[16px] 2xl:text-3xl font-[10px]">University of Mumbai</p>
            <p className=" 2xl:font-bold  lg:text-[20px] text-[12px] 2xl:text-2xl font-light">Bsc cs, Computer Software Enginering</p>
            <p className="text-xs sm:text-sm">2022-2025</p>
          </div>
        </div>
        <h2 className="2xl:text-3xl mr-[40%] text-[16px] 2xl:ml-0  font-bold font-poppins">
        ♦︎| Programing Language
        </h2>
        <div className="bg-[#afaeae]  bg-opacity-5  hover:scale-100  transition-transform duration-200 md:w-[450px] rounded-[23px]  2xl:h-[200px] lg:h-[180px] lg:w-[600px] 2xl:w-[650px] h-[200px] w-[330px]  border-[#6c6b6b] border-[1px] border-opacity-30 p-2 flex flex-wrap justify-center items-center gap-3">
          {tech.map((technologies, index) => (
            <div
              key={index}
              className=" hover:scale-105 hover:bg-[#45454d] transition-transform duration-200 bg-[#292929] md:w-[200px] 2xl:h-[80px] lg:h-[70px] lg:w-[260px] 2xl:w-[300px] h-[40%] bg-opacity-100 rounded-[10px] w-[140px] flex items-center justify-start gap-1 2xl:gap-4 shadow-[inset_0_1px_7px_1px_rgba(102,_101,_101,_0.5)] border-[#9B9A9A] shadow-[#666565] ml-0"
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
};

export default Education;

