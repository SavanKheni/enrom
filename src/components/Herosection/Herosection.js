import React from "react";
import truck from "../../assets/images/hero-truck.png";
import "./hero.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// const VerticalDownWrapper = ({ children, direction }) => {
//   function useParallax(value, distance) {
//     return useTransform(value, [0, 0.5], [-distance, distance]);
//   }
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const xTransform = useParallax(scrollYProgress, direction);
//   return (
//     <div ref={ref}>
//       <motion.div
//         style={{
//           zIndex: 60,
//           position: "absolute",
//           right: 0,
//           translateY: xTransform,
//         }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// const VerticalUpperWrapper = ({ children, direction }) => {
//   function useParallax(value, distance) {
//     return useTransform(value, [0, 1], [distance, -distance]);
//   }
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const xTransform = useParallax(scrollYProgress, direction);
//   return (
//     <div ref={ref}>
//       <motion.div
//         style={{
//           zIndex: 50,
//           position: "absolute",
//           right: 0,
//           translateY: xTransform,
//         }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

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
const Herosection = () => {
  return (
    <div style={{ position: "relative" }}>
      <section className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="hero_title">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WE MOVE ANYTHING <br />
                <span>ANYWHERE</span>
              </h1>
              <h1 className="hero_title_responsive">
                WE MOVE ANYTHING <br />
                <span>ANYWHERE</span>
              </h1>
            </div>
            <div className="col-lg-4 col-md-6 col-12 responsive_hide">
              <h4 className="hero_subtitle">We Respect Your Trust</h4>
              <p className="hero_text">
                Imaget is a long established fact that a reader will be
                distracted by the readable content of a page when looking
              </p>
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="hero_back"></div>
              <Image src={truck} alt=" " className="img-fluid hero_truck" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
