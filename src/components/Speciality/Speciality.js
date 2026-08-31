import React, { useEffect, useRef } from "react";
import "./speciality.css";
import iconsvg from "../../assets/images/icon.svg";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";

const VerticalWrapper = ({ children, direction, className }) => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 0.4], [-distance, distance]);
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yTransform = useParallax(scrollYProgress, direction);

  return (
    <div ref={ref}>
      <motion.div
        className={className}
        style={{
          position: "absolute",
          zIndex: 100,
          translateY: yTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const TextWrapperRight = ({ children, className, font }) => {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const xRight = useTransform(
    scrollYProgress,
    [1, 0.6, 0],
    [0, 0, -1000]
  );

  return (
    <section ref={text}>
      <motion.h2
        style={{
          x: xRight,
          fontSize: font,
          transition: "0.5s",
        }}
        className={className}
      >
        {children}
      </motion.h2>
    </section>
  );
};

const TextWrapperLeft = ({ children, className, font }) => {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(
    scrollYProgress,
    [1, 0.6, 0],
    [0, 0, 1000]
  );

  return (
    <section ref={text}>
      <motion.h2
        style={{
          x: xLeft,
          fontSize: font,
          transition: "0.5s",
        }}
        className={className}
      >
        {children}
      </motion.h2>
    </section>
  );
};

const Speciality = () => {
  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop - window.innerHeight + 50;
      const tags = document.querySelectorAll(".tag");

      tags.forEach((tag) => {
        if (tag.getBoundingClientRect().top < pageBottom) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="tag speciality_section">
      <VerticalWrapper direction={500} className="iconsvg">
        <Image
          src={iconsvg}
          alt=""
          width={200}
          height={280}
        />
      </VerticalWrapper>

      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <div className="service_title">

              <TextWrapperRight className="service_title_text">
                OUR
              </TextWrapperRight>

              <TextWrapperRight className="service_title_text">
                EXPERTISE
              </TextWrapperRight>

              <h2
                style={{ fontSize: "130px" }}
                className="text_orange service_title_text"
              >
                IN INDIAN
              </h2>

              <TextWrapperLeft
                className="service_title_text"
                font="130px"
              >
                SPICES
              </TextWrapperLeft>

              <p>
                At <b>ENORM International</b>, our expertise lies in sourcing
                and exporting premium-quality Indian spices to markets across
                the world. We connect trusted Indian suppliers with
                international buyers, ensuring authentic products, consistent
                quality, and reliable supply.
              </p>

              <p>
                From carefully selected spices to professional handling and
                export-ready packaging, we focus on delivering the true taste
                and aroma of India to global markets. Our commitment to quality,
                transparency, and dependable service helps us build lasting
                relationships with customers and partners worldwide.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;