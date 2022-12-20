import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

import React from "react";

type FormData = {
  name:string,
  email:string,
  subject:string,
  message:string,

};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({});
  const onSubmit:SubmitHandler <FormData> = data => {
    window.location.href = `mailto:ian.chasi1996@gmail.com?subject= ${data.subject}&body=Hola, ${data.message}`
  };
  return (
    <div
      className="h-screen relative flex flex-col justify-evenly text-center md:text-left md:flex-row
    max-w-7xl px-10 mx-auto pb-5 items-center
    "
    >
      <h3 className=" uppercase  md:absolute md:top-24   text-gray-500 tracking-[12px] text-2xl ">
        Contáctame
      </h3>
      <div className="   flex flex-col space-y-5">
        <h4 className="text-2xl font-semibold text-center">
          Me complacerá ayudarte.{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            Contáctame
          </span>
        </h4>
        <div className="  flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl ">+593 983083104</p>
          </div>
          <div className="  flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7  animate-bounce" />
            <div className="text-center">
              <p className="text-xl  ">chrischasi@incaflowers.com</p>
              <p className="text-xl  ">ian.chasi1996@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-h-7 animate-pulse" />
            <p className="text-xl ">Ambato - Ecuador</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col   space-y-2 ">
          <div className="flex space-x-2 "> 
            <input  {...register("name")}  type="text" placeholder="Nombre" className="contactInput " />
            <input  {...register("email")} type="text" placeholder="Email" className="contactInput "  />
          </div>
          <input   {...register("subject")} placeholder="Asunto" className="contactInput" type="text" />
          <textarea  {...register("message")} placeholder="Mensaje" className="contactInput"></textarea>
          <button
            className="bg-[#F7AB0A] py-2 rounded-md 
                            font-semibold text-black text-md"
          > 
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
