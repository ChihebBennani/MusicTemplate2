import Image from "next/image";
import React from "react";

const CertificationsSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pb-9 gap-6 text-center md:gap-8 lg:gap-10">
        <h3 className="font-bold text-3xl md:text-5xl lg:text-7xl">
          Certifications
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-20 px-20 py-20 lg:flex-row">
        <div className="relative aspect-[641/147] w-full h-full">
          <Image
            src="/img/certs/cert1.png"
            className="object-contain"
            fill
            alt="hero1"
          />
        </div>
        <div className="relative aspect-[500/293] w-full h-full">
          <Image
            src="/img/certs/cert2.png"
            className="object-contain"
            fill
            alt="hero2"
          />
        </div>
        <div className="relative aspect-[800/147] w-full h-full">
          <Image
            src="/img/certs/cert3.png"
            className="object-contain"
            fill
            alt="hero3"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 gap-6 px-6">
        <div className="aspect-square relative h-[25vh]">
          <Image src="/img/quotes/quote2.svg" fill alt="coffe" className="" />
        </div>
        <h6 className="text-lg font-semibold">Vous avez un projet ?</h6>
        <h5 className="text-2xl md:text-3xl font-bold">
          On en parle autour d&apos;un café ?
        </h5>
        <button className="bg-zinc-900 text-zinc-100 py-3 px-10 text-xl font-bold">
          RENCONTRONS-NOUS
        </button>
      </div>
    </div>
  );
};

export default CertificationsSection;
