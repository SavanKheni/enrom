"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import grayImg from "../../assets/images/right-grey-1.svg";
import "./about.css";
import { useIsDesktop } from "@/hooks/useMediaQuery";

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

const TextWrapper = ({ children, className }) => {
  const isSmallDevice = useIsDesktop();

  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [1, 0.6, 0],
    [0, 0, isSmallDevice ? -1000 : 0]
  );

  return (
    <section ref={text}>
      <motion.p style={{ x }} className={className}>
        {children}
      </motion.p>
    </section>
  );
};

const TextWrapperRight = ({ children, className }) => {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [1, 0.3, 0], [0, 0, 1000]);

  return (
    <section ref={text}>
      <motion.p style={{ x }} className={className}>
        {children}
      </motion.p>
    </section>
  );
};
const About = () => {
  return (
    <main>
      <section className="about_us_section">
        <VerticalDownWrapper direction={500}>
          <div className="hero_design_1">
            <Image src={grayImg} alt="" width={280} height={280} priority />
          </div>
        </VerticalDownWrapper>
        <div className="container">
          <div className="about_hero">
            <motion.h2
              className="service_title_text"
              variants={fadeIn("right", 0, -500)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              HAVE
            </motion.h2>
            <h2 className="service_title_text">TO KNOW</h2>
            <motion.h2
              className="service_title_text"
              variants={fadeIn("left", 0, -100)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              ABOUT US
            </motion.h2>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4">
              <div className="main_title">
                <TextWrapper className="main_title_subtext_1">
                  WELCOME TO
                </TextWrapper>
                <TextWrapper className="main_title_subtext_2">
                  ENORM
                </TextWrapper>
              </div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.4, -100)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="col-sm-12 col-md-8 d_flex items_center"
            >
              <div className="main_title_text ">
                <p className="about_us_text">
                  <b>
                    Customised transportation solution to support your Business
                    growth
                  </b>{" "}
                  A world-class provider of innovative logistics and
                  supply-chain services and solutions Renuka Logistics has an
                  extensive network in India. Get all types of transportation
                  solutions you need to support your business growth. We at
                  Renuka Logistics offers customised and cost-effective
                  transportation services for domestic and international
                  customers.
                </p>
                <p className="about_us_text">
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
              </div>
            </motion.div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-8 d_flex items_center flex_order">
              <div className="main_title_text ">
                <p className="about_us_text">
                  As a global company based in India, Renuka Logistics is
                  exceptionally positioned to serve both international and
                  domestic customers in the world s fastest-growing markets.
                  Providing advanced customer-specific solutions through our
                  value-creating services and IT technology in supply-chain
                  management, Renuka Logistics comprehensive service network and
                  platforms will allow you to make all the right moves for your
                  business.
                </p>
                <p className="about_us_text">
                  Renuka Logistics focuses on serving customers with global
                  sourcing and supply-chain-management needs and creating value
                  through innovative end-to-end international logistics
                  programs. Our dedicated and experienced professionals will
                  always provide you with customized logistics solutions
                  according to your specific demands.
                </p>
                <p className="about_us_text">
                  Renuka Logistics focuses on serving customers with global
                  sourcing and supply-chain-management needs and creating value
                  through innovative end-to-end international logistics
                  programs. Our dedicated and experienced professionals will
                  always provide you with customized logistics solutions
                  according to your specific demands.
                </p>
                Our services are provided all over
                <b className="text_orange">
                  {" "}
                  Nashik, Mumbai, Pune, Vadodara, Ankaleshwar, and JNPT
                </b>{" "}
                on a daily basis with the support of our own fleet go down
                offices situated in the destination with skilled staff to serve
                an esteemed organization like you. We ve served thousands of
                companies and individuals all over India to get their goods from
                point one end to other smarter and faster.
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="main_title">
                <TextWrapperRight className="main_title_subtext_1">
                  WHY
                </TextWrapperRight>
                <TextWrapperRight className="main_title_subtext_2">
                  CHOOSE US
                </TextWrapperRight>
              </div>
            </div>
          </div>
        </div>
        <div className="margin_top certificate_header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="about_us_title">
                  <h1>CHECK</h1>
                  <h1>OUR</h1>
                  <h1>
                    <TextWrapperRight className="text_orange">
                      CERTIFICATE
                    </TextWrapperRight>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid margin_m_top">
          <div className="row about_us_box_main">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="about_us_box">
                <div className="about_us_bg_layer">
                  <h4>SAMPLE CERTIFICATE</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="about_us_box about_us_box_2">
                <div className="about_us_bg_layer">
                  <h4>SAMPLE CERTIFICATE</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="about_us_box about_us_box_3">
                <div className="about_us_bg_layer">
                  <h4>SAMPLE CERTIFICATE</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="about_us_box about_us_box_4">
                <div className="about_us_bg_layer">
                  <h4>SAMPLE CERTIFICATE</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="about_us_box about_us_box_4">
                <div className="about_us_bg_layer">
                  <h4>SAMPLE CERTIFICATE</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="about_us_box about_us_box_4">
                <div className="about_us_bg_layer">
                  <h4>SAMPLE CERTIFICATE</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
