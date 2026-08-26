import React, { useRef } from "react";
import "./services.css";
import { motion, useScroll, useTransform } from "framer-motion";

const TextWrapperRight = ({ children, className, font }) => {
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });
  const xRight = useTransform(scrollYProgress, [1, 0.6, 0], [0, 0, -1000]);

  return (
    <section ref={text}>
      <motion.h1
        style={{ x: xRight, fontSize: font, transition: "0.5s" }}
        className={className}
      >
        {children}
      </motion.h1>
    </section>
  );
};
const TextWrapperLeft = ({ children, className, font }) => {
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [1, 0.6, 0], [0, 0, 1000]);
  return (
    <section ref={text}>
      <motion.h1
        style={{ x: xLeft, fontSize: font, transition: "0.5s" }}
        className={className}
      >
        {children}
      </motion.h1>
    </section>
  );
};

const serviceData = [
  {
    title: "Black pepper Powder",
    description:
      "Black pepper powder, made from ground peppercorns of the Piper nigrum plant, is a versatile spice known for its warm, spicy flavor with subtle floral notes. Originating in ancient India, it enhances the taste of dishes worldwide, from meats to salads. Beyond its culinary use, it may aid digestion and nutrient absorption, making it a valued kitchen staple.",
  },
  {
    title: "Black pepper",
    description:
      "Black pepper, with its bold heat and aroma, is a versatile spice essential to cuisines worldwide. Derived from dried peppercorns, it enhances meats, soups, and even desserts. Once valued as black gold in ancient trade, it remains a culinary and cultural icon.",
  },
  {
    title: "Cardamom",
    description:
      "Cardamom, known as the Queen of Spices, is prized for its citrusy, minty, and sweet flavor. Sourced from the seeds of Zingiberaceae plants, it enriches global cuisines with its unique aroma and taste.",
  },
  {
    title: "Cinnamon",
    description:
      "Cinnamon, derived from the inner bark of Cinnamomum trees, is a beloved spice known for its warm flavor and aroma. Cassia cinnamon offers bold intensity, while Ceylon cinnamon, or true cinnamon, provides mild sweetness, perfect for desserts and beverages.",
  },
];

const Services = () => {
  return (
    <section className="service_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service_title">
              <TextWrapperRight className="service_title_text">
                OUR
              </TextWrapperRight>

              <TextWrapperRight className="service_title_text">
                PREMIUM
              </TextWrapperRight>

              <h1
                style={{ fontSize: "130px" }}
                className="text_orange service_title_text"
              >
                SPICES
              </h1>

              <TextWrapperLeft
                className="service_title_text"
                font="130px"
              >
                FROM INDIA
              </TextWrapperLeft>

              <p>
                Discover the authentic taste and aroma of Indian spices.
                EROM International sources and exports quality spices from
                India, connecting trusted suppliers with food businesses and
                buyers across global markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row service_box_main">
          {serviceData.map((service, i) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12"
              key={i}
            >
              <div className={`service_box service_box_${i + 1}`}>
                <div className="services_bg_layer">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;