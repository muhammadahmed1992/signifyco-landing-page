import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { Group, image1, image2, image3, image4 } from "public/images/assets";
import { useRef } from "react";

const CardHorizontal = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#D9D9D9]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div className="w-[250px] bg-[#DF1780] px-3 py-6 rounded-lg border border-black">
      <div className="ml-3">
        <div className="mt-5">
          <Image className="h-[48px] w-[48px]" src={card.url} alt="" />
        </div>
        <h4 className="text-[14.31px] font-[1000] leading-[15.77px] tracking-[-0.29px] text-white mt-8 SF-Pro">
          {card.title}
        </h4>
        <p className="text-[9.83px] font-[590] leading-[15.47px] -tracking-[0.21px] text-white mt-3 SF-Pro w-[80%]">
          {card.paragraph}
        </p>
      </div>
    </div>
  );
};

export default CardHorizontal;

const cards = [
  {
    url: image1,
    title: "FILMS",
    paragraph:
      "We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.",
    id: 1,
  },
  {
    url: image2,
    title: "MUSIC",
    paragraph:
      "We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.",
    id: 2,
  },
  {
    url: image3,
    title: "SHOWS",
    paragraph:
      "We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.",
    id: 3,
  },
  {
    url: image4,
    title: "DOCUS",
    id: 4,
    paragraph:
      "We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.",
  },
  {
    url: image3,
    title: "LIVE EXPERIENCES",
    id: 5,
    paragraph:
      "We believe technology can dramatically improve the experience of managing health, and — when crafted with empathy, intention, and expertise — impact lives at scale.",
  },
];
