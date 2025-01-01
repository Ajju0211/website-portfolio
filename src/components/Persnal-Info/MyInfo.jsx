import React from "react";
import { instagram, linkedin, photo, resume } from "../../assets";
import { useNavigate } from "react-router-dom";



const MyInfo = () => {
  const navigator = useNavigate();
  const handleRoute = (route) => {
    navigator('/resume');
  }


  return (
    <div className="bg-transparent sm:h-full sm:w-full flex flex-col items-start py-7 mb-0 xl:h-full xl:w-full lg:h-full lg:w-full">
      <img
        src={photo}
        alt="Profile"
        className="rounded-full lg:w-20 lg:h-20 md:h-20 md:w-20 2xl:w-32 2xl:h-32 2xl:mb-4  h-16 w-16 mb-2"
      />
      <h1 className="2xl:text-4xl lg:text-2xl  md:text-[23px] text-[30px] font-bold font-[offside] flex items-center gap-2">
        Hey, I'm Ajay Singh{" "}
        <span className="inline-block animate-wave origin-bottom-right">👋🏻</span>
      </h1>
      <p className="2xl:text-2xl lg:text-[18px] md:text-[16px] mt-2 font-[offside] text-[#dedcdc] text-[18px] 2xl:text-[24px]">
        Full Stack Web Developer
      </p>
      <p className="font-[offside] md:text-[16px] lg:text-[18px] text-[#dedcdc] text-[18px] 2xl:text-[24px]">
        📍 Thane, Mumbai 🇮🇳
      </p>
      <p className="font-[offside] md:text-[16px] lg:text-[18px] text-[#dedcdc] text-[18px] 2xl:text-[24px]">
        🎓 Student of Computer Science
      </p>
      <div className="flex gap-4 mt-4">
        <div className=" transition ease-in-out delay-120 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-[10px] h-[40px] w-[130px] flex items-center justify-center bg-[#454141] border-[#787777] border-[1px]">
          <img className="relative h-7" src={resume} alt="Resume" />
          <span className="text-sm cursor-pointer sm:text-sm font-[offside] ml-2 " onClick={handleRoute}>Resume</span>
        </div>
        <img className="h-[40px]  transition ease-in-out delay-120 hover:-translate-y-0.5 hover:scale-110 duration-300  cursor-pointer" src={linkedin} alt="LinkedIn" />
        <img className="h-[40px]  transition ease-in-out delay-120 hover:-translate-y-0.5 hover:scale-110 duration-300  cursor-pointer" src={instagram} alt="Instagram" />
      </div>
    </div>
  )
}
  ;

export default MyInfo;
