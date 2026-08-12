"use client";
import React from "react";
import logo from "../../assets/images/logo-light.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 footer_first_section">
              <Image
                src={logo}
                alt=""
                className="footer_logo"
                onClick={() => router.push("/")}
              />
              <p>
                Consistently reliable in an ever-changing world. Our dedicated
                team of industry professionals and our constant investment in
                disruptive technology ensures that your deliveries arrive on
                time, every time.
              </p>
              {/* <div className="d_flex gap_1">
                <div className="footer_icon"></div>
                <div className="footer_icon"></div>
                <div className="footer_icon"></div>
                <div className="footer_icon"></div>
              </div> */}
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <h2 className="footer_header">CONTACT</h2>
              <div className="footer_all_links">
                <p>Phone: +91(253) 3266888</p>
                <p> Mobile: +91 9372433888</p>
                <p>Email: info@renukalogistics.com</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <h2 className="footer_header">USEFUL LINKS</h2>
              <div className="footer_all_links">
                <p>Home</p>
                <p> About Us</p>
                <p>Our Services</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <h2 className="footer_header">ADDRESS</h2>
              <div className="footer_all_links">
                <p>
                  Address: Plot No 21/1A, MIDC Satpur Opp. SI Ground, Near to
                  Anand I Power Company Nashik-422007
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom_footer">
        <div className="container">
          <p>Copyright © 2025 savan kheni rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
