import React from "react";
import about from "../../assets/images/about.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import Image from "next/image";
import "./aboutsection.css";

const Aboutsection = () => {
  return (
    <section className="about_section pt-5 pb-5">
      {/* About Us */}
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-12 col-md-4 d_flex items_center order-2">
            <Image
              src={about}
              alt="ENORM International - Indian Spice Exporter"
              className="img-fluid about_img"
            />
          </div>

          <div className="col-sm-12 col-md-8">
            <div className="main_title">
              <div className="main_title_subtext_1">Who We Are.</div>
              <div className="main_title_subtext_2">About Us.</div>
            </div>

            <div className="main_title_text mt-3">
              <p>
                <b>ENORM International</b> is an India-based export company
                specializing in premium-quality Indian spices. We bring the
                authentic taste, aroma, and richness of India to customers and
                businesses across international markets.
              </p>

              <p>
                We carefully source our spices from trusted suppliers and focus
                on quality, purity, proper handling, and reliable delivery.
                With a commitment to transparency and long-term relationships,
                we aim to make every shipment a reflection of India&apos;s rich
                spice heritage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mission_bg">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d_flex responsive_order_2">
              <div className="about_img">
                <Image
                  src={p1}
                  alt="ENORM International Indian spices"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 d_flex items_center">
              <div className="about_box">
                <div>
                  <h2 className="about_text_new">Our Mission</h2>

                  <ul>
                    <li>
                      Deliver authentic, high-quality Indian spices to
                      customers worldwide.
                    </li>

                    <li>
                      Maintain consistent standards of quality, purity, and
                      freshness.
                    </li>

                    <li>
                      Build dependable and lasting relationships with
                      international buyers.
                    </li>

                    <li>
                      Create a seamless and reliable experience in every
                      international shipment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d_flex items_center">
            <div className="about_box">
              <div className="about_text">
                <h2 className="about_text_new">Our Vision</h2>

                <ul>
                  <li>
                    To become a trusted global name in Indian spice exports.
                  </li>

                  <li>
                    To introduce the authentic flavors of India to more
                    markets around the world.
                  </li>

                  <li>
                    To build a strong international network based on trust,
                    quality, and reliability.
                  </li>

                  <li>
                    To represent India&apos;s rich spice heritage on the global
                    stage.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 d_flex">
            <div className="about_img">
              <Image
                src={p2}
                alt="Premium Indian spices for export"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;