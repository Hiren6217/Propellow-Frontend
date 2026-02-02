"use client";

import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>
              Live where you <br /> belong<span>.</span>
            </h1>

            <p>
              Discover the best properties for your lifestyle. Buy, sell or rent
              homes - built for buyers, owners, agents & builders.
            </p>

            <ul className="hero-features">
              <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}><span className="check">✓</span> Verified Listings</motion.li>
              <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}><span className="check">✓</span> Real Owners</motion.li>
              <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}><span className="check">✓</span> No Fake Ads</motion.li>
            </ul>

            <button className="hero-btn">Let’s Get Started</button>
          </motion.div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="image-card">
              <img src="/images/hero.png" alt="Modern Apartment Building" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
