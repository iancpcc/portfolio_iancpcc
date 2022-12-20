import { DataProfile } from "../models/profile";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  profile: DataProfile;
};

export default function About({ profile }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative  flex flex-col  items-center 
    justify-evenly h-screen text-center px-10
    max-w-7xl mx-auto md:flex-row"
    >
      <h3 className="absolute uppercase top-24 text-gray-500 tracking-[12px] text-2xl">
        Acerca de mi
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" mt-20 -mb-20 md:mb-0 flex-shrink-0 w-44 h-44  
        rounded-full object-cover md:h-64 md:w-95 md:rounded-xl 
        xl:w-[350px] xl:h-[250px] "
        src="assets/img/picture.jpg"
        alt=""
      />
      <div className="space-y-4 mx-5">
        <h1 className="text-3xl  my-5 font-semibold">
          Mi repositorio{" "}
          <span className="underline cursor-pointer">
            {" "}
            <a
              target="blank"
              href="https://github.com/iancpcc?tab=repositories"
            >
              {" "}
              aquí
            </a>
          </span>
        </h1>
        <div className="text-sm text-justify">{profile.about}</div>
      </div>
    </motion.div>
  );
}
