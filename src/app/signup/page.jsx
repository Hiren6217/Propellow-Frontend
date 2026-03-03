"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Signup from "@/components/Signup/Signup";
import Footer from "@/components/Footer/Footer";
import { authService } from "@/services/authService";

export default function SignupPage() {
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
      <Signup />
      <Footer />
    </main>
  );
}
