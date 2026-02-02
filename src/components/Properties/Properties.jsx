"use client";

import { motion } from "framer-motion";
import "./Properties.css";
import { ChevronRight } from "lucide-react";

const properties = [
  {
    title: "2BHK Apartment",
    location: "Satellite",
    price: "60 Lcs",
    tag: "Buy",
    image: "/images/property.png"
  },
  {
    title: "2BHK Apartment",
    location: "Satellite",
    price: "60 Lcs",
    tag: "Rent",
    image: "/images/property.png"
  },
  {
    title: "2BHK Apartment",
    location: "Satellite",
    price: "60 Lcs",
    tag: "New",
    image: "/images/property.png"
  }
];

export default function Properties() {
  return (
    <section className="properties">
      <div className="container">
        <motion.div 
          className="prop-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Popular Owner’s Properties
            <span></span>
          </h2>
          <a href="#" className="view-all">
            View All <ChevronRight size={18} />
          </a>
        </motion.div>

        <div className="prop-grid">
          {properties.map((item, index) => (
            <motion.div 
              className="prop-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="image-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="prop-info">
                <div className="info-top">
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
                <div className="info-bottom">
                  <span className="price">{item.price}</span>
                  <button className={`tag-btn ${item.tag.toLowerCase()}`}>
                    {item.tag}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
