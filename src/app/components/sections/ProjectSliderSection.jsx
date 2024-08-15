"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { projects } from "@/app/utils/constants";
import ProjectSliderItem from "../ProjectSliderItem";
import "swiper/css";
import PageTitle from "../PageTitle";
import { Keyboard, Mousewheel, Parallax } from "swiper/modules";
import { useLenis } from "@studio-freight/react-lenis";

const ProjectSliderSection = () => {
  const [swiperMounted, setSwiperMounted] = useState(false);

  const lenis = useLenis();

  if (swiperMounted) {
    lenis.stop();
  }

  return (
    <Swiper
      className="w-full h-[calc(100vh-80px)] bg-zinc-100"
      speed={1000}
      direction="vertical"
      mousewheel={true}
      modules={[Mousewheel, Parallax, Keyboard]}
      parallax={true}
      keyboard={true}
      followFinger={false}
      preventInteractionOnTransition={true}
      edgeSwipeDetection="prevent"
      onInit={(swiper) => {
        for (let i = 0; i < swiper.slides.length; i++) {
          const imgContainer = swiper.slides[i].querySelector(".img-container");

          imgContainer?.setAttribute(
            "data-swiper-parallax",
            0.75 * swiper.height
          );
          imgContainer?.setAttribute("data-swiper-parallax-opacity", 0.5);
        }
        setSwiperMounted(true);
      }}
      onSlideChange={(swiper) => {
        if (swiper.hostEl.getBoundingClientRect().top === 80) {
          lenis.stop();
        } else {
          lenis.start();
        }
      }}
      onSlideChangeTransitionStart={(swiper) => {
        if (swiper.isEnd && swiper.hostEl.getBoundingClientRect().top !== 80) {
          lenis.start();
        } else {
        }
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        if (swiper.isEnd) {
          lenis.start();
        }
      }}
    >
      <SwiperSlide className="w-full h-full">
        <PageTitle title="Our Projects" />
      </SwiperSlide>
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <ProjectSliderItem {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSliderSection;
