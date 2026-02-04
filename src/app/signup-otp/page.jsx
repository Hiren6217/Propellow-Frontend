"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import OtpView from "@/components/OtpView/OtpView";
import { authService } from "@/services/authService";
import "@/components/Login/Login.css";

export default function SignupOtp() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("pending_signup");
    if (!saved) {
      router.push("/signup");
      return;
    }
    const data = JSON.parse(saved);
    setMobile(data.mobile);
    setUserData(data);
    // For demo show OTP
    setSuccess(`OTP sent! (For Demo: ${data.demoOtp})`);
  }, []);

  const handleVerify = async (otp) => {
    setError("");
    try {
      await authService.verifyRegister({
        ...userData,
        otp
      });
      localStorage.removeItem("pending_signup");
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
      setUserData({ ...userData, demoOtp: res.otp });
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
            title="Verify OTP"
            subtitle={`Verify OTP sent on your register mobile no. xxxxxxx${mobile.slice(-3)}`}
            buttonText="Verify OTP"
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
