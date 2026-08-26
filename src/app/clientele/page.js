"use client";
import React, { useRef } from "react";
import "./clientele.css";
import c1 from "../../assets/images/5.jpg";
import c2 from "../../assets/images/6.jpg";
import c3 from "../../assets/images/7.png";
import c4 from "../../assets/images/8.jpg";
import c5 from "../../assets/images/9.png";
import c6 from "../../assets/images/10.jpg";
import c7 from "../../assets/images/11.jpg";
import c8 from "../../assets/images/12.png";
import c9 from "../../assets/images/13.jpg";
import c10 from "../../assets/images/14.png";
import c11 from "../../assets/images/15.png";
import c12 from "../../assets/images/16.jpg";
import c13 from "../../assets/images/17.jpg";
import c14 from "../../assets/images/18.png";
import c15 from "../../assets/images/20.png";
import c16 from "../../assets/images/21.png";
import c17 from "../../assets/images/22.png";
import c18 from "../../assets/images/23.png";
import c19 from "../../assets/images/24.jpg";
import grayImg from "../../assets/images/right-grey-1.svg";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useIsDesktop } from "@/hooks/useMediaQuery";

const fadeIn = (direction, delay, translate) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? translate : 0,
      x: direction === "left" ? 300 : direction === "right" ? translate : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
const VerticalDownWrapper = ({ children, direction }) => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 0.3], [-distance, distance]);
  }
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTransform = useParallax(scrollYProgress, direction);
  return (
    <div ref={ref}>
      <motion.div
        style={{
          zIndex: 1,
          position: "absolute",
          right: 0,
          translateY: xTransform,
          zIndex: -1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
const TextWrapper = ({ children, className }) => {
  const isSmallDevice = useIsDesktop();

  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [1, 0.4, 0],
    [0, 0, isSmallDevice ? -600 : 0],
  );
  return (
    <section ref={text}>
      <motion.p style={{ x }} className={className}>
        {children}
      </motion.p>
    </section>
  );
};
const clienteleData = [
  {
    title: "IMPORTERS",
    description:
      "International importers looking for reliable sourcing of premium Indian spices.",
  },
  {
    title: "DISTRIBUTORS",
    description:
      "Spice distributors seeking consistent quality and dependable supply.",
  },
  {
    title: "WHOLESALERS",
    description:
      "Wholesale buyers sourcing Indian spices for regional and international markets.",
  },
  {
    title: "FOOD MANUFACTURERS",
    description:
      "Food manufacturers requiring quality spices for processing and production.",
  },
  {
    title: "RETAILERS",
    description:
      "Retail businesses and private-label brands looking to offer authentic Indian spices.",
  },
  {
    title: "RESTAURANTS",
    description:
      "Restaurants and hospitality businesses sourcing authentic spices for their kitchens.",
  },
  {
    title: "FOODSERVICE",
    description:
      "Foodservice suppliers requiring reliable bulk spice sourcing.",
  },
  {
    title: "TRADING COMPANIES",
    description:
      "International trading companies seeking trusted Indian spice supply partners.",
  },
];
const Clientele = () => {
  return (
    <main>
      <section className="clientele_section">
        <VerticalDownWrapper direction={500}>
          <div className="hero_design_1">
            <Image src={grayImg} alt="" width={280} height={280} priority />
          </div>
        </VerticalDownWrapper>
        <div className="container">
          <div className="row">
            <div className="clientele_hero">
              <motion.h2
                className="service_title_text"
                variants={fadeIn("right", 0, -500)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                LOOK
              </motion.h2>
              <h2>OUR</h2>
              <motion.h2
                className="service_title_text"
                variants={fadeIn("left", 0, -100)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                CLIENTELE
              </motion.h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4">
              <div className="main_title">
                <TextWrapper className="main_title_subtext_1">
                  OUR
                </TextWrapper>

                <TextWrapper className="main_title_subtext_2">
                  GLOBAL
                </TextWrapper>

                <TextWrapper className="main_title_subtext_1">
                  BUSINESS
                </TextWrapper>

                <TextWrapper className="main_title_subtext_2">
                  PARTNERS
                </TextWrapper>
              </div>
            </div>

            <div className="col-sm-12 col-md-8 d_flex items_center">
              <motion.div
                variants={fadeIn("up", 0.4, -100)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="main_title_text"
              >
                <p className="clientele_text">
                  <b>
                    At EROM International, we are proud to build strong and lasting
                    relationships with businesses that value the authentic taste and
                    quality of Indian spices.
                  </b>{" "}
                  From international importers and distributors to wholesalers, food
                  manufacturers, restaurants, and retail businesses, we work with
                  partners who share our commitment to quality and reliability.
                </p>

                <p className="clientele_text">
                  We understand that every international buyer has different sourcing
                  requirements. That is why we focus on dependable supply, consistent
                  product quality, professional communication, and efficient export
                  coordination. Our goal is not simply to ship spices — it is to build
                  long-term partnerships that create value for both sides.
                </p>

                <p className="clientele_text">
                  From India&apos;s spice-growing regions to markets across the world,
                  <b> EROM International</b> aims to make sourcing premium Indian spices
                  simple, reliable, and transparent.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row clientele_us_box_main">
            {clienteleData.map((client, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12"
                key={client.title}
              >
                <div className={`clientele_us_box clientele_box_${index + 1}`}>
                  <div className="clientele_us_bg_layer">
                    <h4>{client.title}</h4>
                    <p>{client.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clientele;
