"use client";

import { motion } from "framer-motion";
import { Pencil, Trash2, Heart, ChevronDown } from "lucide-react";
import "./LeadsBoard.css";

const leads = [
  {
    id: 1,
    name: "Dhara Jadav",
    property: "2 BHK - Satellite",
    views: 120,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    count: 6,
  },
  {
    id: 2,
    name: "Dhara Jadav",
    property: "2 BHK - Satellite",
    views: 120,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    count: 6,
  },
  {
    id: 3,
    name: "Dhara Jadav",
    property: "2 BHK - Satellite",
    views: 120,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    count: 6,
  },
];

export default function LeadsBoard() {
  return (
    <motion.div
      className="leads-board"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="leads-board-header">
        <h3 className="leads-board-title">Leads Board</h3>
        <div className="filters-dropdown">
          <span>Filters</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="leads-grid">
        {leads.map((lead, index) => (
          <motion.div
            key={lead.id}
            className="lead-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          >
            <div className="lead-card-header">
              <span className="lead-type">New Leads</span>
              <span className="lead-count">{lead.count}</span>
            </div>

            <div className="lead-info">
              <img
                src={lead.avatar}
                alt={lead.name}
                className="lead-avatar"
              />
              <div className="lead-details">
                <h4 className="lead-name">{lead.name}</h4>
                <p className="lead-property">{lead.property}</p>
                <div className="lead-views">
                  <Heart size={14} />
                  <span>{lead.views} Views</span>
                </div>
              </div>
            </div>

            <div className="lead-actions">
              <motion.button
                className="lead-action-btn edit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Pencil size={16} />
                <span>Edit</span>
              </motion.button>
              <motion.button
                className="lead-action-btn delete"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
