"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../Login/LoginOtp.css";

export default function SignupOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(52);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `00 : ${seconds < 10 ? `0${seconds}` : seconds}`;
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
            <div className="login-header">
              <h1>Verify OTP</h1>
              <p>Verify OTP sent on your register mobile no. xxxxxxx123</p>
            </div>

            <div className="otp-inputs">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  className="otp-field"
                />
              ))}
            </div>

            <div className="otp-timer">
              {formatTime(timer)}
            </div>

            <motion.button 
              className="send-otp-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Verify OTP
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
