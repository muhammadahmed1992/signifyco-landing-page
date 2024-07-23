import React, { useEffect, useRef, useState } from "react";
import "../app/globals.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import GhamzaLogo from "./GhmzaLogo";
import Image from "next/image";
import { arrowDown } from "public/images/assets";
import ArrowSVG from "./ArrowSVG";

const HeroTest: React.FC = () => {
  const scrollHeroSectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const heroSectionContainerRef = useRef<HTMLDivElement>(null);
  const [startAnimate, setStartAnimate] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.07, 0.098, 0.14], [35,10, 3, 1]);
  const scaleValue = useSpring(scale, { stiffness: 300, damping: 30 });

  const clipPath = useTransform(scrollYProgress, [0, 0.1], ["circle(100%)", "circle(0%)"]);

  //scrollYProgress.onChange(latest => {console.log(latest)});

  const translateX1 = useTransform(scrollYProgress, [0.1, 0.15, 0.25], [9.5, 75, 150]);
  const translateX2 = useTransform(scrollYProgress, [0.1, 0.15, 0.25], [9.5, -75, -150]);
  const translateX3 = useTransform(scrollYProgress, [0.1, 0.15, 0.25], [9.5, 75, 150]);
  const translateX4 = useTransform(scrollYProgress, [0.1, 0.15, 0.25], [9.5, -75, -150]);

  const videoOpacity = useTransform(scrollYProgress, [0.094, 0.096], [1, 0]);
  const circleOpacity = useTransform(scrollYProgress, [0.094, 0.096], [0, 1]);

  const x1 = useSpring(translateX1, { stiffness: 300, damping: 30 });
  const x2 = useSpring(translateX2, { stiffness: 300, damping: 30 });
  const x3 = useSpring(translateX3, { stiffness: 300, damping: 30 });
  const x4 = useSpring(translateX4, { stiffness: 300, damping: 30 });

  useEffect(() => {
    scaleValue.onChange((latest) => {
      if (latest === 1) {
        setStartAnimate(true);
      } else {
        setStartAnimate(false);
      }
      if (latest < 2.5894) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    });

    scrollYProgress.onChange((latest) => {
      // scrollHeroSectionRef?.current?.classList.add("bg-black");
      if (latest >= 0.09) {
        const spans = Array.from(linesRef?.current?.querySelectorAll("span") || []);
        const scrollPercent = Math.min((latest - 0.09) / (0.15 - 0.09), 2);
        let oneOpacityCount = 0;
        spans.forEach((span, index) => {
          let opacity = scrollPercent - (index) * 0.02;
          opacity = Math.max(opacity, 0);
          if (opacity >= 1) {
            oneOpacityCount++;
          }
          span.style.opacity = `${opacity}`;
        });
        if (heroSectionContainerRef?.current?.classList.contains("hide")) {
          heroSectionContainerRef?.current?.classList.remove("hide");
          //heroSectionContainerRef?.current?.classList.add("z-30");
        }
      } else {
        if (!heroSectionContainerRef?.current?.classList.contains("hide")) {
          heroSectionContainerRef?.current?.classList.add("hide");
          //heroSectionContainerRef?.current?.classList.remove("z-30");
        }
        const spans = Array.from(linesRef?.current?.querySelectorAll("span") || []);
        spans.forEach((span) => {
          span.style.opacity = "0";
        });
      }
    });
  }, [scrollYProgress, scaleValue]);

  console.log({ showIcon });

  return (
    <header className="hero-container" ref={scrollHeroSectionRef}>
      <div className="sticky hero">
        <motion.div
          className={`video-container ${showIcon ? "visible" : "visible"} `}
          ref={videoContainerRef}
          style={{
            clipPath: clipPath,
            opacity: videoOpacity
          }}
        >
          <video className="w-[100%] h-[115vh] object-cover" autoPlay muted loop playsInline>
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
          <motion.div style={{ scale }} className="hero-row-parent pt-[30px] lg:pt-[90px]">
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
                <motion.div style={{opacity: circleOpacity}} className={`circle`}></motion.div>
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
          <div className="hero-bottom !w-full mt-3 ">
            <button
              onClick={() => {
                document
                  .getElementById("winkSection")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-[18px] lg:text-[42px] text-white flex flex-col-reverse justify-center lg:flex-row items-center mx-auto lg:mx-0 lg:pl-12  2xl:pl-20 uppercase pt-10 lg:pt-0"
            >
              <div className="hidden lg:block">
                <ArrowSVG direction={"vertical"} width="80px" />
              </div>
              <div className="lg:hidden block mt-3">
                <ArrowSVG direction={"vertical"} width="110px" />
              </div>{" "}
              <p> Scroll</p>
            </button>
            <div>
              <div className=" hidden lg:block">
                <div className="mr-10 ">
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
