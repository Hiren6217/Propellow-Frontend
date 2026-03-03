"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import "./PaymentsSection.css";

const payments = [
  {
    id: 1,
    amount: "₹ 1,50,000",
    property: "2 BHK - Satellite",
  },
  {
    id: 2,
    amount: "₹ 1,50,000",
    property: "2 BHK - Satellite",
  },
  {
    id: 3,
    amount: "₹ 1,50,000",
    property: "2 BHK - Satellite",
  },
  {
    id: 4,
    amount: "₹ 1,50,000",
    property: "2 BHK - Satellite",
  },
];

export default function PaymentsSection() {
  return (
    <motion.div
      className="payments-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
    >
      <div className="payments-header">
        <h3 className="payments-title">Payments</h3>
        <motion.a
          href="#"
          className="view-all-link"
          whileHover={{ x: 4 }}
        >
          <span>View All</span>
          <ChevronRight size={16} />
        </motion.a>
      </div>

      <div className="payments-grid">
        {payments.map((payment, index) => (
          <motion.div
            key={payment.id}
            className="payment-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <span className="payment-amount">{payment.amount}</span>
            <span className="payment-property">{payment.property}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
