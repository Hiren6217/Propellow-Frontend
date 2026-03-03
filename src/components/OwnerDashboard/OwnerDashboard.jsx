"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import HeroSection from "./HeroSection";
import MyLeadsChart from "./MyLeadsChart";
import SmartAlerts from "./SmartAlerts";
import LeadsBoard from "./LeadsBoard";
import RecentActivities from "./RecentActivities";
import PaymentsSection from "./PaymentsSection";
import "./OwnerDashboard.css";

export default function OwnerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="owner-dashboard">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="owner-dashboard-main">
        <DashboardHeader 
          onMenuToggle={toggleSidebar} 
          isSidebarOpen={isSidebarOpen}
        />
        
        <div className="owner-dashboard-content">
          <HeroSection />
          
          <div className="dashboard-row two-columns">
            <MyLeadsChart />
            <SmartAlerts />
          </div>
          
          <LeadsBoard />
          
          <div className="dashboard-row two-columns">
            <RecentActivities />
            <PaymentsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
