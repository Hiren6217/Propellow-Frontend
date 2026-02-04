"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Phone, CheckCircle } from "lucide-react";
import { authService } from "@/services/authService";
import "./Login.css";

export default function Login() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await authService.sendOtp(mobile);
      localStorage.setItem("pending_login_mobile", mobile);
      localStorage.setItem("pending_login_otp", res.otp);
      router.push("/login-otp");
    } catch (err) {
      console.error("Login Send OTP Error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
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
          <div className="login-form-box">
            <motion.div
              key="login-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="login-header">
                <h1>Login</h1>
                <p>Buy, rent, list or manage properties - all in one place.</p>
              </div>

              {error && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

              <form className="login-form" onSubmit={handleSendOtp}>
                <div className="form-group" style={{ display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '14px 20px', marginBottom: '16px', background: '#fff' }}>
                  <Phone size={20} style={{ color: '#666', marginRight: '12px' }} />
                  <input 
                    type="text" 
                    placeholder="Mobile Number" 
                    className="login-input"
                    style={{ border: 'none', width: '100%', outline: 'none' }}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>

                <motion.button 
                  className="send-otp-btn"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </motion.button>
              </form>
            </motion.div>

            <p className="signup-text">
              Don’t have an account? <Link href="/signup">Signup</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
