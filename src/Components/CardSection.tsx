import React, { forwardRef, useRef, useEffect } from "react";
import "../app/globals.css";
import AnimateWhenInViewport from "./AnimateWhenInViewport";
import { Group, image1, image2, image3, image4 } from "public/images/assets";
import Image from "next/image";

const CardSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} data-module-name="card-section">
      <div className="container !flex flex-col lg:!flex-row w-auto !h-[200vh] lg:!h-[400vh] w-100vw lg:w-auto">
        <div className="card-section-container sticky">
          <div className="section-descr">
            <div className="description-lines">GHMZA FOR YOU</div>
            <div className="description-lines">
              that technology can transform healthcare to put people first. We put
            </div>
            <div className="description-lines">
              humanity back at the center of healthcare with technology that
            </div>
            <div className="description-lines">
              simplifies complexity, accelerates capacity, and improves outcomes.
            </div>
          </div>
          <div className="section-title">
            <AnimateWhenInViewport textToBeAnimated="WE DO A LOT!" cssClass="title-lines" />
            <AnimateWhenInViewport textToBeAnimated="OF COOOOL" cssClass="title-lines" />
          </div>
          <div className="button">
            <div className="button-text">Contact</div>
            <img className="button-arrow" src="assets/SVG.png" alt="" />
          </div>
          <div className="image-container" style={{ marginTop: "20%", paddingBottom: "20px" }}>
            <Image src={Group} alt="" />
          </div>
        </div>
        <div className="cards-list !flex  !flex-row lg:!flex-col gap-10 lg:gap-0 translate-x-[25%] lg:!translate-x-[-160%]">
          <div className="cards-item !w-[700px]  lg:!w-[95%]">
            <div className="card-item-desc-container">
              <div className="card-item-title">FILMS</div>
              <div className="description">
                <div className="card-item-desc">We believe technology can dramatically</div>
                <div className="card-item-desc">improve the experience of managing</div>
                <div className="card-item-desc">health, and — when crafted with empathy</div>
                <div className="card-item-desc">intention, and expertise — impact lives at</div>
                <div className="card-item-desc">scale.</div>
              </div>
            </div>
            <div className="card-image">
              <Image className="h-[40px] w-[40px]" src={image1} alt="" />
            </div>
          </div>
          <div className="cards-item">
            <div className="card-item-desc-container">
              <div className="card-item-title">MUSIC</div>
              <div className="description">
                <div className="card-item-desc">We believe technology can dramatically</div>
                <div className="card-item-desc">improve the experience of managing</div>
                <div className="card-item-desc">health, and — when crafted with empathy</div>
                <div className="card-item-desc">intention, and expertise — impact lives at</div>
                <div className="card-item-desc">scale.</div>
              </div>
            </div>
            <div className="card-image">
              <Image className="h-[40px] w-[40px]" src={image2} alt="" />
            </div>
          </div>
          <div className="cards-item">
            <div className="card-item-desc-container">
              <div className="card-item-title">SHOWS</div>
              <div className="description">
                <div className="card-item-desc">We believe technology can dramatically</div>
                <div className="card-item-desc">improve the experience of managing</div>
                <div className="card-item-desc">health, and — when crafted with empathy</div>
                <div className="card-item-desc">intention, and expertise — impact lives at</div>
                <div className="card-item-desc">scale.</div>
              </div>
            </div>
            <div className="card-image">
              <Image className="h-[40px] w-[40px]" src={image3} alt="" />
            </div>
          </div>
          <div className="cards-item">
            <div className="card-item-desc-container">
              <div className="card-item-title">DOCUS</div>
              <div className="description">
                <div className="card-item-desc">We believe technology can dramatically</div>
                <div className="card-item-desc">improve the experience of managing</div>
                <div className="card-item-desc">health, and — when crafted with empathy</div>
                <div className="card-item-desc">intention, and expertise — impact lives at</div>
                <div className="card-item-desc">scale.</div>
              </div>
            </div>
            <div className="card-image">
              <Image className="h-[40px] w-[40px]" src={image4} alt="" />
            </div>
          </div>
          <div className="cards-item pr-3">
            <div className="card-item-desc-container">
              <div className="card-item-title">LIVE EXPERIENCES</div>
              <div className="description">
                <div className="card-item-desc">We believe technology can dramatically</div>
                <div className="card-item-desc">improve the experience of managing</div>
                <div className="card-item-desc">health, and — when crafted with empathy</div>
                <div className="card-item-desc">intention, and expertise — impact lives at</div>
                <div className="card-item-desc">scale.</div>
              </div>
            </div>
            <div className="card-image ">
              {/* <Image className="h-[40px] w-[40px]" src={image4} alt="" /> */}
            </div>
          </div>
        </div>
        {/* 
        <div className="cards-item">
          <div className="card-item-desc-container">
            <div className="card-item-title">Music</div>
            <div className="description">
              <div className="card-item-desc">We build mobile and web-based apps,</div>
              <div className="card-item-desc">platforms, and infrastructure fitted to your</div>
              <div className="card-item-desc">needs. We have an open solutions</div>
              <div className="card-item-desc">framework, so we work to fit your business,</div>
              <div className="card-item-desc">not the other way around.</div>
            </div>
          </div>
          <div className="card-image">
            <img src="assets/Vector.png" alt="" />
          </div>
        </div>
        */}
      </div>
    </section>
  );
});

// const sectionRef = useRef<HTMLDivElement | null>(null);
// const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
//   const { top } = el.getBoundingClientRect();
//   const { innerHeight } = window;

//   return top < innerHeight - top;
// };
// useEffect(() => {
//   const handleCardScroll = () => {
//     const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (sectionRef.current) {
//       if (elementIsVisibleInViewport(sectionRef.current)) {
//         document.body.classList.remove("theme-black");
//         if (!document.body.classList.contains("theme-light-gray")) {
//           document.body.classList.add("theme-light-gray");
//         }
//       } else {
//         document.body.classList.remove("theme-light-gray");
//         if (!document.body.classList.contains("theme-black")) {
//           document.body.classList.add("theme-black");
//         }
//       }
//     }
//   };

//   window.addEventListener("scroll", handleCardScroll);

//   return () => {
//     window.removeEventListener("scroll", handleCardScroll);
//   };
// }, []);

CardSection.displayName = "CardSection";

export default CardSection;
