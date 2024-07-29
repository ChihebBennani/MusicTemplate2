"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
  const container = useRef();
  const colum1 = useRef();
  const colum2 = useRef();
  const colum3 = useRef();
  const colum4 = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(colum1.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
      },
      yPercent: -75,
    });
    gsap.to(colum2.current, {
      scrollTrigger: {
        trigger: container.current,
        end: "150% 50%",
        scrub: true,
      },
      yPercent: -75,
    });
    gsap.to(colum3.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
      },
      yPercent: -45,
    });
    gsap.to(colum4.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
      },
      yPercent: -10,
    });
  });

  return (
    <section
      ref={container}
      className="w-full bg-zinc-900 flex h-[240vh] md:h-[250vh] overflow-hidden"
    >
      <div
        ref={colum1}
        className="h-full w-full flex-1 bg-inherit items-center translate-y-[25%] space-y-8 md:space-y-0 px-6 md:px-0"
      >
        <div className="relative aspect-square hidden md:block">
          <Image
            src="/img/hero/hero1c1.png"
            className="mix-blend-screen object-cover"
            fill
            alt="hero1"
          />
        </div>
        <div className="relative aspect-[7/9]">
          <Image
            src="/img/hero/hero2c1.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
        <div className="relative aspect-square">
          <video className="object-cover" autoPlay="autoplay" muted>
            <source src="/img/hero/hero3c1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-8">
          <p className="text-zinc-100 text-3xl md:text-5xl font-semibold">
            Nous créons des contenus à forte personnalité pour vous permettre
            d’exprimer la votre.
          </p>
        </div>
        <div className="relative aspect-square">
          <video className="object-cover" loop autoPlay="autoplay" muted>
            <source src="/img/hero/hero4c1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/img/hero/hero5c1.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
        <div className="relative aspect-square">
          <video className="object-cover" loop autoPlay="autoplay" muted>
            <source src="/img/hero/hero6c1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        ref={colum2}
        className="h-full w-full flex-1 bg-inherit flex-col items-center hidden md:block translate-y-[25%]"
      >
        <div className="relative aspect-square ">
          <Image
            src="/img/hero/hero1c2.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
        <div className="py-12 font-bold text-2xl md:text-4xl lg:text-6xl space-y-1.5 text-zinc-100 flex flex-col items-start px-5 justify-center w-full">
          <p>CREATIVE</p>
          <p>CONTENT</p>
          <p>PRODUCERS</p>
        </div>
        <div className="relative aspect-square">
          <video className="object-cover" loop autoPlay="autoplay" muted>
            <source src="/img/hero/hero2c2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/img/hero/hero3c2.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
        <div className="relative aspect-square">
          <video className="object-cover" loop autoPlay="autoplay" muted>
            <source src="/img/hero/hero4c2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative aspect-square">
          <video className="object-cover" loop autoPlay="autoplay" muted>
            <source src="/img/hero/hero5c2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        ref={colum3}
        className="h-full w-full flex-1 bg-inherit flex-col items-center  hidden lg:block translate-y-[10%]"
      >
        <div className="relative aspect-[9/16]">
          <video
            className="object-cover w-full h-full object-center"
            loop
            autoPlay="autoplay"
            muted
          >
            <source src="/img/hero/hero1c3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/img/hero/hero2c3.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
        <div className="py-12 font-bold text-4xl md:text-5xl lg:text-7xl space-y-1.5 text-zinc-100 flex flex-col items-start px-5 justify-center w-full">
          <p>On en parle autour d'un café ?</p>
        </div>
        <div className="relative aspect-[9/16] overflow-hidden">
          <Image
            src="/img/hero/hero3c3.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
        <div className="relative aspect-[9/16] overflow-hidden">
          <Image
            src="/img/hero/hero4c3.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
      </div>
      <div
        ref={colum4}
        className="h-full w-full flex-1 bg-inherit flex-col items-center  hidden 2xl:block"
      >
        <div className="relative aspect-[9/14] ">
          <video
            className="object-cover  object-center"
            loop
            autoPlay="autoplay"
            muted
          >
            <source src="/img/hero/hero1c4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative aspect-[9/16] overflow-hidden">
          <Image
            src="/img/hero/hero2c4.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
        <div className="relative aspect-[9/10]">
          <video
            className="object-cover w-full h-full object-center"
            loop
            autoPlay="autoplay"
            muted
          >
            <source src="/img/hero/hero3c4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/img/hero/hero4c4.jpg"
            className="object-cover"
            fill
            alt="hero2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
