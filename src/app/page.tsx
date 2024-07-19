"use client";
import twitterLogo from "../assets/twitterLogo.png";
import { motion, useScroll } from "framer-motion";
import TeamInformation from "@/Components/TeamInformation";
import Card from "../Components/SocialPostsCardView";
import rectangle from "../assets/bgImage.png";
import camera from "../assets/camera-black.svg";
import goVegan from "../assets/goVegan.png";
import { useEffect, useState } from "react";
import CustomSlider from "@/Components/CardSlider";
import HorizontalSection from "@/Components/HorizontalSection";
import HeroSection from "@/Components/HeroSection";
import CardSection from "@/Components/CardSection";
import Footer from "@/Components/Footer";
import AnimatedButton from "@/Components/AnimatedButton";
import AnimateWhenInViewport from "@/Components/AnimateWhenInViewport";
import WinkSection from "@/Components/WinkSection";
import WinkCardSectionParent from "@/Components/WinkCardSectionParent";

const cardItems = [
  {
    id: 1,
    title: "GoVegan",
    hashtags: ["#vegan", "#healthy"],
    socialAppIcon: twitterLogo.src,
    rectangle: rectangle.src,
    goVegan: goVegan.src,
    camera: camera.src,
    date: "15 Oct 2019",
    description:
      "Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week’s snack plan with them! ",
  },
  {
    id: 2,
    title: "GoVegan",
    hashtags: ["#vegan", "#healthy"],
    socialAppIcon: twitterLogo.src,
    rectangle: rectangle.src,
    goVegan: goVegan.src,
    camera: camera.src,
    date: "15 Oct 2019",
    description:
      "Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week’s snack plan with them! ",
  },
  {
    id: 3,
    title: "GoVegan",
    hashtags: ["#vegan", "#healthy"],
    socialAppIcon: twitterLogo.src,
    rectangle: rectangle.src,
    goVegan: goVegan.src,
    camera: camera.src,
    date: "15 Oct 2019",
    description:
      "Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week’s snack plan with them! ",
  },
  {
    id: 4,
    title: "GoVegan",
    hashtags: ["#vegan", "#healthy"],
    socialAppIcon: twitterLogo.src,
    rectangle: rectangle.src,
    goVegan: goVegan.src,
    camera: camera.src,
    date: "15 Oct 2019",
    description:
      "Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week’s snack plan with them!",
  },
  {
    id: 5,
    title: "GoVegan",
    hashtags: ["#vegan", "#healthy"],
    socialAppIcon: twitterLogo.src,
    rectangle: rectangle.src,
    goVegan: goVegan.src,
    camera: camera.src,
    date: "15 Oct 2019",
    description:
      "Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week’s snack plan with them!",
  },
  {
    id: 6,
    title: "GoVegan",
    hashtags: ["#vegan", "#healthy"],
    socialAppIcon: twitterLogo.src,
    rectangle: rectangle.src,
    goVegan: goVegan.src,
    camera: camera.src,
    date: "15 Oct 2019",
    description:
      "Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week’s snack plan with them! ",
  },

  // Add more cards as per your requirement
];
export default function Home() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (latest) => {
    console.log(latest);
    if(latest < 0.27) {
      document.body.classList.remove('theme-pink');
      document.body.classList.remove('theme-light-gray');
      if(!document.body.classList.contains('theme-black')) {
        document.body.classList.add('theme-black');
      }
    } else if(latest < 0.57) {
      document.body.classList.remove('theme-pink');
      document.body.classList.remove('theme-black');
      if(!document.body.classList.contains('theme-light-gray')) {
        document.body.classList.add('theme-light-gray');
      }
    } else if(latest < 0.8) {
      document.body.classList.remove('theme-light-gray');
      document.body.classList.remove('theme-black');
      if(!document.body.classList.contains('theme-pink')) {
        document.body.classList.add('theme-pink');
      }
    } else {
      document.body.classList.remove('theme-pink');
      document.body.classList.remove('theme-black');
      if(!document.body.classList.contains('theme-light-gray')) {
        document.body.classList.add('theme-light-gray');
      }
    }
  })
  useEffect(() => {
    setInnerWidth(window?.innerWidth);
  }, []);

  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <WinkCardSectionParent />
      </div>
      <div>
        <HorizontalSection />
      </div>
      <div>
        <section className="pt-2">
          <div className="flex justify-center py-5">
            <AnimateWhenInViewport
              textToBeAnimated="ALL THAT WE DID!!!"
              cssClass="font-bold text-[30px]  sm:text-[40px] lg:text-[80px] xl:text-[128px] leading-[108.85px] leading-[148.13px] text-black !-tracking-[10px]"
            />
          </div>

          <div className="flex justify-center">
            <AnimateWhenInViewport
              textToBeAnimated="THAT YOU MUST HAVE SEEN"
              cssClass="text-center -mt-28 lg:-mt-[55px] mb-10 lg:text-[27.3px] text-[14px] text-black !-tracking-[0px]"
              styles={{ fontWeight: "700", lineHeight: "32.52px", fontFamily: "SFProDisplay, sans-serif" }}
            />
          </div>

          <TeamInformation />

          <div className="mt-20 flex justify-center pb-3">
            <div className="sm:w-auto lg:w-[20%] w-[20%]  md:block hidden">
              <AnimatedButton
                text="SEE MORE"
                customCssStyles={{
                  marginTop: "20px",
                  textAlign: "center",
                  backgroundColor: "#DF1780",
                  border: "none",
                  color: "white",
                  padding: "20px 40px",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15.5px",
                  lineHeight: "25.6px",
                  fontWeight: "590",
                  fontFamily: "SFProDisplay, sans-serif",
                  width: "80%",
                  justifyContent: "space-between",
                }}
                arrowStyle={{
                  stroke: "#FFFFFF",
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </div>
            <div className=" w-[80%] md:hidden flex justify-center">
              <AnimatedButton
                text="SEE MORE"
                customCssStyles={{
                  marginTop: "20px",
                  textAlign: "center",
                  backgroundColor: "#DF1780",
                  border: "none",
                  color: "white",
                  padding: "20px 40px",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15.5px",
                  lineHeight: "25.6px",
                  fontWeight: "590",
                  fontFamily: "SFProDisplay, sans-serif",
                  width: "85%",
                  justifyContent: "space-between",
                }}
                arrowStyle={{
                  stroke: "#FFFFFF",
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </div>
          </div>
        </section>

        <section className="flex pb-10 bg-[#D9D9D9] flex-col xl:flex-row">
          <div className="w-full lg:w-full  xl:w-5/12 flex md:flex-col ">
            <div className=" w-full mt-14  xl:mt-80">
              <AnimateWhenInViewport
                textToBeAnimated="Stay up-to-date on the"
                cssClass=":w-4/12 w-5/12 md:ml-24 ml-10 md:text-[18.28px] text-[9.5px] "
                styles={{
                  fontWeight: "590",
                  color: "#000000",
                  fontFamily: "SFProDisplay, sans-serif",
                }}
              />
              <AnimateWhenInViewport
                textToBeAnimated="latest Ghmza and share"
                cssClass="md:w-4/12 w-5/12 md:ml-24 ml-10 md:text-[18.28px] text-[9.5px] "
                styles={{
                  fontWeight: "590",
                  color: "#000000",
                  fontFamily: "SFProDisplay, sans-serif",
                }}
              />
              <AnimateWhenInViewport
                textToBeAnimated="your thoughts."
                cssClass="md:w-4/12 w-5/12 md:ml-24 ml-10 md:text-[18.28px] text-[9.5px] "
                styles={{
                  fontWeight: "590",
                  color: "#000000",
                  fontFamily: "SFProDisplay, sans-serif",
                }}
              />
            </div>
            <div className="w-full lg:w-7/12 mt-[40px] xl:mt-[630px] ">
              <AnimateWhenInViewport
                textToBeAnimated="EXPLORE"
                cssClass="md:ml-10 ml-10 md:text-[58px] text-[24.83px]  flex justify-start"
                styles={{ fontWeight: "860", color: "#000000" }}
              />

              <AnimateWhenInViewport
                textToBeAnimated="THE REST"
                cssClass="md:text-[58px] -mt-3 md:-mt-10 text-[24.83px] ml-10 md:flex md:font-[400]"
              />
            </div>
            <div className="hidden md:block ">
              <AnimatedButton
                text="TAKE ME BACK"
                customCssStyles={{
                  backgroundColor: "#DF1780",
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15.5px",
                  lineHeight: "25.6px",
                  fontWeight: "590",
                  fontFamily: "SFProDisplay, sans-serif",
                  marginLeft: "64px",
                  justifyContent: "space-between",
                }}
                arrowStyle={{
                  stroke: "#FFFFFF",
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </div>
          </div>

          <div className="w-full lg:w-full xl:w-7/12 hidden md:block">
            <motion.div
              layout
              className="grid  gridd-col grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 relative mt-10 lg:mt-48 gap-x-[-30px !important] !gap-x-[-4px] !gap-y-[-4px]"
            >
              {cardItems.map((card, index) => (
                <Card
                  key={card.id}
                  data={card}
                  hover={Math.floor(index % (innerWidth! > 1536 ? 3 : 2)) === hoveredColumn}
                  onMouseEnter={() => setHoveredColumn(Math.floor(index % (innerWidth! > 1536 ? 3 : 2)))}
                  onMouseLeave={() => setHoveredColumn(null)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mobile responsive card */}
        <div className="bg-[#D9D9D9] w-full block lg:hidden pb-10">
          <CustomSlider cards={cardItems} />
        </div>
        <div className="flex justify-center md:hidden block pb-10 bg-[#D9D9D9]">
          <AnimatedButton
            text="TAKE ME BACK!"
            customCssStyles={{
              marginTop: "20px",
              backgroundColor: "#DF1780",
              border: "none",
              color: "white",
              padding: "20px 40px",
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              fontSize: "15.5px",
              lineHeight: "25.6px",
              fontWeight: "590",
              fontFamily: "SFProDisplay, sans-serif",
              width: "65%",
              justifyContent: "space-between",
            }}
            arrowStyle={{ stroke: "#FFFFFF", marginLeft: "30px", display: "flex", alignItems: "center" }}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
