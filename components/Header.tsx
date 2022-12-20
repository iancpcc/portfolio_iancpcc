import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Header() {
  const optsMenu = [
    { title: "Inicio", route: "profile", isActive: false },
    { title: "Acerca de mi", route: "about", isActive: false },
    { title: "Experiencia", route: "experience", isActive: false },
    { title: "Habilidades", route: "skills", isActive: false },
    { title: "Proyectos", route: "projects", isActive: false },
    { title: "Contacto", route: "contact", isActive: false },
  ];


  const [isActiveMenu, setStateMenu] = useState(false);
  let [options, setStateOption] = useState(optsMenu);

  return (
    <header className=" sticky top-0 items-start p-5 max-w-7xl mx-auto  z-20 xl:items-center">
      <nav className=" flex border-b-2 border-blue-600 flex-wrap  items-center  justify-between md:space-y-0 md:justify-between md:flex-nowrap">
        {/* Logo */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0.5,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          id="Logo"
          className="cursor-pointer  "
        >
          <h1>
            <a href="#profile"><span className="tracking-[5px] opacity-80 text-2xl font-semibold leading-normal md:inline-flex">
              {"<Chris/>"}
            </span></a> 
          </h1>
        </motion.div>
        {/* Menu */}
        <motion.svg
          initial={{
            x: 500,
            opacity: 0.5,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:invisible cursor-pointer  "
          onClick={() => {
            setStateMenu(!isActiveMenu);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </motion.svg>

        <ul
          className={`${
            !isActiveMenu ? "hidden " : "visible"
          } md:visible flex md:inline-flex  mt-5 flex-col w-full gap-3 rounded py-2 md:w-auto md:mt-0 bg-gray-700 md:flex-row md:bg-transparent `}
        >
          {options.map((option, i) => {
            return (
              <li key={i} className="px-1">
                <a
                  className={` ${
                    option.isActive ? "active" : ""
                  } hover:text-[#ffff] hover:bg-[#d1a82e] md:hover:bg-transparent md:hover:text-[#d1a82e]  rounded block  p-2 px-3  md:py-0 `}
                  onClick={() => {
                    setStateMenu(!isActiveMenu);
                    options = [...options].map((opt, index) => {
                      return {
                        title: opt.title,
                        route: opt.route,
                        isActive: index == i,
                      };
                    });
                    setStateOption(options);
                  }}
                  href={"#" + option.route}
                >
                  {option.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
