/* eslint-disable @next/next/no-img-element */

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { DataProfile } from '../models/profile';
import Icon from "./shared/Icon";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  profile:DataProfile
};

export default function Profile({profile}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hola, mi  nombre es Christian",
      "y me dedico al mundo de la programación",
      "<Bienvenido />",
    ],
    loop: true,
    delaySpeed: 1000,
  
  });

  return (
    <div
      className=" h-screen space-y-5 flex flex-col text-center items-center 
      justify-center overflow-hidden "
    >
      {/* <BackGroundcircle /> */}
        {/* Image */}

        <img
          className=" rounded-full h-52 w-52 object-cover -rotate-270  mx-auto"
          src="assets/img/picture2.jpg"
          alt=""
          />
          
        {/* Letras */}
      <div className=" ">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">INGENIERO EN SISTEMAS</h2>
        <h1>
          <span className="cursor text-3xl lg:6xl font-semibold px-10">{text}
          <Cursor cursorColor="#F7AB0A" />
          </span>
        </h1>
      </div>
      {/* Icons */}
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
      className="flex flex-row">
         
      <Icon url="https://www.facebook.com/christian.chasi.75"  ></Icon>
      <Icon url="https://twitter.com/ChasiChris"  ></Icon>
      <Icon url="https://www.linkedin.com/in/chris-chasi/"  ></Icon>
      <Icon url="https://github.com/iancpcc"  ></Icon>
      </motion.div>
      <div className="font-bold ">
        Mi Hoja de vida  👉 <span className="underline cursor-pointer "><a href='assets/files/ChristianChasi-CV.pdf' download>CV.pdf</a></span> 
      </div>
      </div>
  );
}
