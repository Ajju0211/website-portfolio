import React from 'react';
import { github, project, email, image } from '../../assets/index.js';
import { Link } from 'react-router-dom';

const icons = [
  { name: "Project", icon: project, route: "/projects" }, 
  { name: "Email", icon: email, route: "/contact" },
  { name: "Github", icon: github, route: "/github" },
  { name: "About", icon: image, route: "/about" } 
];

const Footer = () => {
  return (
    <div className="fixed bottom-7  left-1/2 transform -translate-x-1/2 bg-[#272626] flex bg-opacity-85 2xl:h-[95px] 2xl:w-[350px] items-center justify-center text-white p-4 border-[1px] border-[#777474] rounded-[16px] h-[9%] hover:scale-105 transition-transform duration-200 z-50">
      <div className="flex gap-7 items-center justify-normal">
        {icons.map((icon, index) => (
          <div key={index}>
              <Link to={icon.route} className='flex flex-col items-center justify-center'> 
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="2xl:h-12 2xl:w-12 h-8 w-8"
                />
                <p className="xl:text-sm text-[10px] text-white ">{icon.name}</p>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
