"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const GsapScrollTrigger = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return;
};

export default GsapScrollTrigger;
