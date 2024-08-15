import Image from "next/image";
import React from "react";

const ProjectSliderItem = ({
  title,
  imageUrl,
  owner,
  description,
  buttonTitle,
}) => {
  return (
    <section className="relative overflow-hidden bg-zinc-900 w-full h-full">
      <Image
        src={imageUrl}
        fill
        alt={owner}
        className="img-container object-cover object-center"
      />
      <div className="w-full h-full bg-zinc-950/40 absolute">
        <div className="absolute bottom-32 left-0 text-zinc-100 px-6 flex flex-col md:px-20">
          <h2 className="text-5xl font-bold lg:text-8xl pb-2">{title}</h2>
          <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl pb-1">
            {owner}
          </h3>
          <h4 className="text-lg lg:text-xl text-zinc-200">{description}</h4>
          <button className="bg-zinc-100 text-zinc-900 w-full py-1 text-lg mt-3 font-semibold lg:text-xl">
            {buttonTitle}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSliderItem;
