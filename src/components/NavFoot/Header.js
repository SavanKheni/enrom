"use client";
import React, { useMemo, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./index.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import menuDark from "../../assets/images/menu.svg";
import menuLight from "../../assets/images/menu-light.png";
import ModeSwitch from "@/app/ModeSwitch";
import { useScroll } from "@/hooks/useScrollHook";
import { useTheme } from "../ThemeLayout";

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
    `font_14 font_700${pathname === path ? " active_link" : ""}${
      pathname === "/" && !isScrolled && pathname !== path ? " link_white" : ""
    }  `;

  const renderNavLink = (path, label) => (
    <Link href={path} className={getLinkClass(path)}>
      {label}
    </Link>
  );

  return (
    <>
      <section>
        <div
          className={`main_header ${isScrolled ? "scroll_header" : ""}  ${
            isDarkMode && isScrolled ? "main_header_dark" : ""
          }`}
        >
          <div className="container">
            <div
              className="inner_header d_flex gap_2 justify_between items_center"
              style={{ position: "relative" }}
            >
              <Image
                src={logo}
                width={230}
                priority
                className="logo-light"
                alt=""
                onClick={() => router.push("/")}
              />
              <div className="d_flex gap_2 navigation_bar">
                {renderNavLink("/", "HOME")}
                {renderNavLink("/about", "ABOUT")}
                {renderNavLink("/services", "PRODUCTS")}
                {renderNavLink("/clientele", "CLIENTELE")}
                {renderNavLink("/gallery", "GALLERY")}
                {renderNavLink("/contact", "CONTACT")}
                <ModeSwitch />
              </div>

              <div className="menu" onClick={handleShow}>
                <Image src={menuLight} alt="menu" height={30} width={30} />
              </div>

              {(isScrolled || pathname !== "/") && !isDarkMode && (
                <div className="menu-dark" onClick={handleShow}>
                  <Image src={menuDark} alt="menu" height={30} width={30} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="humMenu"
        placement="end"
      >
        <div className="main-drawer">
          <div className="main-drawer-header">
            <div onClick={handleClose} className="close">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6722 0.548425C21.0215 -0.102211 19.967 -0.102211 19.3167 0.548425L11.4649 8.40018L3.61319 0.548425C2.96255 -0.102211 1.908 -0.102211 1.25771 0.548425C0.607077 1.19906 0.607077 2.25361 1.25771 2.9039L9.10947 10.7557L1.25771 18.6074C0.607077 19.2581 0.607077 20.3126 1.25771 20.9629C1.90835 21.6135 2.9629 21.6131 3.61319 20.9629L11.4649 13.1111L19.3167 20.9629C19.9673 21.6131 21.0219 21.6131 21.6722 20.9629C22.3228 20.3123 22.3228 19.2577 21.6722 18.6074L13.8204 10.7557L21.6722 2.9039C22.3228 2.25327 22.3228 1.19871 21.6722 0.548425Z"
                  fill=""
                />
              </svg>
            </div>
          </div>
          <div className="main-drawer-menus">
            <Link
              href="/"
              onClick={handleClose}
              className={`${
                pathname === "/" ? "active_link" : ""
              } font_14 font_700`}
            >
              HOME
            </Link>
            <Link
              href="/about/"
              onClick={handleClose}
              className={`${
                pathname === "/about" ? "active_link" : ""
              } font_14 font_700`}
            >
              ABOUT
            </Link>
            <Link
              href="/services/"
              onClick={handleClose}
              className={`${
                pathname === "/services" ? "active_link" : ""
              } font_14 font_700`}
            >
              PRODUCTS
            </Link>
            <Link
              href="/clientele/"
              onClick={handleClose}
              className={`${
                pathname === "/clientele" ? "active_link" : ""
              } font_14 font_700`}
            >
              CLIENTELE
            </Link>
            <Link
              href="/gallery/"
              onClick={handleClose}
              className={`${
                pathname === "/gallery" ? "active_link" : ""
              } font_14 font_700`}
            >
              GALLERY
            </Link>
            <Link
              href="/contact/"
              onClick={handleClose}
              className={`${
                pathname === "/contact" ? "active_link" : ""
              } font_14 font_700`}
            >
              CONTACT
            </Link>
            <ModeSwitch />
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default Header;
