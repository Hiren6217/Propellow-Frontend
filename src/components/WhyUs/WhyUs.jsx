"use client";

import { motion } from "framer-motion";
import "./WhyUs.css";
import {
  Home,
  List,
  ShieldCheck,
  Sliders,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const items = [
  {
    icon: <Home size={32} />,
    title: "Buy & Rent Properties",
  },
  {
    icon: <List size={32} />,
    title: "List & Manage Properties",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Verified Owners, Builders",
  },
  {
    icon: <Sliders size={32} />,
    title: "Smart Filters",
  },
];

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="container">
        <motion.div 
          className="whyus-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Why Choose Us?
            <span></span>
          </h2>
          <div className="whyus-arrows">
            <button className="arrow-btn">
              <ChevronLeft size={20} />
            </button>
            <button className="arrow-btn active">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="whyus-grid">
          {items.map((item, i) => (
            <motion.div 
              className="why-card" 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="icon-box">{item.icon}</div>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
