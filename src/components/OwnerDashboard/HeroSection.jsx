"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Activity, Users, CalendarDays, IndianRupee, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { authService } from "@/services/authService";
import "./HeroSection.css";

const statsData = [
  { icon: LayoutGrid, label: "Properties", value: "24" },
  { icon: Activity, label: "Active", value: "18" },
  { icon: Users, label: "New Leads", value: "6" },
  { icon: CalendarDays, label: "Visits", value: "12" },
  { icon: IndianRupee, label: "Revenue", value: "2.4L" },
];

export default function HeroSection() {
  const [userName, setUserName] = useState("Rajesh");
  const [greeting, setGreeting] = useState("Good Morning");

  useEffect(() => {
    const name = authService.getUserName();
    if (name) setUserName(name);

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            className="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="greeting-highlight">{greeting}, {userName}</span>
            <span className="wave-emoji">👋</span>
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Manage your properties like a pro
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Track, manage and automate all your property tasks from one dashboard.
          </motion.p>
        </div>

        <motion.button
          className="post-property-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus size={18} />
          <span>Post New Properties</span>
        </motion.button>
      </div>

      <motion.div
        className="stats-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
            >
              <div className="stat-icon">
                <Icon size={20} />
              </div>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
