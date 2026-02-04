"use client";

import { motion } from "framer-motion";
import "./Header.css";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Home className="logo-icon" size={28} />
        </motion.div>
        <span>Propellow</span>
      </Link>

      <nav>
        {["Buy", "Rent", "Commercial", "Plots"].map((item) => (
          <motion.a
            key={item}
            href="#"
            whileHover={{ y: -2, color: "var(--primary)" }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>

      <div className="actions">
        <motion.button
          className="upgrade-btn"
          whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--white)" }}
          whileTap={{ scale: 0.95 }}
        >
          Upgrade
        </motion.button>
        <Link href="/login">
          <motion.button
            className="login-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#e65f00" }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </Link>
      </div>
    </header>
  );
}
