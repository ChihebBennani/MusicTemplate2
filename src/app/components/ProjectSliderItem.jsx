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
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <h2>{title}</h2>
        <h3>{owner}</h3>
        <h4>{description}</h4>
        <button>{buttonTitle}</button>
      </div>
    </section>
  );
};

export default ProjectSliderItem;
