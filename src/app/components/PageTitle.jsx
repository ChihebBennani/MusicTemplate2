"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const PageTitle = ({ title }) => {
  const heroText = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top",
          end: "+=500px",
          scrub: true,
        },
      })
      .to(heroText.current, {
        alpha: 0,
      });
  });

  return (
    <section className="flex items-center justify-center w-full h-[calc(100dvh-80px)]">
      <div ref={heroText} className="flex flex-col items-center px-10 gap-10">
        <h1 className="text-wrap text-5xl md:text-7xl lg:text-9xl text-center font-bold leading-snug w-full">
          {title}
        </h1>
        <p className="text-9xl">&#8964;</p>
      </div>
    </section>
  );
};

export default PageTitle;
