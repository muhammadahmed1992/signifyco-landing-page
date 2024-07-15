import React, { useEffect, useRef, useState } from "react";
import "../app/globals.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import GhamzaLogo from "./GhmzaLogo";
import Image from "next/image";
import { arrowDown } from "public/images/assets";

const HeroTest: React.FC = () => {
  const scrollHeroSectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const heroSectionContainerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.1], [20, 1]);
  const scaleValue = useSpring(scale, { stiffness: 100, damping: 20 });

  const clipPath = useTransform(scrollYProgress, [0, 0.1], ["circle(100%)", "circle(0%)"]);

  const translateX1 = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const translateX2 = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const translateX3 = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const translateX4 = useTransform(scrollYProgress, [0, 0.3], [0, -150]);

  const x1 = useSpring(translateX1, { stiffness: 100, damping: 20 });
  const x2 = useSpring(translateX2, { stiffness: 100, damping: 20 });
  const x3 = useSpring(translateX3, { stiffness: 100, damping: 20 });
  const x4 = useSpring(translateX4, { stiffness: 100, damping: 20 });

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      scrollHeroSectionRef?.current?.classList.add("bg-black");

      if (latest >= 0.04955614068083505) {
        if (heroSectionContainerRef?.current?.classList.contains("hide")) {
          heroSectionContainerRef?.current?.classList.remove("hide");
          heroSectionContainerRef?.current?.classList.add("z-30");
        }
        let oneOpacityCount = 0;
        const spans = Array.from(linesRef?.current?.querySelectorAll("span") || []);
        spans.forEach((span, index) => {
          let opacity = latest * 9 - (index - oneOpacityCount) * 0.002;
          opacity = Math.max(opacity, 0);
          if (opacity >= 1) {
            oneOpacityCount++;
          }
          span.style.opacity = opacity.toString();
        });
      } else {
        if (!heroSectionContainerRef?.current?.classList.contains("hide")) {
          heroSectionContainerRef?.current?.classList.add("hide");
          heroSectionContainerRef?.current?.classList.remove("z-30");
        }
      }
    });
  }, [scrollYProgress]);

  return (
    <header className="hero-container" ref={scrollHeroSectionRef}>
      <div className="sticky hero">
        <motion.div
          className="video-container"
          ref={videoContainerRef}
          style={{
            clipPath: clipPath,
          }}
        >
          <video className="w-[100%] h-[100vh] object-cover" autoPlay muted loop playsInline>
            <source src="https://cdn.significo.com/videos/significo-main-hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="centered-div z-10 hide" ref={heroSectionContainerRef}>
          <div className="hero-subtitle">
            <div className="f-24">
              <div className="subtitle-text">
                <div className="subtitle-text-lines" ref={linesRef}>
                  <div>
                    <span className="text-[30px] lg:text-[41px]">L</span>
                    <span className="text-[30px] lg:text-[41px]">e</span>
                    <span className="text-[30px] lg:text-[41px]">t</span>
                    <span className="text-[30px] lg:text-[41px]">'</span>
                    <span className="text-[30px] lg:text-[41px]">s</span>
                    <span className="text-[30px] lg:text-[41px]"> </span>
                    <span className="text-[30px] lg:text-[41px]">t</span>
                    <span className="text-[30px] lg:text-[41px]">a</span>
                    <span className="text-[30px] lg:text-[41px]">l</span>
                    <span className="text-[30px] lg:text-[41px]">k</span>
                    <span className="text-[30px] lg:text-[41px]"> </span>
                    <span className="text-[30px] lg:text-[41px]">a</span>
                    <span className="text-[30px] lg:text-[41px]">b</span>
                    <span className="text-[30px] lg:text-[41px]">o</span>
                    <span className="text-[30px] lg:text-[41px]">u</span>
                    <span className="text-[30px] lg:text-[41px]">t</span>
                    <span className="text-[30px] lg:text-[41px]"> </span>
                    <span className="text-[30px] lg:text-[41px]">y</span>
                    <span className="text-[30px] lg:text-[41px]">o</span>
                    <span className="text-[30px] lg:text-[41px]">u</span>
                    <span className="text-[30px] lg:text-[41px]">r</span>
                  </div>
                  <div>
                    <span className="text-[30px] lg:text-[41px]">N</span>
                    <span className="text-[30px] lg:text-[41px]">e</span>
                    <span className="text-[30px] lg:text-[41px]">x</span>
                    <span className="text-[30px] lg:text-[41px]">t</span>
                    <span className="text-[30px] lg:text-[41px]"> </span>
                    <span className="text-[30px] lg:text-[41px]">b</span>
                    <span className="text-[30px] lg:text-[41px]">i</span>
                    <span className="text-[30px] lg:text-[41px]">g</span>
                    <span className="text-[30px] lg:text-[41px]"> </span>
                    <span className="text-[30px] lg:text-[41px]">i</span>
                    <span className="text-[30px] lg:text-[41px]">d</span>
                    <span className="text-[30px] lg:text-[41px]">e</span>
                    <span className="text-[30px] lg:text-[41px]">a</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div style={{ scale }} className="hero-row-parent pt-[20px] lg:pt-[40px]">
            <div className="hero-rows">
              <motion.div style={{ x: x1 }} className="hero-row">
                <div className="hero-row-text">CRAZY</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">USEFUL</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">INTUTIVE</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">USEFUL</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
              </motion.div>
              <motion.div style={{ x: x2 }} className="hero-row">
                <div className="hero-row-text">LOWKEY</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">AMAZING</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">WINK</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">CREATIVE</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
              </motion.div>
              <motion.div style={{ x: x3 }} className="hero-row">
                <div className="hero-row-text">CRAZY</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">USEFUL</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">INTUTIVE</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">USEFUL</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
              </motion.div>
              <motion.div style={{ x: x4 }} className="hero-row">
                <div className="hero-row-text">LOWKEY</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">AMAZING</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">WINK</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="hero-row-text">CREATIVE</div>
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="hero-bottom !w-full mt-3">
            <div className="text-[35px] lg:text-[48px] text-white flex" style={{ width: "40%" }}>
              <Image height={20} className="bg-white mr-2" src={arrowDown} alt="" /> Scroll
            </div>
            <div>
              <div className="block md:hidden ">
                <GhamzaLogo height="65" width="65" />
              </div>
              <div className=" hidden sm:block">
                <div className="block md:hidden ">
                  <GhamzaLogo height="65" width="65" />
                </div>
                <div className="md:block hidden ">
                  <GhamzaLogo height="120" width="120" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroTest;
