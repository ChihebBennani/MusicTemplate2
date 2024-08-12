"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "@/app/utils/constants";
import ProjectSliderItem from "../ProjectSliderItem";
import "swiper/css";
import PageTitle from "../PageTitle";
import { Mousewheel, Parallax } from "swiper/modules";
import { useLenis } from "lenis/react";
import Footer from "../Footer";

const ProjectSliderSection = () => {
  const lenis = useLenis();

  return (
    <Swiper
      className="w-full h-[calc(100vh-80px)] bg-zinc-100"
      speed={1000}
      direction="vertical"
      mousewheel={true}
      modules={[Mousewheel, Parallax]}
      parallax={true}
      followFinger={false}
      preventInteractionOnTransition={true}
      edgeSwipeDetection="prevent"
      onInit={(swiper) => {
        for (let i = 0; i < swiper.slides.length; i++) {
          const imgContainer = swiper.slides[i].querySelector(".img-container");

          imgContainer?.setAttribute(
            "data-swiper-parallax",
            0.5 * swiper.height
          );
          imgContainer?.setAttribute("data-swiper-parallax-opacity", 0.5);
        }
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
