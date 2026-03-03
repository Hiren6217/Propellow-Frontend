"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import "./SmartAlerts.css";

const alerts = [
  {
    id: 1,
    message: "leads are not contacted yet",
    count: 6,
    type: "warning",
    hasArrow: false,
  },
  {
    id: 2,
    message: "1 visit today at 4 PM",
    type: "info",
    hasArrow: true,
  },
  {
    id: 3,
    message: "1 rent payment pending",
    type: "info",
    hasArrow: true,
  },
];

export default function SmartAlerts() {
  return (
    <motion.div
      className="smart-alerts"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="alerts-title">Smart Alerts</h3>

      <div className="alerts-list">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            className="alert-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ x: 4 }}
          >
            <span className="alert-message">{alert.message}</span>
            <div className="alert-action">
              {alert.count && (
                <span className="alert-count">{alert.count}</span>
              )}
              {alert.hasArrow && <ChevronRight size={18} color="#999" />}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
