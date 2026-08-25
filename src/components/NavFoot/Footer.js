"use client";
import React, { useState } from "react";
import logo from "../../assets/images/logo-light.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Footer.css";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to your newsletter provider / EmailJS, same pattern as the contact form
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="site_footer">
      {/* Diagonal CTA band */}
      <div className="footer_cta">
        <div className="footer_cta_inner container">
          <div className="footer_cta_text">
            <span className="footer_cta_eyebrow">GET IN TOUCH</span>
            <h2>
              Let&apos;s move your business <br className="d-none d-md-block" />
              forward — anywhere.
            </h2>
          </div>
          <Link href="/contact" className="footer_cta_btn">
            Start a conversation
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="footer_grid_bg" aria-hidden="true" />

      {/* Main columns */}
      <div className="container footer_main_grid">
        <div className="footer_brand_col">
          <Image
            src={logo}
            alt="Enorm International"
            className="footer_logo"
            onClick={() => router.push("/")}
          />
          <p>
            Consistently reliable in an ever-changing world. Our dedicated team
            of industry professionals and our constant investment in disruptive
            technology ensures that your deliveries arrive on time, every time.
          </p>
          {/* <div className="footer_social_row">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8.5z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.3c-.25.7-1.45 1.35-2 1.4-.5.05-1.15.1-1.85-.1-.4-.1-.95-.35-1.65-.65-2.9-1.25-4.8-4.15-4.95-4.35-.15-.2-1.15-1.55-1.15-2.95s.7-2.1 1-2.4c.25-.25.55-.3.75-.3h.5c.2 0 .45-.05.7.55.25.6.85 2.05.9 2.2.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.35-.45.45-.15.15-.3.3-.15.6.15.3.7 1.15 1.5 1.85 1.05.9 1.9 1.2 2.2 1.35.3.15.5.1.65-.05.2-.2.4-.5.6-.75.15-.2.35-.25.55-.15.2.1 1.3.6 1.5.75.2.1.35.15.4.25.05.15.05.6-.2 1.3z" />
              </svg>
            </a>
          </div> */}
        </div>

        <div className="footer_col">
          <h3 className="footer_header">CONTACT</h3>
          <ul className="footer_all_links footer_contact_list">
            <li>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
              </svg>
              +91 9662815514
            </li>
            <li>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 6l10 7L22 6M2 6v12h20V6H2z" />
              </svg>
              {/* was info@renukalogistics.com — leftover from template, update to your real domain */}
              enorminternational2610@gmail.com
            </li>
          </ul>
        </div>

        <div className="footer_col">
          <h3 className="footer_header">USEFUL LINKS</h3>
          <ul className="footer_all_links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer_col footer_col_wide">
          <h3 className="footer_header">ADDRESS</h3>
          <div
            className="footer_all_links footer_address"
            style={{ display: "flex", flexDirection: "row", gap: "10px" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p>
              80, Satyam sundaram soc. Near vijayraj circle, causeway road
              Singanpor char rast, Katargam, Surat, Gujarat 395004, India
            </p>
          </div>

          <div className="footer_newsletter">
            <h4>Stay in the loop</h4>
            <p>Shipping updates and industry notes, occasionally — no spam.</p>
            {subscribed ? (
              <div className="footer_newsletter_success">
                ✓ You're subscribed — thank you.
              </div>
            ) : (
              <form
                className="footer_newsletter_form"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button type="submit" aria-label="Subscribe">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="footer_watermark" aria-hidden="true">
        ENORM
      </div>

      <div className="bottom_footer">
        <button
          className="to_top_btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
        <div className="container bottom_footer_inner">
          <p>Copyright © 2025 Enorm International. All rights reserved.</p>
          {/* <div className="bottom_footer_links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
