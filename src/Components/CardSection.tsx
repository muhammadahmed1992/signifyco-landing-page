import React, { forwardRef, useRef, useEffect } from "react";
import "../app/globals.css";
import AnimateWhenInViewport from "./AnimateWhenInViewport";
import { Group, image1, image2, image3, image4 } from "public/images/assets";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import CardHorizontal from "./CardHorizontal";

const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
  const { top } = el.getBoundingClientRect();
  console.log(top);

  const { innerHeight } = window;

  return top < innerHeight - top;
};

const CardSection = forwardRef<HTMLDivElement>((props, ref) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsListRef = useRef<HTMLDivElement>(null);
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
  //     // const cards = cardsListRef.current?.querySelectorAll(".cards-item");
  //     //   if (cards) {
  //     //     cards.forEach((card) => {
  //     //       if (elementIsVisibleInViewport(card as HTMLElement)) {
  //     //         card.classList.add("card-animate");
  //     //       } else {
  //     //         card.classList.remove("card-animate");
  //     //       }
  //     //     });
  //     //   } else {
  //     //     console.log('no cards');
  //     //   }
  //   };

  //   window.addEventListener("scroll", handleCardScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleCardScroll);
  //   };
  // }, []);
  return (
    <section ref={ref} data-module-name="card-section">
      <div className="max-w-[1720px] mx-5 lg:mx-auto !flex flex-col lg:!flex-row w-auto lg:h-[3500px]  w-100vw lg:w-auto">
        <div className="card-section-container relative lg:sticky lg:top-0 !ml-0 lg:!ml-[60px] w-full lg:w-auto">
          <div className="section-descr">
            <p className="text-[19px] font-[590] leading-[32px] tracking-[-0.4px] max-w-[592.89px]">
              GHMZA FOR YOU
            </p>
            <p className="text-[19px] font-[590] leading-[32px] tracking-[-0.4px] max-w-[592.89px]">
              that technology can transform healthcare to put people first. We put humanity back at the center
              of healthcare with technology that simplifies complexity, accelerates capacity, and improves
              outcomes.
            </p>
          </div>
          <div className="section-title">
            <AnimateWhenInViewport
              textToBeAnimated="WE DO A LOT!"
              cssClass="text-[35px] lg:text-[58px] font-[510] leading-[35px] lg:leading-[69.6px]"
            />
            <div className="flex">
              <AnimateWhenInViewport
                textToBeAnimated="OF"
                cssClass="text-[35px] lg:text-[58px] font-[510] leading-[35px] lg:leading-[69.6px]"
              />
              <AnimateWhenInViewport
                textToBeAnimated=" COOOOOOL"
                cssClass="text-[35px] lg:text-[58px] font-[860] leading-[30px] lg:leading-[69.6px]"
              />
            </div>
          </div>
          <div>
            <AnimatedButton
              text="CONTACT!!"
              customCssStyles={{
                marginTop: "20px",
                textAlign: "center",
                backgroundColor: "transparent",
                border: "1px solid #000000",
                color: "#000000",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                fontSize: "15.5px",
                lineHeight: "25.6px",
                fontWeight: "590",
                fontFamily: "SFProDisplay, sans-serif",
                justifyContent: "space-between",
                width: "222px",
                height: "57px",
                padding: "0px 20px",
              }}
              arrowStyle={{ stroke: "#000000", marginLeft: "30px", display: "flex", alignItems: "center" }}
            />
          </div>
          <div
            className="max-w-[563px] max-h-[433px] hidden lg:block"
            style={{ marginTop: "20%", paddingBottom: "20px" }}
          >
            <Image src={Group} alt="" />
          </div>
        </div>
        <div className="hidden lg:flex w-full justify-end">
          <div
            className="cards-list lg:!flex !flex-row lg:!flex-col gap-10 lg:gap-0 mr-[90px] !hidden "
            ref={cardsListRef}
          >
            <div className="cards-item !w-[700px] lg:!w-[95%]">
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
        </div>
        <div className="block lg:hidden">
          <CardHorizontal />
        </div>
      </div>
    </section>
  );
});

CardSection.displayName = "CardSection";

export default CardSection;
