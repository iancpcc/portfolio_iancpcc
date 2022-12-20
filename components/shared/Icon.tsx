import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';

export default function Icon({ url }: any) {
  return (
  <div className="rounded-full mx-1 flex justify-center  items-center border-2 overflow-hidden">
  <SocialIcon className="m-1" 
  url= {url}
  bgColor="#242424" 
  fgColor="#ecf0f1" 
  
  style={{ height: 20, width: 20  }}
  />
  </div>
  )
}
