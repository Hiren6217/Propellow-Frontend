"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Building2,
  Users,
  CalendarDays,
  CreditCard,
  FileText,
  Megaphone,
  BarChart3,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Sidebar.css";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Building2, label: "Properties", href: "/dashboard/properties" },
  { icon: Users, label: "Leads", href: "/dashboard/leads" },
  { icon: CalendarDays, label: "Visits", href: "/dashboard/visits" },
  { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: FileText, label: "Agreements", href: "/dashboard/agreements" },
  { icon: Megaphone, label: "Boost Ads", href: "/dashboard/boost-ads" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 99,
          }}
        />
      )}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.label} href={item.href} className="sidebar-link-wrapper">
              <motion.div
                className={`sidebar-item ${isActive ? "active" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
      </aside>
    </>
  );
}
