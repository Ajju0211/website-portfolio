import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/button/Button";


const projects = [
    {
      "title": "Real-Time Chat Application",
      "description": "A real-time messaging platform that enables seamless communication with instant message delivery and notifications. Built with modern technologies to ensure responsiveness and scalability.",
      "link": "url_to_real_time_chat_application_project",
      "tech_stack": ["Node.js", "Express.js", "Socket.io", "MongoDB","JWT Authentication", "React", "Zoostand"]
    },
    {
      "title": "Crypto Wallet",
      "description": "A secure and user-friendly cryptocurrency wallet that allows users to store, send, and receive digital currencies. Focused on delivering high-level encryption and ease of use.",
      "link": "url_to_crypto_wallet_project",
      "tech_stack": ["React", "Node.js", "MongoDB", "JWT Authentication", "ether.js"]
    },
    {
      "title": "Gemini Clone",
      "description": "A clone of the Gemini exchange platform offering features like buying, selling, and tracking cryptocurrencies. Designed to mimic the core functionality and user interface of the original platform.",
      "link": "url_to_gemini_clone_project",
      "tech_stack": ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Web3.js", "Gemini API"]
    }
  ]
  
  

const Projects = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <section className="py-12 bg-gray-900 text-gray-100 bg-opacity-0 w-full sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl bg-transparent bg-gradient-to-r  from-blue-100 via-white-500 to-gray-600 font-[offside] bg-clip-text text-transparent xl:text-5xl mb-6">Projects</h2>

                </div>
                <div
                    className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-4 sm:grid-cols-2 lg:grid-cols- sm:mt-12 lg:mt-20 sm:text-left">
                    {projects.map((project) => (
                    <div key={project.title} className="relative">
                        <div className="absolute -inset-1">
                            <div
                                className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-blue-800 via-pink-500 to-green-600">
                            </div>
                        </div>
                        <div className="relative overflow-hidden bg-[#4e4d51] gap-8 shadow-md rounded-xl h-full">
                            <div className="p-9">
                                
                                <h3 className=" text-2xl font-bold from-blue-100 shadow-sm font-[offside] sm:mt-10">{project.title}</h3>
                                <h4 className="mt-6 bg-transparent text-clip font-poppins font-light text-xl text-white-600">Tech Stack:- {project.tech_stack.join(",")}</h4>
                                <p className="mt-6 bg-transparent text-clip font-poppins font-light text-xl text-white-600">{project.description}</p>
                                    <Button onClick={handleButtonClick} text="View Project" />
                            </div>
                        </div>
                    </div>
                    )
                    )}
                    
                </div>
            </div>
        </section>
    )
}

export default Projects
