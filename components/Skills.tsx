import { ISkill } from "../models/profile";
import React from "react";
import Skill from "./shared/Skill";
import { motion } from "framer-motion";

type Props = {
  skills: ISkill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative  flex flex-col mx-auto
    md:text-left xl:flex-row xl:px-10 xl:space-y-0
    items-center justify-center text-center 
    max-w-[2000px] min-h-screen 
    "
    >
      <h3 className="absolute uppercase top-24 text-gray-500 tracking-[12px] text-2xl">
        Habilidades
      </h3>
      <div className="grid gap-5 grid-cols-4 md:grid-cols-5">
        {skills.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
