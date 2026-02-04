"use client";

import { motion } from "framer-motion";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Home
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <motion.div 
            className="footer-logo"
            whileHover={{ scale: 1.05 }}
          >
            <Home className="logo-icon" size={32} />
            <span>Propellow</span>
          </motion.div>
          <p className="footer-desc">
            Find trusted properties, verified listings, and the right home for
            every lifestyle. Explore, compare, and make confident property
            decisions with ease.
          </p>
          <div className="social-links">
            {[
              { icon: <Facebook size={20} />, href: "#" },
              { icon: <Instagram size={20} />, href: "#" },
              { icon: <Twitter size={20} />, href: "#" },
              { icon: <Youtube size={20} />, href: "#" },
              { icon: <Linkedin size={20} />, href: "#" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary)", borderColor: "var(--primary)" }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          {[1, 2, 3, 4].map((i) => (
            <div className="link-col" key={i}>
              <h4>Header Text</h4>
              <ul>
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 5, color: "var(--white)" }}
                    >
                      Button
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
