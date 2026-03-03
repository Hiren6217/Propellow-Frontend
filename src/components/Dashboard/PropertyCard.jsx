"use client";

import { motion } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";
import "./PropertyCard.css";

export default function PropertyCard({ 
  property, 
  index = 0,
  showFavorite = true,
  isFavorite = false 
}) {
  const { price, period, location, config, image } = property;

  return (
    <motion.div
      className="property-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
      }}
    >
      <div className="property-image">
        <img src={image || "/images/property-placeholder.jpg"} alt={config} />
        {showFavorite && (
          <motion.button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart size={18} fill={isFavorite ? "#e65f00" : "none"} color={isFavorite ? "#e65f00" : "#fff"} />
          </motion.button>
        )}
        <div className="property-overlay">
          <div className="price-tag">
            <span className="currency">₹</span>
            <span className="amount">{price}</span>
            <span className="period">/{period}</span>
          </div>
          <div className="config-tag">{config}</div>
        </div>
      </div>

      <div className="property-info">
        <p className="property-location">{location}</p>
        <motion.a
          href="#"
          className="view-details"
          whileHover={{ x: 5, color: "#e65f00" }}
        >
          View Details <ChevronRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
}
