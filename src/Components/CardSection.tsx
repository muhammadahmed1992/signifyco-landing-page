import React, { forwardRef, useRef, useEffect } from "react";
import "../app/globals.css";
import AnimateWhenInViewport from "./AnimateWhenInViewport";
import { Group, image1, image2, image3, image4 } from "public/images/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
  const { top } = el.getBoundingClientRect();
  console.log(top);

  const { innerHeight } = window;

  return top < innerHeight - top;
};

const CardSection = forwardRef<HTMLDivElement>((props, ref) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCardScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (sectionRef.current) {
        if (elementIsVisibleInViewport(sectionRef.current)) {
          document.body.classList.remove("theme-black");
          if (!document.body.classList.contains("theme-light-gray")) {
            document.body.classList.add("theme-light-gray");
          }
        } else {
          document.body.classList.remove("theme-light-gray");
          if (!document.body.classList.contains("theme-black")) {
            document.body.classList.add("theme-black");
          }
        }
      }
      // const cards = cardsListRef.current?.querySelectorAll(".cards-item");
      //   if (cards) {
      //     cards.forEach((card) => {
      //       if (elementIsVisibleInViewport(card as HTMLElement)) {
      //         card.classList.add("card-animate");
      //       } else {
      //         card.classList.remove("card-animate");
      //       }
      //     });
      //   } else {
      //     console.log('no cards');
      //   }
    };

    window.addEventListener("scroll", handleCardScroll);

    return () => {
      window.removeEventListener("scroll", handleCardScroll);
    };
  }, []);

  var settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    ltr: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: .5,
        },
      },
    ],
  };
  return (
    <section ref={ref} data-module-name="card-section">
      {/* Desktop  */}
      <div className="hidden lg:block">
        <div className="container flex flex-col lg:flex-row lg:justify-between ">
          <div
            style={{ position: "sticky", top: "0", height: "100vh" }}
            className="max-w-[37.2rem] gap-x-[6.25rem] gap-y-[1.67rem] flex flex-col items-start justify-items-center pb-24"
          >
            <div className="section-description">
              <div className="description-lines">GHMZA FOR YOU</div>
              <p className="text-[10.39px] leading-[18.2px] tracking-[-0.23px] sm:text-lg sm:leading-8 sm:font-semibold sm:tracking-[-0.40px]">
                that technology can transform healthcare to put people first. We
                put
                <br /> humanity back at the center of healthcare with technology
                that
                <br /> simplifies complexity, accelerates capacity, and improves
                outcomes.
              </p>
            </div>
            <div className="section-title">
              <AnimateWhenInViewport
                textToBeAnimated="WE DO A LOT!"
                cssClass="title-lines"
              />
              <AnimateWhenInViewport
                textToBeAnimated="OF COOOOL"
                cssClass="title-lines"
              />
            </div>
            <div className="button">
              <div className="button-text">Contact</div>
              <img className="button-arrow" src="assets/SVG.png" alt="" />
            </div>
            <div className="image-container hidden lg:block pb-5 mt-9">
              <Image src={Group} alt="" />
            </div>
          </div>
          {/* card list  */}
          <div
            className="hidden lg:flex lg:flex-col lg:pt-[36.57rem] lg:pb-[22.09rem]"
            ref={cardsListRef}
          >
            <div className="px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem] border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4 text-white">
                <div className="text-xl leading-6 font-black tracking-[-0.44px] mb-6">
                  FILMS
                </div>
                <div className="description">
                  <p className="text-white text-sm leading-6 font-semibold tracking-[-0.32px]">
                    We believe technology can dramatically
                    <br />
                    improve the experience of managing
                    <br />
                    health, and — when crafted with empathy
                    <br />
                    intention, and expertise — impact lives at
                    <br />
                    scale.
                  </p>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image1} alt="" />
              </div>
            </div>
            <div className=" px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem]  border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4 text-white">
                <div className="text-xl leading-6 font-black tracking-[-0.44px] mb-6">
                  MUSIC
                </div>
                <div className="description">
                  <p className="text-white text-sm leading-6 font-semibold tracking-[-0.32px] ">
                    We believe technology can dramatically
                    <br />
                    improve the experience of managing
                    <br />
                    health, and — when crafted with empathy
                    <br />
                    intention, and expertise — impact lives at
                    <br />
                    scale.
                  </p>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image2} alt="" />
              </div>
            </div>
            <div className="px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem]  border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4 text-white">
                <div className="text-xl leading-6 font-black tracking-[-0.44px] mb-6">
                  SHOWS
                </div>
                <div className="description">
                  <p className="text-white text-sm leading-6 font-semibold tracking-[-0.32px]">
                    We believe technology can dramatically
                    <br />
                    improve the experience of managing
                    <br />
                    health, and — when crafted with empathy
                    <br />
                    intention, and expertise — impact lives at
                    <br />
                    scale.
                  </p>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image3} alt="" />
              </div>
            </div>
            <div className=" px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem]  border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4 text-white">
                <div className="text-xl leading-6 font-black tracking-[-0.44px] mb-6">
                  DOCUS
                </div>
                <div className="description">
                  <p className="text-white text-sm leading-6 font-semibold tracking-[-0.32px]">
                    We believe technology can dramatically
                    <br />
                    improve the experience of managing
                    <br />
                    health, and — when crafted with empathy
                    <br />
                    intention, and expertise — impact lives at
                    <br />
                    scale.
                  </p>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image4} alt="" />
              </div>
            </div>
            <div className=" px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem] border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/ text-white">
                <div className="text-xl leading-6 font-black tracking-[-0.44px] mb-6">
                  LIVE EXPERIENCES
                </div>
                <div className="description">
                  <p className="text-sm leading-6 font-semibold tracking-[-0.32px]">
                    We believe technology can dramatically
                    <br />
                    improve the experience of managing
                    <br />
                    health, and — when crafted with empathy
                    <br />
                    intention, and expertise — impact lives at
                    <br />
                    scale.
                  </p>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <div className="block lg:hidden mb-16">
        <div className="container flex flex-col">
          <div className="mb-16 max-w-[37.2rem] gap-x-[6.25rem] gap-y-[1.67rem] flex flex-col items-start justify-items-center">
            <div className="section-description">
              <div className="description-lines">GHMZA FOR YOU</div>
              <p className="text-[10.39px] leading-[18.2px] tracking-[-0.23px] sm:text-lg sm:leading-8 sm:font-semibold sm:tracking-[-0.40px]">
                that technology can transform healthcare to put people first. We
                put
                <br /> humanity back at the center of healthcare with technology
                that
                <br /> simplifies complexity, accelerates capacity, and improves
                outcomes.
              </p>
            </div>
            <div className="section-title">
              <AnimateWhenInViewport
                textToBeAnimated="WE DO A LOT!"
                cssClass="title-lines"
              />
              <AnimateWhenInViewport
                textToBeAnimated="OF COOOOL"
                cssClass="title-lines"
              />
            </div>
            <div className="button">
              <div className="button-text">Contact</div>
              <img className="button-arrow" src="assets/SVG.png" alt="" />
            </div>
          </div>
          {/* Card list carousel  for mobile */}
          <div className="">
            <div className="w-100" >
              <Slider {...settings}>
                <div className="p-5 w-[250px] h-[250px] flex flex-col items-start border border-solid rounded-[10px] bg-[#df1780] transition-all duration-500 ease-in-out overflow-hidden">
                  <div className="">
                    <Image className="h-[40px] w-[40px]" src={image1} alt="" />
                  </div>
                  <div className="w-[250px] text-white">
                    <div className="text-sm leading-4 font-black mt-10 mb-4">
                      FILMS
                    </div>
                    <div className="text-left w-[195px] ">
                      <p className="text-[10px] leading-4 font-semibold tracking-[-0.21px]">
                        We believe technology can dramatically <b />
                        improve the experience of managing
                        <br />
                        health, and — when crafted with empathy
                        <br />
                        intention, and expertise — impact lives at
                        <br />
                        scale.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 w-[250px] h-[250px]  flex flex-col items-start border border-solid rounded-[10px] bg-[#df1780] transition-all duration-500 ease-in-out  overflow-hidden">
                  <div className="">
                    <Image className="h-[40px] w-[40px]" src={image2} alt="" />
                  </div>
                  <div className="w-[250px] text-white">
                    <div className="text-sm leading-4 font-black mt-10 mb-4">
                      MUSIC
                    </div>
                    <div className="text-left w-[195px] ">
                      <p className="text-[10px] leading-4 font-semibold tracking-[-0.21px]">
                        We believe technology can dramatically <b />
                        improve the experience of managing
                        <br />
                        health, and — when crafted with empathy
                        <br />
                        intention, and expertise — impact lives at
                        <br />
                        scale.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 w-[250px] h-[250px] flex flex-col items-start border border-solid rounded-[10px] bg-[#df1780] transition-all duration-500 ease-in-out  overflow-hidden">
                  <div className="">
                    <Image className="h-[40px] w-[40px]" src={image3} alt="" />
                  </div>
                  <div className="w-[250px] text-white">
                    <div className="text-sm leading-4 font-black mt-10 mb-4">
                      SHOWS
                    </div>
                    <div className="text-left w-[195px] ">
                      <p className="text-[10px] leading-4 font-semibold tracking-[-0.21px]">
                        We believe technology can dramatically <b />
                        improve the experience of managing
                        <br />
                        health, and — when crafted with empathy
                        <br />
                        intention, and expertise — impact lives at
                        <br />
                        scale.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 w-[250px] h-[250px]  flex flex-col items-start border border-solid rounded-[10px] bg-[#df1780] transition-all duration-500 ease-in-out  overflow-hidden">
                  <div className="">
                    <Image className="h-[40px] w-[40px]" src={image4} alt="" />
                  </div>
                  <div className="w-[250px] text-white">
                    <div className="text-sm leading-4 font-black mt-10 mb-4">
                      DOCUS
                    </div>
                    <div className="text-left w-[195px] ">
                      <p className="text-[10px] leading-4 font-semibold tracking-[-0.21px]">
                        We believe technology can dramatically <b />
                        improve the experience of managing
                        <br />
                        health, and — when crafted with empathy
                        <br />
                        intention, and expertise — impact lives at
                        <br />
                        scale.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 w-[250px] h-[250px] flex flex-col items-start border border-solid rounded-[10px] bg-[#df1780] transition-all duration-500 ease-in-out  overflow-hidden">
                  <div className="">
                    <Image className="h-[40px] w-[40px]" src={image4} alt="" />
                  </div>
                  <div className="w-[250px] text-white">
                    <div className="text-sm leading-4 font-black mt-10 mb-4">
                      LIVE EXPERIENCES
                    </div>
                    <div className="text-left w-[195px] ">
                      <p className="text-[10px] leading-4 font-semibold tracking-[-0.21px]">
                        We believe technology can dramatically <b />
                        improve the experience of managing
                        <br />
                        health, and — when crafted with empathy
                        <br />
                        intention, and expertise — impact lives at
                        <br />
                        scale.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CardSection.displayName = "CardSection";

export default CardSection;
