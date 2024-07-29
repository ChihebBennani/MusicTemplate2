import Image from "next/image";
import React from "react";

export const ImageReveal = ({ path, imageClassName, alt }) => {
  return (
    <div
      id="nav-image"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      className="relative w-full h-full"
    >
      <Image
        src={path}
        fill
        className={imageClassName}
        alt={alt}
        priority={true}
      />
    </div>
  );
};
