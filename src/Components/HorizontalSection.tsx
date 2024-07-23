import React, { useEffect, useRef, useState } from "react";
import "../app/globals.css";
import {
  Miami,
  SVG,
  dog,
  image1,
  image2,
  image3,
  image4,
  manMountain,
  peoples,
  SVGWHITE,
} from "../../public/images/assets/index";
import Image from "next/image";
import { motion, useTransform, useScroll, transform, useSpring } from "framer-motion";
import ArrowSVG from "./ArrowSVG";

const HorizontalSection = () => {
  return (
    <div>
      <HorizontalScrollCarousel /> 
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
    const { top, bottom } = el.getBoundingClientRect();
    const { innerHeight } = window;

    return top < innerHeight - top && bottom > 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const isHorizontalVisible = elementIsVisibleInViewport(targetRef.current);

        // if (isHorizontalVisible) {
        //   document.body.classList.add("theme-pink");
        // } else {
        //   document.body.classList.remove("theme-pink");
        // }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let hasRun1 = false;
    let hasRun2 = false;

    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun1) {
            hasRun1 = true;
            let start = 0;
            const end = 203;
            const duration = 2000; // 2 seconds
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = () => {
              start += 1;
              setCount1(start);
              if (start < end) {
                setTimeout(timer, stepTime);
              }
            };

            timer();
          }
        });
      },
      { threshold: 0.1 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun2) {
            hasRun2 = true;
            let start = 5000;
            const end = 10000;
            const duration = 2000; // 2 seconds
            const stepTime = Math.abs(Math.floor(duration / ((end - start) / 1000)));

            const timer = () => {
              start += 1000;
              setCount2(start);
              if (start < end) {
                setTimeout(timer, stepTime);
              }
            };

            timer();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section1 = document.querySelector(".count-section-1");
    const section2 = document.querySelector(".count-section-2");

    if (section1) {
      observer1.observe(section1);
    }

    if (section2) {
      observer2.observe(section2);
    }

    return () => {
      if (section1) {
        observer1.unobserve(section1);
      }
      if (section2) {
        observer2.unobserve(section2);
      }
    };
  }, [targetRef]);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
  const img1X = useTransform(scrollYProgress, [0.2, 1], ["0%", "50%"]);
  const img2X = useTransform(scrollYProgress, [0.2, 1], ["-75%", "-50%"]);
  const img3X = useTransform(scrollYProgress, [0.2, 1], ["25%", "-25%"]);
  const img4X = useTransform(scrollYProgress, [0.2, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="horizontal-item !w-[100vw] !h-screen relative">
            <div className="horizontal-item-text">
              <div className="hori-f3 !text-[42.26px] xl:!text-[158px] !leading-[42.26px] lg:!leading-[130px]">
                REAL IMPACT,
              </div>
              <div className="hori-f3 !text-[42.26px] xl:!text-[158px] !leading-[42.26px] lg:!leading-[130px]">
                REAL REACH
              </div>
            </div>
            <div className="horizontal-btn">
              <div className="button rounded-md">
                <div className="button-text">Contact</div>
                <Image className="button-arrow" src={SVGWHITE} alt="" />
              </div>
            </div>
            <div className="absolute bottom-[20px] right-[120px]">
              <ArrowSVG />
            </div>
          </div>
          <div className="horizontal-item count-section-1 !w-[100vw] !h-screen relative">
            <div className="horizontal-content">
              <div className="hori-f1">{count1} M</div>
              <div className="hori-f2">
                Real people — real lives — TOTAL REACH
                <br />
                OUR SO MANY PLATFORMS
              </div>
            </div>
            <div className="horiztonal-desc">
              <div className="hori-f4">
                We’re on a mission to impact as many
                <br />
                lives as possible and build a better
                <br />
                world while we do it.
                <br />
                Here’s our progress.
              </div>
            </div>
            <div className="horizontal-imgs">
              <motion.div style={{x:img4X}} className="horizontal-img-cont1 absolute top-[90px] -right-[30px] hidden lg:block">
                <Image className="h-[150px] w-[250px] 2xl:h-[238px] 2xl:w-[424px]" src={dog} alt="" />
              </motion.div>
              <motion.div style={{x:img1X}} className="horizontal-img-cont2 hidden absolute lg:block bottom-[60px] left-[50px]">
                  <Image
                    className="h-[150px] w-[250px] 2xl:h-[238px] 2xl:w-[424px] "
                    src={manMountain}
                    alt=""
                  />
              </motion.div>
                <motion.div style={{x:img3X}} className="horizontal-img-cont3 hidden lg:block">
                  <Image className="h-[150px] w-[250px] 2xl:h-[250px] 2xl:w-[450px]" src={Miami} alt="" />
                </motion.div>
              
                <motion.div style={{x:img2X}} className="horizontal-img-cont4 hidden lg:block absolute -translate-x-2/4 -top-2 left-2/4 ">
                  <Image className="h-[150px] w-[250px] 2xl:h-[250px] 2xl:w-[450px]" src={peoples} alt="" />
                </motion.div> 
            </div>
          </div>
          <div className="horizontal-item count-section-2 !w-[100vw] !h-screen relative">
            <div className="horizontal-content">
              <div className="hori-f2">WE CREATED OVER</div>
              <div className="hori-f1">{count2}+</div>
              <div className="hori-f2">HOURS OF FOOTAGE COMBINED</div>
            </div>
            <div className="absolute top-[5px] left-[5px] lg:left-[50px] lg:top-[50px] ">
              <div className="hori-f4">
                OUR ALL OUR GENRES WE CREATED OVER 12 <br />
                SHOWS, 2 movies , 100+ LIVE <br />
                EXPERIENCES , and over 25 ARTISTS IN <br />
                THE MENA REGION
              </div>
            </div>
            <div className="horizontal-imgs">
              <div className="horizontal-img-cont5 hidden lg:block">
                <Image className="h-[165.47px] w-[165.47px]" src={image1} alt="" />
              </div>
              <div className="horizontal-img-cont6 hidden lg:block">
                <Image className="h-[118px] w-[208px]" src={image4} alt="" />
              </div>
              <div className="horizontal-img-cont7 hidden lg:block">
                <Image className="w-[145.94px] h-[149.15px]" src={image2} alt="" />
              </div>
              <div className="horizontal-img-cont8 hidden lg:block">
                <Image className="h-[97px] w-[125px]" src={image3} alt="" />
              </div>
            </div>
          </div>
          <div className="horizontal-item !w-[100vw] !h-screen ">
            <div className="absolute bottom-[20px] right-[60px]">
              <ArrowSVG direction="vertical" />
            </div>
            <div className="horizontal-content">
              <div className="hori-f3">LETS CREATE</div>
              <div className="hori-f2">AND ENABLE YOU FOR YOUR CRAZIEST IDEA YET</div>
            </div>
            <div className="horizontal-btn2">
              <div className="horizontal-btn">
                <div className="button rounded-md !w-[220px] !h-[44px]">
                  <div className="button-text">Create With Us</div>
                  <Image className="button-arrow" src={SVGWHITE} alt="" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalSection;
