"use client";

import { motion } from "framer-motion";
import "./DashboardHero.css";

export default function DashboardHero({ userName }) {
  return (
    <section className="dashboard-hero">
      <div className="container">
        <div className="hero-main">
          {/* Left Content */}
          <motion.div
            className="hero-content-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="greeting">
              Good Morning, {userName} <span className="wave">👋</span>
            </h1>
            <h2 className="tagline">
              Find your <span className="highlight">Ideal Home</span> Today
            </h2>
            <p className="description">
              Discover the best properties for your lifestyle. Buy, sell or rent new homes, buyers, agents & builders.
            </p>
            
            <div className="features">
              <span className="feature-item">
                <span className="check">✓</span> Verified Listings
              </span>
              <span className="feature-item">
                <span className="check">✓</span> Real Owners
              </span>
              <span className="feature-item">
                <span className="check">✓</span> No Fake Ads
              </span>
            </div>

            <motion.button
              className="cta-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let&apos;s Get Started
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image">
              <img src="/images/hero.png" alt="Modern Apartment Building" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
