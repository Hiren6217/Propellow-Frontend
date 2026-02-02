"use client";

import { motion } from "framer-motion";
import "./Visits.css";

const visits = [
  {
    title: "Free Cab",
    desc: "Enjoy a comfortable free cab pickup & drop for your property visit.",
    btn: "Book Now",
    image: "/images/cab.png"
  },
  {
    title: "Free Bike Ride",
    desc: "Get a free bike ride for quick and nearby property visits.",
    btn: "Book Now",
    image: "/images/bike.png"
  },
  {
    title: "Free Site Visit",
    desc: "Book a free guided site visit to verified properties.",
    btn: "Book Now",
    image: "/images/visit.png"
  }
];

export default function Visits() {
  return (
    <section className="visits">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Book Free Visits
          <span></span>
        </motion.h2>

        <div className="visit-grid">
          {visits.map((item, index) => (
            <motion.div 
              className="visit-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <button className="visit-btn">{item.btn}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
