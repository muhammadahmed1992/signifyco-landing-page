import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import AnimatedButton from "./AnimatedButton";
import AnimateWhenInViewport from "./AnimateWhenInViewport";
import GhamzaLogo from "./GhmzaLogo";

const HeroSection: React.FC = () => {
  const scrollHeroSectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const heroRowsParentRef = useRef<HTMLDivElement>(null);
  const heroSectionContainerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const heroRowsChild = useRef<HTMLDivElement>(null);

  // Constants and state for animation properties
  const maxClippingValue = 90;
  const maxScaleValue = 20;
  const minClippingValue = 0;
  const minScaleValue = 1;
  let clipPercentage = 100;
  let scalePercentage = 20;
  let videoContainerOpacity = 1;

  // Map for xTranslationRanges
  const xTranslationRanges = new Map<number, number>([
    [0, 10],
    [1, -6],
    [2, 7],
    [3, -9],
  ]);

  // Function to handle scroll and touch events
  const handleScroll = () => {
    handleHeroScroll();
  };

  // Effect hook to add event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  // Function to handle scrolling animation
  const handleHeroScroll = () => {
    // Check if all necessary refs are available
    if (
      !scrollHeroSectionRef.current ||
      !heroSectionContainerRef.current ||
      !videoContainerRef.current ||
      !heroRowsParentRef.current ||
      !linesRef.current
    )
      return;

    const headerSection = {
      start: 0,
      end: scrollHeroSectionRef.current.offsetHeight,
    };
    const clippingAnimationSection = {
      start: 0,
      end: headerSection.end * 0.55,
    };
    const heroRowAnimationSection = {
      start: clippingAnimationSection.end + 1,
      end: (headerSection.end - window.innerHeight) * 0.9,
    };

    const getCurrentSection = (currentScrollPosition: number) => {
      const currentSection = {
        clippingAnimationSection: false,
        heroRowAnimationSection: false,
        outsideHeader: false,
      };
      if (currentScrollPosition >= headerSection.end) {
        currentSection.outsideHeader = true;
      } else if (
        currentScrollPosition >= clippingAnimationSection.start &&
        currentScrollPosition <= clippingAnimationSection.end
      ) {
        currentSection.clippingAnimationSection = true;
      } else if (
        currentScrollPosition >= heroRowAnimationSection.start &&
        currentScrollPosition <= heroRowAnimationSection.end * 1.1
      ) {
        currentSection.heroRowAnimationSection = true;
      } else {
        currentSection.outsideHeader = true;
      }
      return currentSection;
    };

    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (heroSectionContainerRef.current.classList.contains("hide")) {
      heroSectionContainerRef.current.classList.remove("hide");
    }
    const currentSection = getCurrentSection(currentScrollTop);
    if (currentSection.outsideHeader) {
      scalePercentage = minScaleValue;
      clipPercentage = minClippingValue;
    } else if (currentSection.clippingAnimationSection) {
      clipPercentage =
        maxClippingValue - (currentScrollTop / clippingAnimationSection.end) * maxClippingValue;
      scalePercentage = minScaleValue + (clipPercentage / maxClippingValue) * maxScaleValue;
      videoContainerOpacity = clipPercentage < 1.4 ? videoContainerOpacity / 2 : 1;
    } else if (currentSection.heroRowAnimationSection) {
      scalePercentage = minScaleValue;
      clipPercentage = minClippingValue;
      let index = 0;
      const heroRows = heroRowsChild!.current?.childNodes!;
      for (let [index, row] of Array.from(heroRows.entries())) {
        const translationRange = xTranslationRanges.get(index)!;
        const xTranslationPosition =
          Math.min(
            (currentScrollTop - heroRowAnimationSection.start) /
              (heroRowAnimationSection.end - heroRowAnimationSection.start),
            1
          ) * translationRange;
        (row as HTMLElement).style.transform = `translateX(${xTranslationPosition}%)`;
        index++;
      }

      const scrollPercentage = Math.min(
        (currentScrollTop - heroRowAnimationSection.start) /
          (heroRowAnimationSection.end - heroRowAnimationSection.start),
        1
      );

      let oneOpacityCount = 0;
      const spans = Array.from(linesRef.current.querySelectorAll("span"));
      spans.forEach((span, index) => {
        let opacity = scrollPercentage - (index - oneOpacityCount) * 0.02;
        opacity = Math.max(opacity, 0);
        if (opacity >= 1) {
          oneOpacityCount++;
        }
        span.style.opacity = opacity.toString();
      });
    } else {
      scalePercentage = maxScaleValue;
      clipPercentage = maxClippingValue;
    }

    videoContainerRef.current.style.clipPath = `circle(${clipPercentage}%)`;
    heroRowsParentRef.current.style.transform = `scale(${scalePercentage})`;
    videoContainerRef.current.style.opacity = `${videoContainerOpacity}`;
  };

  return (
    <header className="hero-container" ref={scrollHeroSectionRef}>
      <div className="sticky hero">
        <div className="video-container" ref={videoContainerRef} style={{ clipPath: "circle(100%)" }}>
          <video className=" w-[100%] h-[100vh]  object-cover" autoPlay muted loop playsInline>
            <source src="https://cdn.significo.com/videos/significo-main-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="centered-div hide" ref={heroSectionContainerRef}>
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
          <div className="hero-row-parent pt-[60px] lg:pt-[40px]" ref={heroRowsParentRef}>
            <div className="hero-rows" ref={heroRowsChild}>
              <div className="hero-row">
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
              </div>
              <div className="hero-row">
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
              </div>
              <div className="hero-row">
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
              </div>
              <div className="hero-row">
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
              </div>
            </div>
          </div>
          <div className="hero-bottom !w-full mt-10">
            <div className="scroll-arrow" style={{ width: "40%" }}>
              <img src="" alt="" />
              Scroll
            </div>
            <div>
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
    </header>
  );
};

export default HeroSection;
