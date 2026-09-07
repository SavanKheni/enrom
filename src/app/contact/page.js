"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import emailjs from "@emailjs/browser";

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

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const xTransform = useParallax(scrollYProgress, direction);

  return (
    <div ref={ref}>
      <motion.div
        style={{
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

const Gallery = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_7diwgt4",
        "template_j1fep29",
        formRef.current,
        {
          publicKey: "f2uD0SdCJqs2B4N7B",
        },
      );

      setStatus("success");

      // Clear form
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* =========================
          DECORATIVE IMAGE
      ========================== */}

      <VerticalDownWrapper direction={500}>
        <div className="hero_design_1">
          <Image src={grayImg} alt="" width={280} height={280} priority />
        </div>
      </VerticalDownWrapper>

      {/* =========================
          CONTACT SECTION
      ========================== */}

      <section className="contact_section">
        <div className="container">
          <div className="row">
            <div className="contact_hero">
              <motion.h1
                className="service_title_text"
                variants={fadeIn("right", 0, -500)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                HAVE
              </motion.h1>

              <h1>ANY</h1>

              <motion.h1
                className="service_title_text"
                variants={fadeIn("left", 0, -100)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                QUESTIONS?
              </motion.h1>
            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}

          <motion.div
            variants={fadeIn("up", 0.4, -100)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="row mt-5 justify_center"
          >
            <div className="col-lg-8 col-md-12">
              <form
                ref={formRef}
                className="contact_form"
                onSubmit={handleSubmit}
              >
                {/* Name */}

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                />

                {/* Email */}

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />

                {/* Mobile */}

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Mobile no"
                  required
                />

                {/* Company */}

                <input
                  type="text"
                  name="company_name"
                  placeholder="Enter Company Name"
                  required
                />

                {/* Company Type */}

                <input
                  type="text"
                  name="company_type"
                  placeholder="Enter Company Type"
                  required
                />

                {/* Website */}

                <input type="url" name="website" placeholder="Enter Website" />

                {/* Message */}

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Enter Message"
                  required
                />

                {/* Submit */}

                <button className="button-92" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>

                {/* Success */}

                {status === "success" && (
                  <p className="form_success">
                    ✓ Thank you! Your message has been sent successfully.
                  </p>
                )}

                {/* Error */}

                {status === "error" && (
                  <p className="form_error">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          GOOGLE MAP
      ========================== */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d220.94527840630198!2d72.81423076150209!3d21.2261125974791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzM0LjMiTiA3MsKwNDgnNTEuMyJF!5e1!3m2!1sen!2sin!4v1788769262069!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      />
    </main>
  );
};

export default Gallery;
