"use client";
import React, { useRef, useState } from "react";
import "./gallery.css";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";
import grayImg from "../../assets/images/right-grey-1.svg";
import ImageModal from "@/components/ImageModal";
import "keen-slider/keen-slider.min.css";
import c1 from "../../assets/images/flatbed-truck-guide.jpg";

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

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const onImageChange = (id) => {
    setSelectedImageIndex(id);
    setIsModalOpen(true);
  };

  const imgData = [c1, c1, c1, c1, c1, c1, c1, c1, c1, c1, c1, c1];
  return (
    <>
      <ImageModal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        images={imgData}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      <main>
        <section className="gallery_section">
          <VerticalDownWrapper direction={500}>
            <div className="hero_design_1">
              <Image src={grayImg} alt="" width={280} height={280} priority />
            </div>
          </VerticalDownWrapper>
          <div className="container">
            <div className="row">
              <div className="gallery_hero">
                <motion.h2
                  className="service_title_text"
                  variants={fadeIn("right", 0, -500)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  VIEW
                </motion.h2>
                <h2>OUR</h2>
                <motion.h2
                  className="service_title_text"
                  variants={fadeIn("left", 0, -100)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  GALLERY
                </motion.h2>
              </div>
            </div>
            <motion.div
              className="row mt-3"
              initial={{
                opacity: 0,
                scale: 0.3,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.7,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.4,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}
            >
              {imgData.map((url, i) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4"
                    key={i}
                    onClick={() => onImageChange(i)}
                  >
                    <div className="image_box">
                      <div className="gallery_image_overlay" />
                      <Image
                        src={url}
                        alt=""
                        width={500}
                        height={500}
                        className="gallery_image"
                        priority
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
