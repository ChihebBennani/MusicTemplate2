"use client";

import { IconHandFinger } from "@tabler/icons-react";
import Image from "next/image";

const SocialMediaSection = () => {
  return (
    <div className="px-6 py-10 flex flex-col items-center justify-center gap-6 text-center md:gap-8 lg:gap-10 lg:py-20">
      <div>
        <h3 className="font-bold text-3xl md:text-5xl lg:text-7xl">
          Social media management
        </h3>
      </div>
      <div className="social-description w-full flex items-center justify-center">
        <p className="font-semibold text-zinc-800 text-lg md:text-2xl lg:text-3xl lg:w-2/3">
          Nos experts vous accompagnent dans la définition de votre stratégie
          Social Media, la création de contenu, l’analyse de vos performances et
          le pilotage de vos plateformes Social Media :
        </p>
      </div>
      <div className="social-footer flex items-center justify-center">
        <span className="w-fit">
          <em className="bg-emerald-500 text-zinc-900 font-bold text-2xl md:text-3xl lg:text-4xl">
            Meta, TikTok, Youtube, Twitter et Twitch.
          </em>
        </span>
      </div>

      <div className="w-full flex items-center justify-around gap-8 flex-col md:flex-row px-2 xl:px-10 my-10">
        <div className="relative w-full h-full aspect-[9/12]">
          <Image
            src="/img/social/Social1.jpg"
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
        <div className="relative w-full h-full aspect-[9/12]">
          <Image
            src="/img/social/Social2.jpg"
            fill
            className="object-cover"
            alt="social"
          />
          <div className="w-full h-full bg-zinc-900/30 absolute grid place-items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <IconHandFinger stroke={1} className="text-zinc-100 w-14 h-1/4" />
              <p className="text-zinc-100 font-bold text-3xl">AIWAYS</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full aspect-[9/12]">
          <Image
            src="/img/social/Social3.jpg"
            fill
            className="object-cover"
            alt="social"
          />
          <div className="w-full h-full bg-zinc-900/30 absolute grid place-items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <IconHandFinger stroke={1} className="text-zinc-100 w-14 h-1/4" />
              <p className="text-zinc-100 font-bold text-3xl">ROGERVOICE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
