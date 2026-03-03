"use client";

import { motion } from "framer-motion";
import "./Header.css";
import { Home, User, LogOut, Bell, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("User");
  const [userAvatar, setUserAvatar] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const loggedIn = authService.isAuthenticated();
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      const name = authService.getUserName();
      const displayName = name || "User";
      setUserName(displayName);
      
      // Set avatar based on user name - same logic as owner dashboard
      if (displayName.toLowerCase().includes("hiren")) {
        setUserAvatar("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face");
      } else {
        setUserAvatar("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face");
      }
    }
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setUserName("User");
    setShowDropdown(false);
    router.push("/login");
  };

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
        
        {isLoggedIn ? (
          <div className="user-profile">
            <motion.button
              className="notification-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </motion.button>
            
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
        ) : (
          <Link href="/login">
            <motion.button
              className="login-btn"
              whileHover={{ scale: 1.05, backgroundColor: "#e65f00" }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </Link>
        )}
      </div>
    </header>
  );
}
