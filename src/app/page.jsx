"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import SearchBar from "@/components/SearchBar/SearchBar";
import PopularLocalities from "@/components/PopularLocalities/PopularLocalities";
import Properties from "@/components/Properties/Properties";
import Visits from "@/components/Visits/Visits";
import WhyUs from "@/components/WhyUs/WhyUs";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";
import { authService } from "@/services/authService";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if already logged in
    if (authService.isAuthenticated()) {
      const dashboardRoute = authService.getDashboardRoute();
      router.replace(dashboardRoute);
    }
  }, [router]);

  return (
    <>
      <Header />
      <Hero />
      <SearchBar />
      <PopularLocalities />
      <Properties />
      <Visits />
      <WhyUs />
      <Services />
      <Footer />
      <Chatbot />
    </>
  );
}
