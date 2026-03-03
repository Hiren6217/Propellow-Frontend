"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Bell, ChevronDown, LogOut, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import "./DashboardHeader.css";

const topNavItems = [
  { label: "Dashboard", href: "/dashboard", active: true },
  { label: "My Properties", href: "/dashboard/properties" },
  { label: "Leads", href: "/dashboard/leads" },
  { label: "Visits", href: "/dashboard/visits" },
  { label: "Payments", href: "/dashboard/payments" },
];

export default function DashboardHeader({ onMenuToggle, isSidebarOpen }) {
  const router = useRouter();
  const [userName, setUserName] = useState("User");
  const [userAvatar, setUserAvatar] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const name = authService.getUserName();
    const displayName = name || "Emiley Wong";
    setUserName(displayName);
    
    // Set avatar based on user name
    if (displayName.toLowerCase().includes("hiren")) {
      setUserAvatar("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face");
    } else {
      setUserAvatar("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face");
    }
  }, []);

  const handleLogout = () => {
    authService.logout();
    router.push("/login");
  };

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-left">
        <motion.button
          className="mobile-menu-btn"
          onClick={onMenuToggle}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
        <Link href="/" className="dashboard-logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="logo-icon-wrapper"
          >
            <div className="logo-box">
              <Home size={20} />
            </div>
          </motion.div>
          <span className="logo-text">Propellow</span>
        </Link>
      </div>

      <nav className="dashboard-header-nav">
        {topNavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`header-nav-link ${item.active ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="dashboard-header-right">
        <motion.button
          className="notification-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell size={20} />
          <span className="notification-badge">2</span>
        </motion.button>

        <div className="user-profile">
          <span className="welcome-text">Welcome</span>
          <div
            className="user-dropdown-trigger"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="user-name">{userName}</span>
            <ChevronDown size={16} />
          </div>
          <div className="user-avatar">
            <img
              src={userAvatar}
              alt={userName}
            />
          </div>

          {showDropdown && (
            <motion.div
              className="user-dropdown-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/dashboard" className="dropdown-item">
                <User size={16} />
                <span>Dashboard</span>
              </Link>
              <button className="dropdown-item logout" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
