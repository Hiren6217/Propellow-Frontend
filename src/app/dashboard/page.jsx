"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OwnerDashboard from "@/components/OwnerDashboard/OwnerDashboard";
import Header from "@/components/Header/Header";
import DashboardHero from "@/components/Dashboard/DashboardHero";
import DashboardSearchBar from "@/components/Dashboard/DashboardSearchBar";
import PopularLocalities from "@/components/PopularLocalities/PopularLocalities";
import RecommendedProperties from "@/components/Dashboard/RecommendedProperties";
import TrendingProperties from "@/components/Dashboard/TrendingProperties";
import SavedProperties from "@/components/Dashboard/SavedProperties";
import DashboardServices from "@/components/Dashboard/DashboardServices";
import Footer from "@/components/Footer/Footer";
import { authService } from "@/services/authService";
import "./Dashboard.css";

export default function Dashboard() {
  const router = useRouter();
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState("User");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!authService.isAuthenticated()) {
      router.replace("/login");
      return;
    }

    const role = authService.getUserRole();
    setUserRole(role);

    const name = authService.getUserName?.() || localStorage.getItem("userName") || "User";
    setUserName(name);

    setLoading(false);
  }, [router]);

  if (loading) {
    return <div className="dashboard-loading">Loading...</div>;
  }

  // Render Owner Dashboard for OWNER, AGENT, BUILDER roles
  if (userRole === "OWNER" || userRole === "AGENT" || userRole === "BUILDER") {
    return <OwnerDashboard />;
  }

  // Render Buyer Dashboard for BUYER role (or default)
  return (
    <div className="buyer-dashboard">
      <Header />
      <DashboardHero userName={userName} />
      <DashboardSearchBar />
      <PopularLocalities />
      <RecommendedProperties />
      <TrendingProperties />
      <SavedProperties />
      <DashboardServices />
      <Footer />
    </div>
  );
}
