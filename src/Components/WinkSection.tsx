import React, { forwardRef } from "react";
import "../app/globals.css";
import Image from "next/image";
import { circle, logo, wink } from "public/images/assets";

const WinkSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-[1215.54px] mx-5  xl:mx-auto mt-[100px] mb-[120px] border-[0.5px] border-[#1D1E1C] "
    >
      <div className="flex border-b-[0.5px] border-[#1D1E1C]">
        <div className="w-[25%] flex justify-center items-center">
          <Image className="w-[70%] lg:w-auto" src={logo} alt="image logo" />
        </div>
        <div className="border-x-[0.5px] border-[#1D1E1C] w-[3%]"></div>
        <div className="w-[69%] ">
          <div className="w-[90%] mx-auto py-5 lg:py-[60px]">
            <Image className="lg:ml-[60px]" src={wink} alt="wink" />
            <p className="text-[12px] font-[500] italic mt-8">verb</p>
            <p className="text-sm lg:text-[18px] font-[500] ml-[12px] mt-[16px]">
              1. close and open one eye quickly, typically to indicate that something is a joke or a secret or
              as signal of affection or greeting."he winked at Nicole as he passed"
            </p>
            <p className="text-sm lg:text-[18px] font-[500] ml-[12px] mt-4 lg:mt-[80px]">
              2. (of a bright object or a light) or flash intermittently. <br /> "the diamond on her finger
              winked in the moonlight"
            </p>
          </div>
          <div className="relative">
            <div className="w-full bg-[#1D1E1C] h-[0.5px] !absolute"></div>
          </div>
          <div className="w-[90%] mx-auto py-5 lg:py-[60px]">
            <p className="text-[12px] font-[500] italic lg:mt-8">noun</p>
            <p className="text-sm lg:text-[18px] font-[500] ml-[12px] mt-[16px]">
              1. close and open one eye quickly, typically to indicate that something is a joke or a secret or
              as signal of affection or greeting."he winked at Nicole as he passed"
            </p>
          </div>
        </div>
        <div className="w-[3%] border-l-[0.5px] border-[#1D1E1C]"></div>
      </div>
      <div className="flex justify-between">
        <div className="w-[28%] border-r-[0.5px] border-[#1D1E1C] h-[34.5px]"></div>
        <div className="w-[3.04%] border-l-[0.5px] border-[#1D1E1C] h-[34.5px]">
          <Image className="h-full w-full" src={circle} alt="" />
        </div>
      </div>
    </div>
  );
});

WinkSection.displayName = "WinkSection";

export default WinkSection;
