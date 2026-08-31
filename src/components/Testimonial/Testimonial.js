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
      <motion.h2 style={{ x }} className="text_orange">
        TO <span>SAY</span>
      </motion.h2>
    </section>
  );
};

const testimonialData = [
  {
    clientName: "Michael Turner",
    testimonialText:
      "We've been importing spices from Enorm International for over two years now. Every shipment arrives exactly as specified — consistent quality, proper documentation, and on-time export coordination. It's rare to find a supplier this reliable.",
  },
  {
    clientName: "Ahmed Al-Farsi",
    testimonialText:
      "Enorm International has become our go-to partner for premium Indian spices. Their black pepper and cardamom are consistently top grade, and their team is always responsive when we need custom packaging or urgent orders.",
  },
  {
    clientName: "Elena Rossi",
    testimonialText:
      "What stands out about Enorm is the transparency. From sourcing to shipment, they keep us updated at every step. The quality of their turmeric and coriander powder has helped us maintain our own product standards without any issues.",
  },
  {
    clientName: "David Chen",
    testimonialText:
      "Professional, prompt, and precise. We switched to Enorm International for our spice imports after struggling with inconsistent suppliers, and it's been a smooth partnership ever since — great communication and solid product quality.",
  },
  {
    clientName: "Priya Nair",
    testimonialText:
      "Enorm International's export coordination is excellent. Packaging is always handled with care, and their flexibility with order volumes has made them an easy partner to scale our business with.",
  },
  {
    clientName: "Carlos Mendes",
    testimonialText:
      "We source pulses and whole spices from Enorm for our distribution business, and the consistency in quality batch after batch is what keeps us coming back. Genuinely one of the more trustworthy exporters we work with.",
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
                <h2>WHAT OUR</h2>
                <h2>CLIENTS HAVE</h2>
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
