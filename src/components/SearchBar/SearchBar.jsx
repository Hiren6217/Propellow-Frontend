"use client";

import { motion } from "framer-motion";
import "./SearchBar.css";
import { Search, ChevronDown } from "lucide-react";

export default function SearchBar() {
  return (
    <motion.div 
      className="search-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container">
        <div className="search-box">
          <div className="search-input">
            <Search size={20} className="icon" />
            <input type="text" placeholder="Enter city or location" />
          </div>

          <div className="divider" />

          <div className="search-select">
            <span>Buy</span>
            <ChevronDown size={20} className="icon" />
          </div>

          <div className="divider" />

          <div className="search-select">
            <span>Budget</span>
            <ChevronDown size={20} className="icon" />
          </div>

          <button className="search-btn">Search Properties</button>
        </div>
      </div>
    </motion.div>
  );
}
