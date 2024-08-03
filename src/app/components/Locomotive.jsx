"use client";

import React, { useEffect } from "react";

export default function Locomotive() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: document.querySelector("[data-scroll-container]"),
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
        },
      });
    })();
  }, []);

  return;
}
