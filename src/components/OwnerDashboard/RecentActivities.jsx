"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import "./RecentActivities.css";

const activities = [
  {
    id: 1,
    name: "Dhara Jadav",
    status: "Contacted",
    time: "2:00 Today",
    location: "Satellite",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Dhara Jadav",
    status: "Contacted",
    time: "2:00 Today",
    location: "Satellite",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Dhara Jadav",
    status: "Contacted",
    time: "2:00 Today",
    location: "Satellite",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Dhara Jadav",
    status: "Contacted",
    time: "2:00 Today",
    location: "Satellite",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
];

export default function RecentActivities() {
  return (
    <motion.div
      className="recent-activities"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <h3 className="activities-title">Recent Activities</h3>

      <div className="activities-list">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="activity-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
          >
            <img
              src={activity.avatar}
              alt={activity.name}
              className="activity-avatar"
            />
            <div className="activity-info">
              <div className="activity-header">
                <h4 className="activity-name">
                  {activity.name}
                  <span className="activity-status">({activity.status})</span>
                </h4>
              </div>
              <p className="activity-meta">
                {activity.time} | {activity.location}
              </p>
            </div>
            <motion.button
              className="call-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone size={18} />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
