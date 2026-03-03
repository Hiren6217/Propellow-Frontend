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
            <span>Dwello</span>
          </motion.div>
          <p className="footer-desc">
            Find your ideal home with Dwello. Trusted properties, verified listings, 
            and the right home for every lifestyle. Explore, compare, and make 
            confident property decisions with ease.
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
                whileHover={{ scale: 1.2, backgroundColor: "#E65F00", borderColor: "#E65F00" }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div className="link-col">
            <h4>Company</h4>
            <ul>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Careers
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Press
                </motion.a>
              </li>
            </ul>
          </div>
          
          <div className="link-col">
            <h4>Services</h4>
            <ul>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Property Search
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Home Loans
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Interior Design
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Legal Services
                </motion.a>
              </li>
            </ul>
          </div>
          
          <div className="link-col">
            <h4>Support</h4>
            <ul>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Help Center
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Contact Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Terms of Service
                </motion.a>
              </li>
            </ul>
          </div>
          
          <div className="link-col">
            <h4>Locations</h4>
            <ul>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Ahmedabad
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Mumbai
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Delhi
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 5, color: "#E65F00" }}
                >
                  Bangalore
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
