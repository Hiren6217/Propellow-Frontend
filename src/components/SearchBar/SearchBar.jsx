"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./SearchBar.css";
import { Search, ChevronDown } from "lucide-react";

export default function SearchBar() {
  const [showBuyDropdown, setShowBuyDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [selectedBuy, setSelectedBuy] = useState("Buy");
  const [selectedBudget, setSelectedBudget] = useState("Budget");

  const buyOptions = ["Buy", "Rent"];
  const budgetOptions = [
    "40lakh-50lakh",
    "50lakh-60lakh",
    "60lakh-80lakh",
    "80lakh-1cr"
  ];

  return (
    <motion.div 
      className="search-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container">
        <div className="search-box">
          <div className="search-input">
            <Search size={24} className="icon" />
            <input type="text" placeholder="Enter city or location" />
          </div>

          <div className="divider" />

          <div 
            className="search-select" 
            onClick={() => {
              setShowBuyDropdown(!showBuyDropdown);
              setShowBudgetDropdown(false);
            }}
          >
            <span>{selectedBuy}</span>
            <ChevronDown size={24} className="icon" />
            {showBuyDropdown && (
              <div className="dropdown-menu">
                {buyOptions.map(option => (
                  <motion.div 
                    key={option} 
                    className="dropdown-item"
                    whileHover={{ x: 5, backgroundColor: "#fff9f5" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBuy(option);
                      setShowBuyDropdown(false);
                    }}
                  >
                    {option}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <div className="divider" />

          <div 
            className="search-select"
            onClick={() => {
              setShowBudgetDropdown(!showBudgetDropdown);
              setShowBuyDropdown(false);
            }}
          >
            <span>{selectedBudget}</span>
            <ChevronDown size={24} className="icon" />
            {showBudgetDropdown && (
              <div className="dropdown-menu">
                {budgetOptions.map(option => (
                  <motion.div 
                    key={option} 
                    className="dropdown-item"
                    whileHover={{ x: 5, backgroundColor: "#fff9f5" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBudget(option);
                      setShowBudgetDropdown(false);
                    }}
                  >
                    {option}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <motion.button 
            className="search-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#e65f00" }}
            whileTap={{ scale: 0.95 }}
          >
            Search Properties
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
