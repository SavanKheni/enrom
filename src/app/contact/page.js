"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import grayImg from "../../assets/images/right-grey-1.svg";
import "./contact.css";

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

const Gallery = () => {
  return (
    <main>
      <VerticalDownWrapper direction={500}>
        <div className="hero_design_1">
          <Image src={grayImg} alt="" width={280} height={280} priority />
        </div>
      </VerticalDownWrapper>
      <section className="contact_section">
        <div className="container">
          <div className="row">
            <div className="contact_hero">
              <motion.h2
                className="service_title_text"
                variants={fadeIn("right", 0, -500)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                HAVE
              </motion.h2>
              <h2>ANY</h2>
              <motion.h2
                className="service_title_text"
                variants={fadeIn("left", 0, -100)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                QUESTIONS?
              </motion.h2>
            </div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.4, -100)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="row mt-5 justify_center"
          >
            <div className="col-lg-8 col-md-12">
              <form className="contact_form">
                <input type="text" placeholder="Enter Name" required />
                <input placeholder="Enter Email" type="email" required />
                <input type="text" placeholder="Enter Mobile no" required />
                <input type="text" placeholder="Enter Company Name" required />
                <input type="text" placeholder="Enter Company Type" required />
                <input type="text" placeholder="Enter Website" required />
                <textarea rows={5} placeholder="Enter Message" />
                <button className="button-92" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7795418154797!2d72.87525077439327!3d21.24058898047102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4863f918a1%3A0x6703550502a89486!2sAbc-2%20Building!5e0!3m2!1sen!2sin!4v1699109420553!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
};

export default Gallery;
