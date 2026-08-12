import React, { useEffect, useRef } from "react";
import "./speciality.css";
import iconsvg from "../../assets/images/icon.svg";
import redr from "../../assets/images/speciality-oramge.svg";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import p3 from "../../assets/images/p3.png";

const VerticalWrapper = ({ children, direction, className }) => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 0.4], [-distance, distance]);
  }
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTransform = useParallax(scrollYProgress, direction);
  return (
    <div ref={ref}>
      <motion.div
        className={className}
        style={{
          position: "absolute",
          zIndex: 100,
          translateY: xTransform,
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
const Speciality = () => {
  useEffect(() => {
    const handleScroll = () => {
      var pageTop = window.scrollY;
      var pageBottom = pageTop - window.innerHeight + 50;
      var tags = document.querySelectorAll(".tag");

      tags.forEach((tag) => {
        if (tag.getBoundingClientRect().top < pageBottom) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    // Attach the scroll event listener when the component mounts
    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="tag speciality_section">
      <VerticalWrapper direction={500} className="iconsvg">
        <Image src={iconsvg} alt="" width={200} height={280} />
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
              <h1
                style={{ fontSize: "130px" }}
                className="text_orange service_title_text"
              >
                IN THIS
              </h1>
              <TextWrapperLeft
                className="service_title_text"
                font="130px"
                xLeft={true}
              >
                FIELD
              </TextWrapperLeft>
              <p>
                Enorm International specializes in streamlining import and
                export processes, providing comprehensive logistics solutions,
                and fostering fruitful business relationships across continents.
                Whether {"it’s"} sourcing products from diverse markets or
                expanding market reach for clients, Enorm International stands
                as a trusted ally in navigating the complexities of
                international trade.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div
            className="col-md-6 col-sm-0 d-flex"
            style={{ alignItems: "center" }}
          >
            <div className="about_img">
              <Image src={p3} alt=" " className="img-fluid" />
            </div>
          </div>
          <div
            className="col-md-6 col-sm-12 d-flex"
            style={{ alignItems: "center" }}
          >
            <div className="speciality_box">
              <h4>
                Without any interruption full truckload, LVC, and heavy vehicle
                load all over India.
              </h4>
              <ul>
                <li>
                  {" "}
                  Nashik - Pune, Ankleshwar, Vadodara, Mumbai, Bhiwandi, JNPT.
                </li>
                <li>
                  {" "}
                  Sinner - Pune, Nashik, Ankleshwar, Vadodara, Bhiwandi, Mumbai,
                  JNPT.
                </li>
                <li>
                  {" "}
                  Pune - Sinner, Nashik, Ankleshwar,Vadodara, Bhiwandi, Mumbai,
                  JNPT.
                </li>
                <li>
                  {" "}
                  Bhosari - Bhiwandi, Ankleshwar, Nashik, Sinner, Pune, Mumbai,
                  JNPT.
                </li>
                <li>
                  {" "}
                  Vadodara - Ankleshwar, Nashik, Sinner, Pune,Mumbai, JNPT.
                </li>
                <li>
                  {" "}
                  Bhiwandi - Nashik, Sinner, Ankleshwar, Vadodara, Pune, JNPT.
                </li>
                <li>
                  {" "}
                  JNPT - Ankleshwar, Bhiwandi, Nashik, Sinner, Pune, Mumbai,
                  JNPT.
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Speciality;
