"use client";

import { motion } from "framer-motion";
import "./PopularLocalities.css";
import { MapPin, ChevronRight } from "lucide-react";

const localities = [
  "Shela",
  "South Bopal",
  "Gota",
  "Jagatpur",
  "Bopal"
];

export default function PopularLocalities() {
  return (
    <section className="localities">
      <div className="container localities-container">
        <motion.div 
          className="label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MapPin size={18} className="pin-icon" />
          <span>Popular Localities</span>
        </motion.div>
        <div className="locality-list">
          {localities.map((item, index) => (
            <motion.a 
              key={item} 
              href="#" 
              className="locality-pill"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item} <ChevronRight size={16} className="arrow" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
