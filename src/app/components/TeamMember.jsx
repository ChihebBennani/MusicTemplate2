import Image from "next/image";
import React from "react";

const TeamMember = ({ firstName, lastName, description, imageUrl }) => {
  return (
    <div className="relative aspect-[9/16] w-full h-full cursor-pointer">
      <Image src={imageUrl} fill className="object-cover" alt={firstName} />
      <div className="group absolute flex flex-col gap-2 md:gap-4 lg:gap-5 bottom-0 left-1/2 -translate-x-1/2 text-zinc-100 bg-transparent hover:bg-zinc-800/40 w-full h-full justify-end items-center pb-6 transition duration-500">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
          {firstName + " " + lastName}
        </p>
        <p className="text-xl opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
