"use client";
import React, { useMemo, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./index.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import ModeSwitch from "@/app/ModeSwitch";
import { useScroll } from "@/hooks/useScrollHook";
import { useTheme } from "../ThemeLayout";

const Hamburger = ({ open, dark, onClick }) => (
  <button
    className={`hamburger_btn${dark ? " hamburger_dark" : ""}${open ? " hamburger_open" : ""
      }`}
    onClick={onClick}
    aria-label="Open menu"
  >
    <span className="hamburger_line hamburger_top" />
    <span className="hamburger_line hamburger_mid" />
    <span className="hamburger_line hamburger_bottom" />
  </button>
);

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrollPosition = useScroll();
  const { isDarkMode } = useTheme();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isScrolled = useMemo(() => scrollPosition > 100, [scrollPosition]);

  const getLinkClass = (path) =>
    `nav_link font_14 font_700${pathname === path ? " active_link" : ""}${pathname === "/" && !isScrolled && pathname !== path ? " link_white" : ""
    }`;

  const renderNavLink = (path, label) => {
    const isActive = pathname === path;
    return (
      <Link href={path} className={getLinkClass(path)}>
        <span className="nav_link_label">{label}</span>
        {isActive && (
          <motion.span
            layoutId="nav_pill"
            className="nav_pill"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        )}
      </Link>
    );
  };

  return (
    <>
      <div className={`main_header${isScrolled ? " scroll_header" : ""}`}>
        <div className="container-fluid">
          <div
            className="inner_header d_flex gap_2 justify_between items_center"
            style={{ position: "relative" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <Image
                src={logo}
                width={isScrolled ? 90 : 110}
                priority
                className="logo-light"
                alt="Enorm International logo"
                onClick={() => router.push("/")}
                style={{ transition: "width 0.35s ease", cursor: "pointer" }}
              />
            </motion.div>

            <div className="d_flex gap_1 navigation_bar">
              {renderNavLink("/", "HOME")}
              {renderNavLink("/about", "ABOUT")}
              {renderNavLink("/services", "PRODUCTS")}
              {renderNavLink("/clientele", "CLIENTELE")}
              {/* {renderNavLink("/gallery", "GALLERY")} */}
              {renderNavLink("/contact", "CONTACT")}
              <ModeSwitch />
            </div>

            <Hamburger
              open={show}
              dark={!isDarkMode && (isScrolled || pathname !== "/")}
              onClick={handleShow}
            />
          </div>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="humMenu"
        placement="end"
      >
        <div className="main-drawer">
          <div className="main-drawer-header">
            <div onClick={handleClose} className="close">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none">
                <path
                  d="M21.6722 0.548425C21.0215 -0.102211 19.967 -0.102211 19.3167 0.548425L11.4649 8.40018L3.61319 0.548425C2.96255 -0.102211 1.908 -0.102211 1.25771 0.548425C0.607077 1.19906 0.607077 2.25361 1.25771 2.9039L9.10947 10.7557L1.25771 18.6074C0.607077 19.2581 0.607077 20.3126 1.25771 20.9629C1.90835 21.6135 2.9629 21.6131 3.61319 20.9629L11.4649 13.1111L19.3167 20.9629C19.9673 21.6131 21.0219 21.6131 21.6722 20.9629C22.3228 20.3123 22.3228 19.2577 21.6722 18.6074L13.8204 10.7557L21.6722 2.9039C22.3228 2.25327 22.3228 1.19871 21.6722 0.548425Z"
                  fill=""
                />
              </svg>
            </div>
          </div>
          <div className="main-drawer-menus">
            {[
              ["/", "HOME"],
              ["/about/", "ABOUT"],
              ["/services/", "PRODUCTS"],
              ["/clientele/", "CLIENTELE"],
              // ["/gallery/", "GALLERY"],
              ["/contact/", "CONTACT"],
            ].map(([path, label], i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, x: 24 }}
                animate={show ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <Link
                  href={path}
                  onClick={handleClose}
                  className={`${pathname === path.replace(/\/$/, "") || pathname === path
                      ? "active_link"
                      : ""
                    } font_14 font_700`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <ModeSwitch />
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default Header;
