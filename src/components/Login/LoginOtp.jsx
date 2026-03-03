"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpView from "../OtpView/OtpView";
import { authService } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";
import "./LoginOtp.css";

export default function LoginOtp() {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const mobile = localStorage.getItem("pending_login_mobile") || "";

  const handleVerify = async (enteredOtp) => {
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      console.log("Starting login verification process with entered OTP");
      
      // Verify the OTP that the user entered
      const res = await authService.verifyLogin(mobile, enteredOtp);
      console.log("Login verification successful:", res);
      
      // Login successful - store user data and redirect to dashboard
      console.log("Calling login function");
      await login(res);
      console.log("Login function completed");
      setSuccess("Login successful! Redirecting to dashboard...");
      
      // Small delay before redirect for better UX
      console.log("Setting up redirect timeout");
      setTimeout(() => {
        console.log("Redirecting to dashboard");
        // Use replace instead of push to prevent back navigation to login
        // Redirect based on user role
        const dashboardRoute = authService.getDashboardRoute();
        router.replace(dashboardRoute);
      }, 1500);
      
    } catch (err) {
      console.error("Login Verification Error:", err);
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      const res = await authService.sendOtp(mobile);
      setSuccess("OTP resent successfully!");
    } catch (err) {
      setError("Failed to resend OTP.");
    }
  };

  return (
    <section className="login-section">
      <div className="login-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <div className="container login-container">
        <motion.div 
          className="login-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="login-image-wrapper">
            <img src="/images/hero.png" alt="Find a place you'll love" />
            <div className="image-overlay">
              <h2>Find a place <br /> you’ll love</h2>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="login-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <OtpView 
            title="Login"
            subtitle={`Enter the OTP sent to ${mobile}`}
            mobile={mobile}
            buttonText={loading ? "Verifying..." : "Verify & Login"}
            onVerify={handleVerify}
            onResend={handleResend}
            error={error}
            success={success}
          />
        </motion.div>
      </div>
    </section>
  );
}