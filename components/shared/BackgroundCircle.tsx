import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackGroundcircle({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1,0.2,0.4,0.8,0.2,1.0],
      }}
      transition={{
        duration: 2.5,
      }}
    
    
    className="flex justify-center items-center">

    <div className="absolute   justify-center rounded-full border   border-[#F7AB0A] opacity-20 h-[450px] w-[450px]    animate-pulse "></div>
    </motion.div>
    // <div
    //   
    //   className=" border "
    //   >
    //   </div>
    //  <div className="absolute border  border-[#323232] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
    //   <div className=" rounded-full border   border-[#333333] h-[300px] w-[300px] mt-52 absolute " />
    //   <div className=" rounded-full border   border-[#333333] h-[500px] w-[500px] mt-52 absolute " /> */}
    //   <div className=" rounded-full border   border-[#333333] h-[800px] w-[800px] absolute mt-52  " /> */}
  );
}
