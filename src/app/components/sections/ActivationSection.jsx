import Image from "next/image";
import React from "react";

const ActivationSection = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 px-6 py-10 lg:py-20">
      <div className="flex flex-col items-center justify-center pb-9 gap-6 text-center md:gap-8 lg:gap-10">
        <h3 className="font-bold text-3xl md:text-5xl lg:text-7xl">
          Content Creator Activation
        </h3>
        <p className="font-semibold text-lg md:text-2xl lg:text-3xl lg:w-2/3">
          En collaboration avec des Digital Artists, photographes, vidéastes,
          créateurs de contenus, illustrateurs, VFX Artists et tant d’autres.
          Nous élaborons des&nbsp;
          <span className="font-bold bg-emerald-500 text-zinc-900">
            campagnes de contenus et/ou activations Social Media
          </span>
          &nbsp;adaptées à vos besoins et vos ambitions.
        </p>
      </div>
      <div className="px-0 md:px-[20%] relative py-10">
        <div className="relative aspect-square md:aspect-video">
          <Image
            src="/img/activation/activation1.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
          <div className="absolute top-3/4 md:top-1/2 left-1/2 md:left-0 h-auto w-[35vw] md:w-[15vw] -translate-y-1/2 -translate-x-1/2">
            <div data-scroll data-scroll-speed="0.3">
              <video
                className="object-cover w-full h-full object-center"
                loop
                autoPlay="autoplay"
                muted
              >
                <source src="/img/hero/hero5c2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivationSection;
