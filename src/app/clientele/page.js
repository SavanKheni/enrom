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
    [0, 0, isSmallDevice ? -600 : 0]
  );
  return (
    <section ref={text}>
      <motion.p style={{ x }} className={className}>
        {children}
      </motion.p>
    </section>
  );
};
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
                <TextWrapper className="main_title_subtext_1">OUR</TextWrapper>
                <TextWrapper className="main_title_subtext_2">
                  SUCCESSFUL
                </TextWrapper>
                <TextWrapper className="main_title_subtext_1">
                  BUSINESS
                </TextWrapper>
                <TextWrapper className="main_title_subtext_2">
                  ASSOCIATIONS
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
                    Its grateful to be recognized, we appreciate the trust and
                    support given from our valued customers and giving the
                    chance to serve them.
                  </b>{" "}
                  We are honoured to have some of the esteemed companies on our
                  clientele and we aim to add more titles to this as we
                  progress. At Renuka Logistics, we believe that the logistics
                  industry goes beyond service. It s all about successful
                  business associations and strong relationships that we have
                  built with our valuable clients over the years.
                </p>
                <p className="clientele_text">
                  Established in 2007 Renuka Logistics Pvt. Ltd. is a
                  supply-chain management and Logistic Company based in Nashik.
                  We are a customer-centric, technology-driven and
                  process-oriented company. We adapt to our customers
                  necessities and plan a cost-effective storage and distribution
                  solution tailored to their specific requirements. We are a
                  leader in providing sophisticated transportation, warehousing
                  and distribution services in Maharashtra, Gujarat and also all
                  over India, offering professional and efficient 3PL and 4PL
                  solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row clientele_us_box_main">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c1} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>ABHIJEET</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c2} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>A.P.R.A.S LTD</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c3} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>IMPERIAL AUTO</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c4} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>JP ENTERPRISES</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c5} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>LEAR CORPORATION</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c6} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>ARTI</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c7} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>SUDAL INDISTRIES LTD</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c8} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>ABB LTD</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c9} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>SMART SOLUTION</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c10} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>JYOTI LTD</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c11} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>UKAY METAL</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c12} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>L & T</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c13} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>LUCKY SWITCHGEAR</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c14} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>MAHINDRA</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c15} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>SCHNEIDER ELECTRIC</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c16} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>STELMEC</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c17} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>SAFARI</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c18} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>FUTURE SUPPLY CHAIN</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="clientele_us_box">
                <Image src={c19} alt="" />
                <div className="clientele_us_bg_layer">
                  <h4>DELTA</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clientele;
