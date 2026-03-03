"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import "./DashboardServices.css";

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

export default function DashboardServices() {
  return (
    <section className="dashboard-services">
      <div className="container">
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
          <span className="title-underline"></span>
        </motion.h2>

        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.1)"
              }}
            >
              <div className="service-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="expert-cta-btn"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(230, 95, 0, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Can&apos;t Find your property? Talk to our Property Expert</span>
            <Phone size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
