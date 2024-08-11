"use client";

import React, { useEffect } from "react";
import "./ProjectSliderSection.css";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

const ProjectSliderSection = () => {
  useEffect(() => {
    gsap.registerPlugin(Observer);

    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      currentIndex = index;
    }

    Observer.create({
      target: ".wrapperdiv",
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div className="wrapperdiv">
      <section className="first sections">
        <div className="outer">
          <div className="inner">
            <div className="bg one">
              <h2 className="section-heading">Scroll down</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="second sections">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="third sections">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">GreenSock</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth sections">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Animation platform</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth sections">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSliderSection;
