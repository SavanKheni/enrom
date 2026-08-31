import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import quote from "../../assets/images/left-quotes-sign.png";
import "./testimonial.css";
import "keen-slider/keen-slider.min.css";

const TextWrapper = () => {
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [1, 0.7, 0], [0, 0, 1000]);

  return (
    <section ref={text}>
      <motion.h1 style={{ x }} className="text_orange">
        TO <span>SAY</span>
      </motion.h1>
    </section>
  );
};

const testimonialData = [
  {
    clientName: "John",
    testimonialText:
      "Excellent service given by Renuka Logistics, they provide hassle-free & on-time delivery truck service with affordable price & safety, they are really an excellent service provider.",
  },
  {
    clientName: "Parth",
    testimonialText:
      "Excellent service given by Renuka Logistics, they provide hassle-free & on-time delivery truck service with affordable price & safety, they are really an excellent service provider.",
  },
  {
    clientName: "Savan",
    testimonialText:
      "Excellent service given by Renuka Logistics, they provide hassle-free & on-time delivery truck service with affordable price & safety, they are really an excellent service provider.",
  },
];
const Testimonial = () => {
  const [refs, slider] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 300px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 700px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
  });
  const onSliderStart = () => {
    if (slider) {
      slider?.current?.animator?.start([
        {
          distance: 0,
          duration: 5,
          easing: () => 5,
        },
      ]);
    }
  };
  const isEvenOrOdd = (number) => number % 2 === 0;
  return (
    <>
      <section className="testimonial">
        <div className="testimonial_layer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>WHAT OUR</h1>
                <h1>CLIENTS HAVE</h1>
                <TextWrapper />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container client_testimonial">
        <div ref={refs} className="keen-slider">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide"
              onMouseEnter={() => {
                if (slider) {
                  slider?.current?.animator?.stop();
                }
              }}
              onMouseLeave={() => onSliderStart()}
            >
              <div
                className={`client_testimonial_message ${
                  isEvenOrOdd(index) ? "mt-3" : ""
                }`}
              >
                <Image src={quote} alt="" className="client_quote" />
                <p>{testimonial.testimonialText}</p>
                <h4>{testimonial.clientName}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
