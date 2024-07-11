"use client";
import twitterLogo from "../assets/twitterLogo.png";
import { motion } from "framer-motion";
import TeamInformation from "@/Components/TeamInformation";
import Card from "../Components/SocialPostsCardView";
import rectangle from "../assets/bgImage.png";
import camera from "../assets/camera-black.svg";
import goVegan from "../assets/goVegan.png";
import { useState } from "react";
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
        <section className="bg-[#D9D9D9]">
          <div className="flex justify-center py-5">
            <AnimateWhenInViewport
              textToBeAnimated="ALL THAT WE DID!!!"
              cssClass="font-bold  md:text-[100px] text-[30px]"
            />
          </div>

          <div className="flex justify-center">
            <AnimateWhenInViewport
              textToBeAnimated="THAT YOU MUST HAVE SEEN"
              cssClass="text-center md:-mt-7 -mt-5 mb-10 md:text-[27.3px] text-[9px]"
              styles={{
                fontWeight: "700",
                lineHeight: "32.52px",
                fontFamily: "SFProDisplay, sans-serif",
              }}
            />
          </div>

          <TeamInformation />

          <div className="mt-20 flex justify-center">
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

        <section className="flex pb-10 bg-[#D9D9D9] flex-col md:flex-row">
          <div className="md:w-6/12 flex md:flex-col ">
            <div className="w-7/12 sm:w-full mt-14 md:mt-80">
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
            <div className="w-1/2 lg:w-7/12 md:mt-[87%] mt-12">
              <AnimateWhenInViewport
                textToBeAnimated="EXPLORE"
                cssClass="md:ml-16 ml-16 md:text-[58px] text-[24.83px]  flex justify-start"
                styles={{ fontWeight: "860", color: "#000000" }}
              />

              <AnimateWhenInViewport
                textToBeAnimated="THE REST"
                cssClass="md:text-[58px] -mt-3 md:-mt-10 text-[24.83px] ml-16 md:flex md:font-[400]"
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
                  width: "46%",
                  marginLeft: "11%",
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

          <div className="w-full hidden lg:block">
            <motion.div
              layout
              className="grid grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 relative mt-48 gap-x-[20px]"
            >
              {cardItems.map((card, index) => (
                <Card
                  key={card.id}
                  data={card}
                  hover={Math.floor(index % 3) === hoveredColumn}
                  onMouseEnter={() => setHoveredColumn(Math.floor(index % 3))}
                  onMouseLeave={() => setHoveredColumn(null)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mobile responsive card */}
        <div className="bg-[#D9D9D9] w-full block lg:hidden pb-10">
          <CustomSlider cards={cardItems} />
          <div className="mt-8">
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
                margin: "auto",
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

        <Footer />
      </div>
    </>
  );
}
