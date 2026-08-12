import React from "react";
import about from "../../assets/images/about.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import Image from "next/image";
import "./aboutsection.css";

const Aboutsection = () => {
  return (
    <section className="about_section pt-5 pb-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-12 col-md-4 d_flex items_center order-2">
            <Image src={about} alt=" " className="img-fluid about_img" />
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="main_title">
              <div className="main_title_subtext_1">Who We Are.</div>
              <div className="main_title_subtext_2">About Us.</div>
            </div>
            <div className="main_title_text mt-3">
              <p>
                <b>ENORM International</b> represents a dynamic and reliable
                export-import company dedicated to facilitating seamless global
                trade operations. The name embodies a sense of assurance and
                confidence in its ability to deliver exceptional services and
                solutions to clients worldwide. Enorm International specializes
                in streamlining import and export processes, providing
                comprehensive logistics solutions, and fostering fruitful
                business relationships across continents.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission_bg">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d_flex responsive_order_2">
              <div className="about_img">
                <Image src={p1} alt=" " className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d_flex items_center">
              <div className="about_box">
                <div>
                  <h1 className="about_text_new">Our Mission</h1>
                  <ul>
                    <li>World Connect Export-Import</li>
                    <li>Export-Import Alliance</li>
                    <li>Worldwide Exporters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d_flex items_center">
            <div className="about_box">
              <div className="about_text">
                <h1 className="about_text_new">Our Vision</h1>
                <ul>
                  <li>Sustainability, Security and Safety.</li>
                  <li>
                    Vision to be the leading and most solicited after service
                    provider.
                  </li>
                  <li>
                    Imbibe high organizational values and standards of industry
                    ethics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d_flex">
            <div className="about_img">
              <Image src={p2} alt=" " className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
