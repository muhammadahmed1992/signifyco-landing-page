import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import { Miami, SVG, dog, manMountain, peoples } from "../../public/images/assets/index";
import Image from "next/image";

import { motion, useTransform, useScroll } from "framer-motion";

const HorizontalSection = () => {
  return (
    <div>
      <HorizontalScrollCarousel /> 
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="horizontal-item !w-[100vw] !h-screen">
            <div className="horizontal-item-text">
              <div className="hori-f3 !text-[42.26px] xl:!text-[158px] !leading-[42.26px] lg:!leading-[130px]">
                REAL IMPACT,
              </div>
              <div className="hori-f3 !text-[42.26px] xl:!text-[158px] !leading-[42.26px] lg:!leading-[130px]">
                REAL REACH
              </div>
            </div>
            <div className="horizontal-btn">
              <div className="button">
                <div className="button-text">Contact</div>
                <Image className="button-arrow" src={SVG} alt="" />
              </div>
            </div>
          </div>
          <div className="horizontal-item !w-[100vw] !h-screen relative">
            <div className="horizontal-content">
              <div className="hori-f1">203 M</div>
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
              <div className="horizontal-img-cont1 hidden lg:block">
                <Image className=" h-[150px] w-[200px]" src={dog} alt="" />
              </div>
              <div className="horizontal-img-cont2 hidden lg:block">
                <Image className="h-[150px] w-[200px]" src={manMountain} alt="" />
              </div>
              <div className="horizontal-img-cont3 hidden lg:block">
                <Image className="h-[150px] w-[200px]" src={Miami} alt="" />
              </div>
              <div className="horizontal-img-cont4 hidden lg:block">
                <Image className="h-[150px] w-[200px]" src={peoples} alt="" />
              </div>
            </div>
          </div>
          <div className="horizontal-item !w-[100vw] !h-screen relative">
            <div className="horizontal-content">
              <div className="hori-f2">WE CREATED OVER</div>
              <div className="hori-f1">30000+</div>
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
            /*{" "}
            <div className="horizontal-imgs">
              <div className="horizontal-img-cont5">
                <img src="assets/Group 1000004205 (1).png" alt="" />
              </div>
              <div className="horizontal-img-cont6">
                <img src="assets/Group 1000004206(1).png" alt="" />
              </div>
              <div className="horizontal-img-cont7">
                <img src="assets/Vector (2).png" alt="" />
              </div>
              <div className="horizontal-img-cont8">
                <img src="assets/Group 9.png" alt="" />
              </div>
            </div>
          </div>
          <div className="horizontal-item !w-[100vw] !h-screen">
            <div className="horizontal-content">
              <div className="hori-f3">LETS CREATE</div>
              <div className="hori-f2">AND ENABLE YOU FOR YOUR CRAZIEST IDEA YET</div>
            </div>
            <div className="horizontal-btn2">
              <div className=" !w-[240px]">
                <div className="text-[14px] font-[590]">Create With Us</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalSection;
