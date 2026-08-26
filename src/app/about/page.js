"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  useTransform,
  motion,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import grayImg from "../../assets/images/right-grey-1.svg";
import "./about.css";
import { useIsDesktop } from "@/hooks/useMediaQuery";

// Certificate images, now referenced in code instead of hardcoded in CSS.
// Swap paths as real distinct assets come in — your CSS only had cer-1.jpeg + cer.jpg.
import cert1Img from "../../assets/images/cer-1.jpeg";
import cert2Img from "../../assets/images/cer-2.jpeg";
import cert3Img from "../../assets/images/cer-3.jpeg";
import cert4Img from "../../assets/images/cer-4.jpeg";
import cert5Img from "../../assets/images/cer-5.jpeg";

/* ---------------------------------------------------------
   Shared animation helpers (unchanged)
--------------------------------------------------------- */

const fadeIn = (direction, delay, translate) => ({
  hidden: {
    y: direction === "up" ? 80 : direction === "down" ? translate : 0,
    x: direction === "left" ? 300 : direction === "right" ? translate : 0,
    transition: {
      type: "tween",
      duration: 1.5,
      delay,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
  show: {
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      duration: 1.4,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

const BackgroundMotif = ({ distance = 500 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 0.3], [-distance, distance]);

  return (
    <div ref={ref}>
      <motion.div
        style={{ position: "absolute", right: 0, translateY: y, zIndex: -1 }}
      >
        <Image src={grayImg} alt="" width={280} height={280} priority />
      </motion.div>
    </div>
  );
};

const ScrollTextLeft = ({ children, className }) => {
  const isDesktop = useIsDesktop();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [1, 0.6, 0],
    [0, 0, isDesktop ? -1000 : 0],
  );

  return (
    <section ref={ref}>
      <motion.h1 style={{ x }} className={className}>
        {children}
      </motion.h1>
    </section>
  );
};

const ScrollTextRight = ({ children, className, as = "p" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [1, 0.3, 0], [0, 0, 1000]);
  const MotionTag = motion[as];

  return (
    <section ref={ref}>
      <MotionTag style={{ x }} className={className}>
        {children}
      </MotionTag>
    </section>
  );
};

/* ---------------------------------------------------------
   Content (unchanged)
--------------------------------------------------------- */
const ABOUT_PARAGRAPHS_TOP = [
  {
    lead: "Connecting the authentic taste of India with the world.",
    body: "EROM International is an India-based export company specializing in the sourcing and export of premium-quality Indian spices. We connect trusted Indian suppliers with international buyers, bringing the rich flavors, aromas, and heritage of Indian spices to global markets.",
  },
  {
    body: "Our approach is built around quality, reliability, and long-term relationships. From carefully selecting our products to coordinating export-ready packaging and international shipments, we focus on maintaining consistency and delivering a dependable experience to every customer.",
  },
];

const ABOUT_PARAGRAPHS_BOTTOM = [
  "India is known around the world for its rich variety of spices, and EROM International is committed to taking that heritage beyond borders. We work with trusted sourcing partners to offer authentic spices that meet the expectations of international food businesses and buyers.",
  "Our dedicated team manages every stage of the export process with attention to detail, from sourcing and product selection to documentation, packaging, and shipment coordination. This allows us to create a smooth and reliable experience for our global customers.",
];

const SERVICE_LOCATIONS =
  "global markets across Asia, the Middle East, Europe, Africa, and beyond";

const ABOUT_CLOSING_TEXT =
  "with a focus on dependable sourcing, consistent quality, and professional international trade. Our goal is to build lasting partnerships by delivering authentic Indian spices with reliability and care.";
const CERTIFICATES = [
  {
    id: "cert-1",
    title: "ISO CERTIFICATION",
    description:
      "Enorm International holds active ISO certification, reflecting our commitment to consistent quality and process standards across every shipment we manage.",
    image: cert1Img,
  },
  {
    id: "cert-2",
    title: "IATA AFFILIATION",
    description:
      "Our air freight operations are supported by IATA-affiliated partners, ensuring compliance and reliability across international air cargo movements.",
    image: cert2Img,
  },
  {
    id: "cert-3",
    title: "CUSTOMS COMPLIANCE",
    description:
      "We maintain full customs compliance documentation across all import/export operations, minimising delays at every port of entry.",
    image: cert3Img,
  },
  {
    id: "cert-4",
    title: "GST REGISTRATION",
    description:
      "Fully GST-registered and compliant, ensuring transparent, audit-ready invoicing for every client engagement.",
    image: cert4Img,
  },
  {
    id: "cert-5",
    title: "MSME REGISTERED",
    description:
      "Registered under MSME, supporting our role as a trusted logistics partner to businesses of every scale across India.",
    image: cert5Img,
  },
];

/* ---------------------------------------------------------
   Certificate card — SAME markup/classes as your original.
   Only change: background-image now set inline from JS data
   instead of hardcoded in CSS, plus an onClick to open the lightbox.
--------------------------------------------------------- */

const CertificateCard = ({ cert, variant, onOpen, index }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
    <div
      className={`about_us_box${variant ? ` about_us_box_${variant}` : ""}`}
      style={{ backgroundImage: `url(${cert.image.src})`, cursor: "pointer" }}
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(index);
      }}
    >
      <div className="about_us_bg_layer">
        <h4>{cert.title}</h4>
        <p>{cert.description}</p>
      </div>
    </div>
  </div>
);

/* ---------------------------------------------------------
   Lightbox / slideshow — new addition only, doesn't touch
   the existing box design at all
--------------------------------------------------------- */

const CertificateLightbox = ({ items, activeIndex, onClose, onChange }) => {
  const goPrev = useCallback(
    () => onChange((activeIndex - 1 + items.length) % items.length),
    [activeIndex, items.length, onChange],
  );
  const goNext = useCallback(
    () => onChange((activeIndex + 1) % items.length),
    [activeIndex, items.length, onChange],
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext, onClose]);

  if (activeIndex === null) return null;
  const active = items[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="cert_lightbox_backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          className="cert_lightbox_close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <button
          type="button"
          className="cert_lightbox_nav cert_lightbox_prev"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous certificate"
        >
          ‹
        </button>

        <motion.div
          className="cert_lightbox_stage"
          onClick={(e) => e.stopPropagation()}
          key={active.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
        >
          <div className="cert_lightbox_image_wrap">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="90vw"
              className="cert_lightbox_img"
              priority
            />
          </div>
          <div className="cert_lightbox_caption">
            <h4>{active.title}</h4>
            <p>{active.description}</p>
            <span className="cert_lightbox_count">
              {activeIndex + 1} / {items.length}
            </span>
          </div>
        </motion.div>

        <button
          type="button"
          className="cert_lightbox_nav cert_lightbox_next"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next certificate"
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

/* ---------------------------------------------------------
   About (unchanged, aside from lightbox state + render)
--------------------------------------------------------- */

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>
      <section className="about_us_section">
        <div className="hero_design_1">
          <BackgroundMotif distance={500} />
        </div>

        <div className="container">
          <div className="about_hero">
            <motion.h2
              className="service_title_text"
              variants={fadeIn("right", 0, -500)}
              initial="hidden"
              animate="show"
            >
              HAVE
            </motion.h2>
            <h2 className="service_title_text">TO KNOW</h2>
            <motion.h2
              className="service_title_text"
              variants={fadeIn("left", 0, -100)}
              initial="hidden"
              animate="show"
            >
              ABOUT US
            </motion.h2>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-4">
              <div className="main_title">
                <ScrollTextLeft className="main_title_subtext_1">
                  WELCOME TO
                </ScrollTextLeft>
                <ScrollTextLeft className="main_title_subtext_2">
                  ENORM
                </ScrollTextLeft>
              </div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.4, -100)}
              initial="hidden"
              animate="show"
              className="col-sm-12 col-md-8 d_flex items_center"
            >
              <div className="main_title_text">
                {ABOUT_PARAGRAPHS_TOP.map((p, i) => (
                  <p className="about_us_text" key={i}>
                    {p.lead && <b>{p.lead}</b>} {p.body}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-8 d_flex items_center flex_order">
              <div className="main_title_text">
                {ABOUT_PARAGRAPHS_BOTTOM.map((text, i) => (
                  <p className="about_us_text" key={i}>
                    {text}
                  </p>
                ))}
                <p className="about_us_text">
                  Our services are provided all over{" "}
                  <b className="text_orange">{SERVICE_LOCATIONS}</b>{" "}
                  {ABOUT_CLOSING_TEXT}
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="main_title">
                <ScrollTextRight className="main_title_subtext_1">
                  WHY
                </ScrollTextRight>
                <ScrollTextRight className="main_title_subtext_2">
                  CHOOSE US
                </ScrollTextRight>
              </div>
            </div>
          </div>
        </div>

        <div className="margin_top certificate_header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="about_us_title">
                  <h1>CHECK</h1>
                  <h1>OUR</h1>
                  <h1>
                    <ScrollTextRight as="span" className="text_orange">
                      CERTIFICATE
                    </ScrollTextRight>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid margin_m_top">
          <div className="row about_us_box_main">
            {CERTIFICATES.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                index={i}
                variant={i === 0 ? null : i + 1}
                onOpen={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </section>

      <CertificateLightbox
        items={CERTIFICATES}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </main>
  );
};

export default About;
