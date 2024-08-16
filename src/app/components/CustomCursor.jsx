"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";
import gsap from "gsap";
import useDimensions from "../hooks/useDimensions";

const CustomCursor = ({ hovered }) => {
  const cursorRef = useRef();
  const textRef = useRef();

  // const { x, y } = useMousePosition();
  const { width } = useDimensions();

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     defaults: {
  //       yPercent: -50,
  //       xPercent: -50,
  //     },
  //   });

  //   tl.to(cursorRef.current, {
  //     x,
  //     y,
  //   });
  // }, [x, y, cursorRef]);

  // useGSAP(() => {
  //   const tl = gsap
  //     .timeline({ defaults: { paused: true } })
  //     .set(cursorRef.current, {
  //       autoAlpha: 0,
  //     });

  //   if (width >= 1024) {
  //     tl.to(cursorRef.current, {
  //       autoAlpha: 1,
  //       width: "80px",
  //       height: "80px",
  //       duration: 0.7,
  //       delay: 0.1,
  //     });
  //   }

  //   if (width >= 1024 && hovered) {
  //     console.log(hovered);
  //     tl.play();
  //   } else {
  //     console.log(hovered);
  //     tl.reverse();
  //   }
  // }, [width, hovered, cursorRef]);

  return (
    <>
      {width >= 1024 && (
        <div
          ref={cursorRef}
          className="fixed z-50 bg-zinc-100 text-zinc-900 grid place-items-center h-0 w-0 rounded-full top-0 left-0 overflow-hidden pointer-events-none cursor-default"
        >
          <p ref={textRef} className="font-bold text-xl">
            Lire
          </p>
        </div>
      )}
    </>
  );
};

export default CustomCursor;
