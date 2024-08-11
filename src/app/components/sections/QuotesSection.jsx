"use client";

import React from "react";
import "./QuotesSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { quotes } from "@/app/utils/constants";
import QuoteCard from "../QuoteCard";
import "swiper/css";
import Image from "next/image";

const QuotesSection = () => {
  return (
    <section className="bg-zinc-900 text-zinc-100 py-10 lg:py-20">
      <div className="flex flex-col items-center justify-center pb-9 gap-6 text-center md:gap-8 lg:gap-10">
        <h3 className="font-bold text-3xl md:text-5xl lg:text-7xl">
          Ils nous font confiance
        </h3>
      </div>
      <div className="logos my-10">
        <ul className="logos-slide">
          <li>
            <img src="/img/quotes/slider1.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider2.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider3.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider4.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider5.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider6.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider7.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider8.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider9.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider10.svg" alt="company" />
          </li>
        </ul>
        <ul className="logos-slide">
          <li>
            <img src="/img/quotes/slider1.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider2.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider3.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider4.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider5.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider6.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider7.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider8.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider9.svg" alt="company" />
          </li>
          <li>
            <img src="/img/quotes/slider10.svg" alt="company" />
          </li>
        </ul>
      </div>
      <div>
        <Swiper
          loop
          speed={1200}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
          }}
          grabCursor
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 35,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1023: {
              slidesPerView: 2.3,
              spaceBetween: 75,
            },
            1269: {
              slidesPerView: 3.2,
              spaceBetween: 100,
            },
            1439: {
              slidesPerView: 3.5,
              spaceBetween: 120,
            },
          }}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={index}>
              <QuoteCard {...quote} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col items-center justify-center py-10 gap-6 px-6">
        <div className="aspect-square relative h-[25vh]">
          <Image src="/img/quotes/quote1.svg" fill alt="coffe" className="" />
        </div>
        <h6 className="text-lg font-semibold">Vous avez un projet ?</h6>
        <h5 className="text-2xl md:text-3xl font-bold">
          On en parle autour d&apos;un café ?
        </h5>
        <button className="bg-zinc-100 text-zinc-900 py-3 px-10 text-xl font-bold">
          RENCONTRONS-NOUS
        </button>
      </div>
    </section>
  );
};

export default QuotesSection;
