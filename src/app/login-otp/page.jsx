"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import OtpView from "@/components/OtpView/OtpView";
import { authService } from "@/services/authService";
import "@/components/Login/Login.css";

export default function LoginOtp() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("pending_login_mobile");
    const demoOtp = localStorage.getItem("pending_login_otp");
    if (!saved) {
      router.push("/login");
      return;
    }
    setMobile(saved);
    if (demoOtp) {
      setSuccess(`OTP sent! (For Demo: ${demoOtp})`);
    }
  }, []);

  const handleVerify = async (otp) => {
    setError("");
    try {
      await authService.verifyLogin(mobile, otp);
      localStorage.removeItem("pending_login_mobile");
      localStorage.removeItem("pending_login_otp");
      router.push("/");
    } catch (err) {
      setError(err.message || "Invalid OTP.");
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      const res = await authService.sendOtp(mobile);
      setSuccess(`OTP sent! (For Demo: ${res.otp})`);
      localStorage.setItem("pending_login_otp", res.otp);
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
            subtitle="Buy, rent, list or manage properties - all in one place."
            mobile={mobile}
            buttonText="Login"
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
