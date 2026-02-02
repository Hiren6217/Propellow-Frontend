"use client";

import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "EMI Calculator",
    desc: "Instantly estimate your monthly EMI based on budget and tenure.",
    image: "/images/emi.png"
  },
  {
    title: "Home Loans",
    desc: "Explore loan options from trusted banks and lenders.",
    image: "/images/loan.png"
  },
  {
    title: "Interior Design",
    desc: "Get expert design ideas tailored to your home and budget.",
    image: "/images/interior.png"
  },
  {
    title: "Market Trends",
    desc: "Stay updated with current property prices and demand trends.",
    image: "/images/trends.png"
  },
  {
    title: "Price Research",
    desc: "Compare property prices across localities and projects.",
    image: "/images/research.png"
  },
  {
    title: "Legal Assistance",
    desc: "Access guidance for property documents and verification.",
    image: "/images/legal.png"
  }
];

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
          <span></span>
        </motion.h2>

        <div className="service-grid">
          {services.map((item, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <div className="service-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="service-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
