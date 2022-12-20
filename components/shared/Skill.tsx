import { ISkill } from '../../models/profile';
import React from "react";
import { motion } from "framer-motion";

type Props = {
  skill:ISkill,
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft  }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity:0,
          // x: directionLeft ? -100 : 100,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={"/assets/icons/" + skill.technology.toLocaleLowerCase() +".png"}
        className="rounded-full bg-transparent object-cover h-16 w-16 md:w-24 md:h-24  
        filter group-hover:grayscale transition duration-300 ease-in-out
        "
      ></motion.img>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 
        rounded-full z-0
      ">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl text-black font-bold opacity-100">{skill.level+"%"}</p>
        </div>
      </div>
    </div>
  );
}
