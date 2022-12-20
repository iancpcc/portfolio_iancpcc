/* eslint-disable @next/next/no-img-element */

import { Project } from "../models/profile";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <div
      className="relative h-screen text-left flex flex-col 
    md:flex-row max-w-full overflow-y-hidden
    justify-evenly mx-auto items-center z-0
    "
    >
      <h3 className="absolute uppercase top-24 text-gray-500 tracking-[12px] text-2xl">
        Proyectos
      </h3>
      <div className="relative w-full flex items-center overflow-x-scroll overflow-y-hidden  snap-x snap-mandatory   ">
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
          key={i}
            className=" w-screen space-y-5 snap-center flex flex-col p-14 flex-shrink-0 
                md:p-44 justify-center  items-center h-screen
                "
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              className="h-40 w-40  md:h-56 md:w-56 md:rounded-none xl:w-80  "
              src={project.img}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-20 max-w-6xl">
              <h3 className="text-2xl  font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Proyecto {i + 1} of {projects.length} :{" "}
                </span>
                {project.title }
              </h3>
              <p className="text-lg text-center md:text-left">
               {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
