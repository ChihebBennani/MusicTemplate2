"use client";

import Image from "next/image";

const NewsSectionItem = ({
  title,
  imageUrl,
  description,
  brand,
  containerClasses,
  setHovered,
}) => {
  return (
    <article
      className={`w-full h-full flex flex-col gap-6 border-b border-zinc-100 py-2 group transition ${containerClasses}`}
      onMouseEnter={() => {
        setHovered(true);
        console.log("enter");
      }}
      onMouseLeave={() => {
        setHovered(false);
        console.log("leave");
      }}
    >
      <div className="relative w-full min-h-96 md:min-h-[500px] overflow-hidden">
        <Image
          src={imageUrl}
          fill
          priority
          alt={title}
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="flex flex-col justify-between min-h-32 h-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold lg:text-4xl">{title}</h2>
          <h3 className="text-lg md:text-xl text-zinc-200">{description}</h3>
        </div>
        <p className="font-bold text-3xl p-1 mt-10">{brand}</p>
      </div>
    </article>
  );
};

export default NewsSectionItem;
