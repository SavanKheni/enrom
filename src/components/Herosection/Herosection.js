import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "./hero.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const Herosection = () => {
  return (
    <section className="hero_section">
      <div className="hero_grid_bg" aria-hidden="true" />

      <div className="container">
        <div className="row hero_row">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="col-lg-6 col-12">
            <motion.div variants={container} initial="hidden" animate="show">
              {/* Eyebrow */}
              <motion.div variants={item} className="hero_eyebrow">
                <span className="hero_eyebrow_dot" />
                INDIAN SPICE EXPORTERS &nbsp;·&nbsp; EST. 2011
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={item} className="hero_title">
                INDIA'S SPICES
                <br />
                <span>TO THE WORLD</span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={item} className="hero_text">
                Premium Indian spices sourced with care and exported
                worldwide. From authentic origin to global destinations,
                EROM International delivers quality, purity, and rich Indian
                flavour across borders.
              </motion.p>

              {/* CTA */}
              <motion.div variants={item} className="hero_cta_row">
                <Link href="/contact" className="hero_btn hero_btn_solid">
                  Get a Quote
                </Link>

                <Link href="/products" className="hero_btn hero_btn_ghost">
                  Explore Spices
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={item} className="hero_stats">
                <div className="hero_stat">
                  <span className="hero_stat_num">25+</span>

                  <span className="hero_stat_label">Spice Varieties</span>
                </div>

                <div className="hero_stat_divider" />

                <div className="hero_stat">
                  <span className="hero_stat_num">20+</span>

                  <span className="hero_stat_label">Countries</span>
                </div>

                <div className="hero_stat_divider" />

                <div className="hero_stat">
                  <span className="hero_stat_num">100%</span>

                  <span className="hero_stat_label">Quality Focus</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT ROUTE TRACKER
          ===================================================== */}

          <div className="col-lg-6 col-12">
            <motion.div
              className="hero_panel"
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
            >
              {/* Panel Header */}
              <div className="hero_panel_top">
                <span className="hero_panel_label">EXPORT / 09</span>

                <span className="hero_panel_status">
                  <span className="hero_status_dot" />
                  EXPORTING
                </span>
              </div>

              {/* Route */}
              <svg
                viewBox="0 0 480 260"
                className="hero_route_svg"
                aria-hidden="true"
              >
                {/* Background route */}
                <path
                  d="M40,210 C140,90 320,220 440,60"
                  fill="none"
                  stroke="#2a303a"
                  strokeWidth="2"
                />

                {/* Active route */}
                <motion.path
                  d="M40,210 C140,90 320,220 440,60"
                  fill="none"
                  stroke="#ff6a00"
                  strokeWidth="2.5"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 2.2,
                    delay: 0.9,
                    ease: "easeInOut",
                  }}
                />

                {/* Origin */}
                <circle cx="40" cy="210" r="5" fill="#fff" />

                <circle
                  cx="40"
                  cy="210"
                  r="9"
                  fill="none"
                  stroke="#fff"
                  strokeOpacity="0.15"
                />

                <text x="40" y="235" className="hero_route_label">
                  INDIA
                </text>

                {/* Destination */}
                <circle cx="440" cy="60" r="5" fill="#ff6a00" />

                <circle
                  cx="440"
                  cy="60"
                  r="9"
                  fill="none"
                  stroke="#ff6a00"
                  strokeOpacity="0.2"
                />

                <text x="360" y="42" className="hero_route_label">
                  GLOBAL
                </text>

                {/* Moving marker */}
                <motion.circle
                  r="6"
                  fill="#ff6a00"
                  initial={{
                    offsetDistance: "0%",
                  }}
                  animate={{
                    offsetDistance: "100%",
                  }}
                  transition={{
                    duration: 4,
                    delay: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    offsetPath:
                      "path('M40,210 C140,90 320,220 440,60')",
                    filter:
                      "drop-shadow(0 0 5px rgba(255,106,0,0.65))",
                  }}
                />
              </svg>

              {/* Manifest */}
              <motion.div
                className="hero_manifest"
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.6,
                }}
              >
                <div className="hero_manifest_row">
                  <span>PRODUCT</span>
                  <span>INDIAN SPICES</span>
                </div>

                <div className="hero_manifest_row">
                  <span>ORIGIN</span>
                  <span>INDIA</span>
                </div>

                <div className="hero_manifest_row">
                  <span>MARKET</span>
                  <span>WORLDWIDE</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;