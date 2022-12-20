import { Experience } from "../models/profile";
import React from "react";
import WorkExperienceCard from "./shared/WorkExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperiencie({experiences}:Props) {
  return (
    <div
      className="h-screen relative max-w-full 
    mx-auto  overflow-hidden flex items-center 
    justify-evenly text-lft flex-col 
    "
    >
      <h3 className="absolute top-24 uppercase   text-gray-500 tracking-[12px] text-2xl">
        Experiencia
      </h3>
      <div className=" w-full mt-16 md:mt-36  flex p-10  overflow-x-auto space-x-5   snap-x snap-mandatory ">
        { experiences.map((work,i)=> { return <  WorkExperienceCard key={i} experience={work} />})} 
         
      </div>
    </div>
  );
}
