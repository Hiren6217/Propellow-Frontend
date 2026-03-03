"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./MyLeadsChart.css";

const data = [
  { day: "Mon", lead: 420, revenue: 380 },
  { day: "Tue", lead: 380, revenue: 820 },
  { day: "Wed", lead: 220, revenue: 140 },
  { day: "Thu", lead: 160, revenue: 480 },
  { day: "Fri", lead: 920, revenue: 240 },
  { day: "Sat", lead: 760, revenue: 340 },
  { day: "Sun", lead: 20, revenue: 140 },
];

export default function MyLeadsChart() {
  return (
    <motion.div
      className="my-leads-chart"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="chart-header">
        <h3 className="chart-title">My Leads</h3>
        <div className="date-selector">
          <Calendar size={14} />
          <span>Today</span>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#999", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#999", fontSize: 12 }}
              dx={-10}
            />
            <Tooltip
              cursor={{ fill: "#f8f8f8" }}
              contentStyle={{
                background: "#fff",
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Bar
              dataKey="lead"
              fill="#ff8c6b"
              radius={[4, 4, 0, 0]}
              maxBarSize={24}
            />
            <Bar
              dataKey="revenue"
              fill="#ffe4dc"
              radius={[4, 4, 0, 0]}
              maxBarSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot lead"></span>
          <span>Lead</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot revenue"></span>
          <span>Revenue</span>
        </div>
      </div>
    </motion.div>
  );
}
