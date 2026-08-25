"use client";
import React, { useRef } from "react";
import "./servicespage.css";
import Link from "next/link";
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
    [1, 0.7, 0],
    [0, 0, isSmallDevice ? -450 : 0],
  );

  return (
    <section ref={text}>
      <motion.p style={{ x }} className={className}>
        {children}
      </motion.p>
    </section>
  );
};
const Services = () => {
  return (
    <main>
      <section className="services_section">
        <VerticalDownWrapper direction={500}>
          <div className="hero_design_1">
            <Image src={grayImg} alt="" width={280} height={280} priority />
          </div>
        </VerticalDownWrapper>
        <div className="container">
          <div className="row">
            <div className="services_hero">
              <motion.h2
                className="service_title_text"
                variants={fadeIn("right", 0, -500)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                WHAT
              </motion.h2>
              <h2>WE</h2>
              <motion.h2
                className="service_title_text"
                variants={fadeIn("left", 0, -100)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                PROVIDE
              </motion.h2>
            </div>
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
            <div className="col-sm-12 col-md-8 d_flex items_center">
              <motion.div
                variants={fadeIn("up", 0.4, -100)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="main_title_text"
              >
                <p className="services_text">
                  Our broad network of carriers services gives our customers the
                  control to trim extra costs and save time. A one stop solution
                  provider for all your transportation and logistics needs under
                  one Roof.
                </p>
                <ul className="services_text services_list">
                  <li> Door to Door Pick-up and delivery services.</li>
                  <li> Secure and Effective Quality Service.</li>
                  <li> Customised Transportation Solution.</li>
                  <li> Prompt Customer Service Support.</li>
                  <li> Contractual and Competitive Rate.</li>
                  <li> Dedicated and Diligent Manpower.</li>
                  <li> Complete Reliability of services.</li>
                  <li> Prompt, Confidential Services at all Time.</li>
                  <li> Warehousing and Distributing services.</li>
                  <li> Delivering within 24 Hrs.</li>
                  <li> 1500 + Customers Satisfied.</li>
                  <li> Advanced GPS System Tracking.</li>
                  <li> Serves domestic and international customers.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row service_box_main">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 services_flex_box">
              <div className="service_box">
                <div className="services_bg_layer">
                  <h4>Black pepper Powder</h4>
                  <p>
                    Black pepper powder, made from ground peppercorns of the
                    Piper nigrum plant, is a versatile spice known for its warm,
                    spicy flavor with subtle floral notes. Originating in
                    ancient India, it enhances the taste of dishes worldwide,
                    from meats to salads. Beyond its culinary use, it may aid
                    digestion and nutrient absorption, making it a valued
                    kitchen staple.
                  </p>
                  <h6>
                    <Link href="/contact">Request Quote</Link>
                  </h6>
                </div>
              </div>
              <div className="service_box service_box_4">
                <div className="services_bg_layer">
                  <h4>Cloves</h4>
                  <p>
                    Cloves, the dried flower buds of the Syzygium aromaticum
                    tree, are prized for their warm, sweet, and peppery flavor.
                    Versatile in both savory and sweet dishes, they enhance
                    curries, teas, and more. Known for their aromatic depth,
                    cloves also offer potential digestive and antioxidant
                    benefits.
                  </p>
                  <h6>
                    <Link href="/contact">Request Quote</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 services_flex_box">
              <div className="service_box service_box_2">
                <div className="services_bg_layer">
                  <h4>Black pepper</h4>
                  <p>
                    Black pepper, with its bold heat and aroma, is a versatile
                    spice essential to cuisines worldwide. Derived from dried
                    peppercorns, it enhances meats, soups, and even desserts.
                    Once valued as black gold in ancient trade, it remains a
                    culinary and cultural icon.
                  </p>
                  <h6>
                    <Link href="/contact">Request Quote</Link>
                  </h6>
                </div>
              </div>
              <div className="service_box service_box_5">
                <div className="services_bg_layer">
                  <h4>Cinnamon</h4>
                  <p>
                    Cinnamon, derived from the inner bark of Cinnamomum trees,
                    is a beloved spice known for its warm flavor and aroma.
                    Cassia cinnamon offers bold intensity, while Ceylon
                    cinnamon, or true cinnamon, provides mild sweetness, perfect
                    for desserts and beverages.
                  </p>
                  <h6>
                    <Link href="/contact">Request Quote</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 services_flex_box">
              <div className="service_box service_box_3">
                <div className="services_bg_layer">
                  <h4>Cardamom</h4>
                  <p>
                    Cardamom, known as the Queen of Spices, is prized for its
                    citrusy, minty, and sweet flavor. Sourced from the seeds of
                    Zingiberaceae plants, it enriches global cuisines with its
                    unique aroma and taste.
                  </p>
                  <h6>
                    <Link href="/contact">Request Quote</Link>
                  </h6>
                </div>
              </div>
              <div className="service_box service_box_6">
                <div className="services_bg_layer">
                  <h4>Coriander Powder</h4>
                  <p>
                    Coriander powder, made from dried coriander seeds, offers a
                    warm, citrusy, and slightly sweet flavor. A staple in global
                    cuisines, it enriches curries, dals, stir-fries, marinades,
                    chutneys, and pickles with its versatile taste.
                  </p>
                  <h6>
                    <Link href="/contact">Request Quote</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
