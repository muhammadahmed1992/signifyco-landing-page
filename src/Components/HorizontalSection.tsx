import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import {
  Miami,
  SVG,
  dog,
  manMountain,
  peoples,
} from "../../public/images/assets/index";
import Image from "next/image";

const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
  const { top } = el.getBoundingClientRect();
  const { innerHeight } = window;

  return top < innerHeight - top;
};

const HorizontalSection: React.FC = () => {
  const horizontalSectionRef = useRef<HTMLElement>(null);
  const horizontalListRef = useRef<HTMLDivElement>(null);
  let translationX = 0;

  const getOffsetTop = (element: HTMLElement) => {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    return offsetTop;
  };

  const handleHorizontalScroll = () => {
    const horizontalSection = horizontalSectionRef.current;
    const horizontalList = horizontalListRef.current;
    if (horizontalSection) {
      if (elementIsVisibleInViewport(horizontalSection)) {
        document.body.classList.remove("theme-light-gray");
        document.body.classList.remove("theme-black");
        if (!document.body.classList.contains("theme-orange")) {
          document.body.classList.add("theme-orange");
        }
      } else {
        document.body.classList.remove("theme-orange");
        if (!document.body.classList.contains("theme-light-gray")) {
          document.body.classList.add("theme-light-gray");
        }
      }
    }

    if (horizontalSection && horizontalList) {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const totalOffsetTop = getOffsetTop(horizontalSection);
      const totalOffsetBottom = totalOffsetTop + horizontalSection.offsetHeight;
      const horizontalListSectionRectWidth =
        horizontalList.getBoundingClientRect().width;
      const lastSectionWidth = horizontalListSectionRectWidth * 0.325;
      if (
        currentScrollTop > totalOffsetTop &&
        currentScrollTop < totalOffsetBottom - lastSectionWidth
      ) {
        translationX =
          ((currentScrollTop - totalOffsetTop) /
            (totalOffsetBottom - totalOffsetTop)) *
          horizontalListSectionRectWidth *
          -1;
        horizontalList.style.transform = `translateX(${translationX}px)`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHorizontalScroll);
    return () => {
      window.removeEventListener("scroll", handleHorizontalScroll);
    };
  }, []);

  return (
    <section ref={horizontalSectionRef} module-name="horizontal-section">
      <div className="horizontal">
        <div className="horizontal-container sticky">
          <div className="horizontal-list" ref={horizontalListRef}>
            <div className="horizontal-item">
              <div className="horizontal-item-text">
                <div className="hori-f3 !text-[42.26px] lg:!text-[158px] !leading-[42.26px] lg:!leading-[130px]">
                  REAL IMPACT,
                  <br /> REAL REACH
                </div>
              </div>
              <div className="horizontal-btn">
                <div className="button">
                  <div className="button-text">Contact</div>
                  <Image className="button-arrow" src={SVG} alt="" />
                </div>
              </div>
            </div>
            <div className="horizontal-item">
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
                <div className="horizontal-img-cont1">
                  <Image className="h-[150px] w-[200px]" src={dog} alt="" />
                </div>
                <div className="horizontal-img-cont2 ">
                  <Image
                    className="h-[150px] w-[200px]"
                    src={manMountain}
                    alt=""
                  />
                </div>
                <div className="horizontal-img-cont3">
                  <Image className="h-[150px] w-[200px]" src={Miami} alt="" />
                </div>
                <div className="horizontal-img-cont4">
                  <Image className="h-[150px] w-[200px]" src={peoples} alt="" />
                </div>
              </div>
            </div>
            <div className="horizontal-item">
              <div className="horizontal-content">
                <div className="hori-f2">WE CREATED OVER</div>
                <div className="hori-f1">30000+</div>
                <div className="hori-f2">HOURS OF FOOTAGE COMBINED</div>
              </div>
              {/* <div className="horiztonal-desc2">
                <div className="hori-f4">
                  OUR ALL OUR GENRES WE CREATED OVER 12 <br />
                  SHOWS, 2 movies , 100+ LIVE <br />
                  EXPERIENCES , and over 25 ARTISTS IN <br />
                  THE MENA REGION
                </div>
              </div> */}
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
            <div className="horizontal-item">
              <div className="horizontal-content">
                <div className="hori-f3">LETS CREATE</div>
                <div className="hori-f2">
                  AND ENABLE YOU FOR YOUR CRAZIEST IDEA YET
                </div>
              </div>
              <div className="horizontal-btn2">
                <div className="button !w-[240px]">
                  <div className="button-text">Create With Us</div>
                  <Image className="button-arrow" src={SVG} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSection;
