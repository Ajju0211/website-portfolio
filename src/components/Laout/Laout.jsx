import React from 'react'
import { Lock, RefreshCcw } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Laout = (prop) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/');
    };
  return (
    <div className="flex items-center justify-center h-screen w-screen p-2">
    <div
        className="flex flex-col bg-[#3c3c3c] bg-opacity-100  border-[#828282] shadow-black rounded-[10px] mb-20 md:h-[80%] md:w-[80%] h-[80%] w-[100%]"
        style={{ boxShadow: "1px 10px 90px 10px rgba(255, 255, 255,0.1)" }}
    >
        <div className="bg-[rgb(40,39,39)] h-10 rounded-tl-[10px] flex items-center justify-evenly pl-5 rounded-tr-[10px] w-full">
            <div className="flex md:ml-[-32%] lg:ml-[-38%] ml-[-15%] relative items-center justify-center gap-2">
                <div className="h-3 w-3 rounded-[100%] bg-[#ff0000] cursor-pointer" onClick={handleButtonClick}></div>
                <div className="h-3 w-3 rounded-[100%] bg-[#ffcc00]"></div>
                <div className="h-3 w-3 rounded-[100%] bg-[#00ff00]"></div>
            </div>
            <div className="flex flex-row bg-[#3c3c3c] bg-opacity-100 items-center justify-center  border-[#828282] shadow-black rounded-[8px] md:h-[70%] sm:w-[30%] md:w-[38%] lg:w-[30%] xl:w-[15%] h-[70%] w-[60%]">
                <div className="inset-y-0 flex-row  justify-evenly h-full w-full left-0 pl-3 flex items-center pointer-events-none">
                    <div className="flex flex-row items-center justify-start gap-3">
                    <Lock
                        className="size-4 text-[#828282] hover:text-gray-300 transition-colors duration-300"
                        style={{
                            filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))",
                        }}
                    />
                    <p className="text-gray-300 text-sm sm:text-sm md:text-sm font-medium text-[10px] text-center">
                        www.{{prop}}.com
                    </p>
                    </div>

                    <button
                        aria-label="Reload"
                        className="relative justify-items-end inline-flex items-center  w-10 h-10 rounded-full text-[#828282] shadow-md hover:scale-105 transform transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        <RefreshCcw
                            className="w-5 h-4 md:w-6 md:h-5 animate-spin-slow"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Laout
