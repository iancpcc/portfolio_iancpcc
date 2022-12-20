/* eslint-disable @next/next/no-img-element */

import { Experience } from "../../models/profile";
import React from "react";

type Props = {
  experience: Experience;
};

export default function WorkExperienceCard({ experience }: Props) {
  return (
    <article
      className=" flex flex-col  rounded-lg 
    items-center space-y-3 shrink-0   w-[350px] md:w-[600px] xl:w-[600px]
    snap-center bg-[#404040] p-5 hover:opacity-100 opacity-50
    cursor-pointer transition-opacity duration-200 
    "
    >
      {/* image */}
      <img
        className="rounded-full w-20 h-20 "
        src={experience.img_url}
        alt=""
      />
      {/* title */}
      <div className="px-1  space-y-4 ">
        <h4 className="text-2xl md:text-3xl font-light text-center capitalize ">
          {experience.occupation}
        </h4>
        {/* subtitle */}
        <p className="font-bold text-xl mt-1 text-center uppercase">
          {experience.bussiness}
        </p>
        {/* Tech  */}
        <div className="flex space-x-2 my-1 justify-center">
          {experience.technologies.map((tech, i) => {
            return (
              <img
                className="rounded-full w-10 h-10  object-cover"
                src={"assets/icons/" + tech.concat(".png")}
                alt=""
                key={i}
              />
            );
          })}
        </div>
        {/* Description */}
        <p className=" capitalize my-2 text-gray-400">
          {"Desde: " + experience.work_from + " Hasta: " + experience.work_to}
        </p>
        {/* Summary */}
        <ul className="list-disc space-y-4 ml-5 text-xs md:text-base">
          {experience.activities.map((activity, i) => (
            <li key={i}>{activity}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
