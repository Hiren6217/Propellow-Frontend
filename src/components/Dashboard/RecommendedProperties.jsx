"use client";

import { motion } from "framer-motion";
import { Flame, ChevronRight } from "lucide-react";
import PropertyCard from "./PropertyCard";
import "./PropertySection.css";

const recommendedProperties = [
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

export default function RecommendedProperties() {
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
            Recommended for You
            <span className="title-underline"></span>
          </h2>
          <motion.a
            href="#"
            className="view-all-link"
            whileHover={{ x: 5, color: "#e65f00" }}
          >
            Map View <ChevronRight size={18} />
          </motion.a>
        </motion.div>

        <div className="property-grid">
          {recommendedProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
              isFavorite={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
