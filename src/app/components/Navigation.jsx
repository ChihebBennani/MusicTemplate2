"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import "./NavigationStyles.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavLink } from "./NavLink";
import { ImageReveal } from "./ImageReveal";
import { menuLinks, socialLinks } from "../utils/constants";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navContainer = useRef();
  const tl = useRef();
  const overlay = useRef();

  useGSAP(() => {
    gsap.set("#nav-link", { yPercent: 100 });
    tl.current = gsap
      .timeline({
        paused: true,
      })
      .to(overlay.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power4.inOut",
      })
      .to("#nav-link", {
        yPercent: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -1.1,
      })
      .to(
        "#nav-image",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          duration: 1.2,
          ease: "power4.inOut",
        },
        ">-1.1"
      );
  });

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    if (!show) {
      gsap.to(navContainer.current, {
        yPercent: -110,
        duration: 0.4,
      });
    } else {
      gsap.to(navContainer.current, {
        yPercent: 0,
        duration: 0.4,
      });
    }

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, controlNavbar, show]);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const toggleMenuOpen = () => {
    const menuBtn = document.querySelectorAll(".bergur");
    if (isMenuOpen) {
      [...menuBtn].forEach((el) => {
        el.classList.remove("active");
      });
    } else {
      [...menuBtn].forEach((el) => {
        el.classList.add("active");
      });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div ref={navContainer} className="fixed w-full h-20 z-10 bg-zinc-100">
        <div className="h-full flex items-center max-w-7xl mx-auto  px-6 justify-between">
          <p className="font-bold text-2xl z-50">Music App</p>
          <div className="bergur" onClick={toggleMenuOpen}></div>
        </div>
      </div>
      <div
        ref={overlay}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        className="fixed top-0 w-full h-full bg-emerald-400 z-40"
      >
        <div className="fixed w-full h-20 z-50">
          <div className="h-full flex items-center max-w-7xl mx-auto px-6 justify-between">
            <p className="font-bold text-2xl z-50">Music App</p>
            <div className="bergur" onClick={toggleMenuOpen}></div>
          </div>
        </div>
        <div className="w-full h-full flex">
          <div
            className="flex-[2]  lg:flex items-end justify-center hidden cursor-pointer"
            onClick={toggleMenuOpen}
          >
            <p
              style={{
                WebkitTextStroke: "10px rgb(52 211 153)",
                lineHeight: "80%",
              }}
              className="md:text-[200px] lg:text-[300px]"
            >
              &#x2715;
            </p>
          </div>
          <nav className="flex-[4]  flex flex-col pt-40 pb-5 md:pb-9 justify-between">
            <ul className="w-max flex flex-col px-6">
              {menuLinks.map((link, index) => (
                <li key={index} onClick={toggleMenuOpen}>
                  <NavLink
                    id="nav-link"
                    className="text-[45px] md:text-[80px] tracking-tighter px-[1.5px] "
                    path={link.path}
                  >
                    {link.lable}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-1.5 px-6">
              {socialLinks.map((link, index) => (
                <NavLink
                  key={index}
                  className="text-base md:text-lg font-semibold"
                  path={link.path}
                >
                  {link.lable}&nbsp;&nbsp;&nbsp;&nbsp;&#8599;
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="flex-[2] md:flex-[3] hidden md:block">
            <ImageReveal
              path="/img/navImage.jpg"
              alt="Music App"
              imageClassName="object-cover object-center right-0 hue-rotate-90"
            />
          </div>
        </div>
      </div>
    </>
  );
};
