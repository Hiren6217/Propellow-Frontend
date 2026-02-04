"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./OtpView.css";

export default function OtpView({ title, subtitle, mobile, buttonText, onVerify, onResend, error, success }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(52);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(otp.join(""));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="login-form-box">
      <div className="login-header">
        <h1 className="signup-title">{title}</h1>
        <p>{subtitle}</p>
      </div>

      {mobile && (
        <div className="mobile-display">
          <input type="text" value={mobile} disabled />
        </div>
      )}

      {error && <p className="error-message" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{error}</p>}
      {success && <p className="success-message" style={{ color: 'green', marginBottom: '10px', textAlign: 'center' }}>{success}</p>}

      <form className="otp-form" onSubmit={handleSubmit}>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-box"
            />
          ))}
        </div>

        <div className="otp-timer">
          {formatTime(timer)}
        </div>

        <motion.button 
          className="send-otp-btn"
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonText}
        </motion.button>

        <p className="signup-text" style={{ marginTop: '20px', textAlign: 'center' }}>
          Didn't receive code? 
          <button 
            type="button" 
            onClick={() => {
              setTimer(60);
              onResend();
            }} 
            disabled={timer > 0}
            style={{ color: timer > 0 ? '#ccc' : 'var(--primary)', fontWeight: '600', background: 'none', border: 'none', cursor: timer > 0 ? 'default' : 'pointer' }}
          >
            Resend
          </button>
        </p>
      </form>
    </div>
  );
}
