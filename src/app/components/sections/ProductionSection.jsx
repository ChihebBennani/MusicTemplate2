import { IconHandFinger } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const ProductionSection = () => {
  return (
    <div className="bg-zinc-100 px-6 py-10 lg:py-20">
      <div className="flex flex-col items-center justify-center pb-9 gap-6 text-center md:gap-8 lg:gap-10">
        <h3 className="font-bold text-3xl md:text-5xl lg:text-7xl">
          Production
        </h3>
        <p className="font-semibold text-lg md:text-2xl lg:text-3xl lg:w-2/3 text-zinc-800">
          Grâce à une équipe qui allie content producer et creative strategist,
          nous vous délivrons&nbsp;
          <span className="font-bold bg-emerald-500">
            des productions clé en main ou sur-mesure
          </span>
          &nbsp;pour conceptualiser un message fort à diffuser.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full lg:w-3/4 items-center justify-center mx-auto py-10">
        <div className="relative w-full h-full aspect-[9/10]">
          <Image
            src="/img/production/production1.jpg"
            fill
            className="object-cover"
            alt="production"
          />
          <div className="w-full h-full bg-zinc-900/30 absolute grid place-items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <IconHandFinger stroke={1} className="text-zinc-100 w-14 h-1/4" />
              <p className="text-zinc-100 font-bold text-3xl">D-LINK</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full aspect-[9/10]">
          <Image
            src="/img/production/production2.jpg"
            fill
            className="object-cover"
            alt="social"
          />
          <div className="w-full h-full bg-zinc-900/30 absolute grid place-items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <IconHandFinger stroke={1} className="text-zinc-100 w-14 h-1/4" />
              <p className="text-zinc-100 font-bold text-3xl">D-LINK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionSection;
