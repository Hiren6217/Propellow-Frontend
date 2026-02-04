"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authService } from "@/services/authService";
import "./Signup.css";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    role: "BUYER",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await authService.sendOtp(formData.mobile);
      localStorage.setItem("pending_signup", JSON.stringify({
        ...formData,
        demoOtp: res.otp
      }));
      router.push("/signup-otp");
    } catch (err) {
      console.error("Signup Send OTP Error:", err);
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
              key="signup-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="login-header">
                <h1 className="signup-title">Sign Up</h1>
                <p>Buy, rent, list or manage properties - all in one place.</p>
              </div>

              {error && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

              <div className="role-selection">
                <p className="role-label">I am a :</p>
                <div className="roles">
                  {["BUYER", "AGENT", "BUILDER", "OWNER"].map((role) => (
                    <label className="role-item" key={role}>
                      <input 
                        type="radio" 
                        name="role" 
                        checked={formData.role === role}
                        onChange={() => handleRoleChange(role)}
                      />
                      <span className="radio-custom"></span>
                      {role.charAt(0) + role.slice(1).toLowerCase()}
                    </label>
                  ))}
                </div>
              </div>

              <form className="signup-form" onSubmit={handleSendOtp}>
                <div className="input-group">
                  <User size={20} className="input-icon" />
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <Mail size={20} className="input-icon" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <Phone size={20} className="input-icon" />
                  <input 
                    type="text" 
                    name="mobile"
                    placeholder="Mobile No." 
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="terms-checkbox">
                  <label>
                    <input type="checkbox" required />
                    <span className="checkbox-custom"></span>
                    I accept the <a href="#">Terms & Privacy Policy</a>
                  </label>
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
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
