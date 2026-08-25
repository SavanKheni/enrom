import React, { useRef } from "react";
import "./association.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import bifa from "../../assets/images/Bifa.png";
import oranger from "../../assets/images/Ellipse-black.png";
import { useTransform, motion, useScroll } from "framer-motion";

const VerticalDownWrapper = ({ children, direction }) => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 0.6], [-distance, distance]);
  }
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTransform = useParallax(scrollYProgress, direction);
  return (
    <div ref={ref}>
      <motion.div
        style={{
          zIndex: -1,
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

const Association = () => {
  const animation = { duration: 1000, easing: (t) => t };
  const [refs] = useKeenSlider({
    loop: true,
    mode: "free",
    drag: false,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 300px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 700px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 10 },
      },
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  return (
    <section className="association_section">
      <VerticalDownWrapper direction={500}>
        <div className="hero_design_1">
          <Image src={oranger} alt="" width={200} height={300} />
        </div>
      </VerticalDownWrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="association_title">
              <h3>ASSOCIATIONS</h3>
              <h4>
                JUST A SAMPLE OF THE MAJOR INTERNATIONAL COMPANIES WE ARE
                ASSOCIATED WITH.
              </h4>
            </div>
          </div>
        </div>
        <div ref={refs} className="keen-slider">
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
          <div className="keen-slider__slide">
            <Image
              draggable={false}
              src={bifa}
              alt=""
              width={122}
              height={57}
              className="association_image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Association;
