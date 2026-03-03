"use client";

import { motion } from "framer-motion";
import { Flame, ChevronRight } from "lucide-react";
import PropertyCard from "./PropertyCard";
import "./PropertySection.css";

const trendingProperties = [
  {
    id: 1,
    price: "22,000",
    period: "Month",
    location: "3BHK Satellite",
    config: "3BHK Apartment",
    image: "/images/property.png"
  },
  {
    id: 2,
    price: "22,000",
    period: "Month",
    location: "3BHK Satellite",
    config: "3BHK Apartment",
    image: "/images/property.png"
  },
  {
    id: 3,
    price: "22,000",
    period: "Month",
    location: "3BHK Satellite",
    config: "3BHK Apartment",
    image: "/images/property.png"
  }
];

export default function TrendingProperties() {
  return (
    <section className="property-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title-with-icon">
            <Flame className="icon-fire" size={24} />
            Trending Properties in Ahmedabad
            <span className="title-underline"></span>
          </h2>
          <motion.a
            href="#"
            className="view-all-link"
            whileHover={{ x: 5, color: "#e65f00" }}
          >
            View All <ChevronRight size={18} />
          </motion.a>
        </motion.div>

        <div className="property-grid">
          {trendingProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              isFavorite={index === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
