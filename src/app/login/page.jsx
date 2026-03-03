"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Login from "@/components/Login/Login";
import Footer from "@/components/Footer/Footer";
import { authService } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if already logged in
    if (authService.isAuthenticated()) {
      const dashboardRoute = authService.getDashboardRoute();
      router.replace(dashboardRoute);
    }
  }, [router]);

  return (
    <main>
      <Header />
      <Login />
      <Footer />
    </main>
  );
}
