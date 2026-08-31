"use client";

import React, { useRef } from "react";
import "./servicespage.css";
import Link from "next/link";
import grayImg from "../../assets/images/right-grey-1.svg";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import ProductCatalog from "./productCatalog";

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
  const yTransform = useParallax(scrollYProgress, direction);

  return (
    <div ref={ref}>
      <motion.div
        style={{
          position: "absolute",
          right: 0,
          translateY: yTransform,
          zIndex: -1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const TextWrapper = ({ children, className }) => {
  const isDesktop = useIsDesktop();
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [1, 0.7, 0],
    [0, 0, isDesktop ? -450 : 0]
  );

  return (
    <section ref={text}>
      <motion.p style={{ x }} className={className}>
        {children}
      </motion.p>
    </section>
  );
};

const productData = [
  {
    title: "Black Pepper Powder",
    description:
      "Finely ground from quality black peppercorns, black pepper powder delivers a bold aroma, distinctive heat, and rich flavor. Ideal for food manufacturers, seasoning blends, restaurants, and culinary applications.",
  },
  {
    title: "Black Pepper",
    description:
      "Whole black peppercorns are valued for their strong aroma, sharp flavor, and versatility. Carefully sourced from India, they are suitable for culinary use, spice processing, and international food businesses.",
  },
  {
    title: "Cardamom",
    description:
      "Known as the Queen of Spices, cardamom is prized for its distinctive sweet, aromatic, and refreshing character. It is widely used in beverages, confectionery, bakery products, desserts, and traditional cuisines.",
  },
  {
    title: "Cinnamon",
    description:
      "Cinnamon is valued for its warm aroma and sweet-spicy character. It is widely used in beverages, bakery products, confectionery, spice blends, and a variety of culinary applications.",
  },
  {
    title: "Cloves",
    description:
      "Cloves are aromatic dried flower buds known for their warm, rich, and slightly sweet-spicy flavor. They are widely used in spice blends, beverages, sauces, bakery products, and traditional cuisines.",
  },
  {
    title: "Coriander Powder",
    description:
      "Coriander powder is made from carefully selected coriander seeds and offers a warm, citrusy, and mildly sweet flavor. It is a versatile ingredient used in curries, marinades, sauces, spice blends, and food products.",
  },
];

const Services = () => {
  return (
    <main>
      <section className="services_section">
        <VerticalDownWrapper direction={500}>
          <div className="hero_design_1">
            <Image
              src={grayImg}
              alt=""
              width={280}
              height={280}
              priority
            />
          </div>
        </VerticalDownWrapper>
    
        <div className="container">
          {/* Hero */}
          <div className="row">
            <div className="services_hero">
              <motion.h2
                className="service_title_text"
                variants={fadeIn("right", 0, -500)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                OUR
              </motion.h2>

              <h2>PREMIUM</h2>

              <motion.h2
                className="service_title_text"
                variants={fadeIn("left", 0, -100)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                SPICES
              </motion.h2>
            </div>
          </div>

          {/* Introduction */}
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4">
              <div className="main_title">
                <TextWrapper className="main_title_subtext_1">
                  FROM
                </TextWrapper>

                <TextWrapper className="main_title_subtext_2">
                  INDIA
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
                  At <b>EROM International</b>, we bring the authentic taste
                  and aroma of India to global markets. Our spices are
                  carefully sourced from trusted Indian suppliers and selected
                  with a focus on quality, consistency, and authenticity.
                </p>

                <p className="services_text">
                  We work with international buyers and food businesses to
                  provide reliable access to premium Indian spices, supported
                  by professional export coordination and a commitment to
                  long-term partnerships.
                </p>

                <ul className="services_text services_list">
                  <li>Authentic Indian origin</li>
                  <li>Carefully selected spices</li>
                  <li>Consistent product quality</li>
                  <li>Reliable export coordination</li>
                  <li>Professional packaging and handling</li>
                  <li>Flexible supply for international buyers</li>
                  <li>Transparent business communication</li>
                  <li>Long-term global partnerships</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="container-fluid mt-5">
          <div className="row service_box_main">
            {productData.map((product, index) => (
              <div
                className="col-lg-4 col-md-4 col-sm-6 col-12 services_flex_box"
                key={index}
              >
                <div
                  className={`service_box service_box_${index + 1
                    }`}
                >
                  <div className="services_bg_layer">
                    <h4>{product.title}</h4>

                    <p>{product.description}</p>

                    <h6>
                      <Link href="/contact">Request Quote</Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
            <ProductCatalog />
      </section>
    </main>
  );
};

export default Services;