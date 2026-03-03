"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "@/services/authService";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Log state changes for debugging
  useEffect(() => {
    console.log("AuthContext state updated:", { user: user ? 'exists' : 'null', isAuthenticated, loading });
  }, [user, isAuthenticated, loading]);

  useEffect(() => {
    // Check if user is already logged in
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = authService.getToken();
      if (token) {
        // Simple token validation without external library
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          // Check if token is expired (exp is in seconds)
          if (payload.exp > Date.now() / 1000) {
            // Fetch user profile
            const userProfile = await fetchUserProfile();
            setUser(userProfile);
            setIsAuthenticated(true);
          } else {
            // Token expired, logout
            logout();
          }
        } catch (decodeError) {
          // Invalid token format, logout
          logout();
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/dashboard/profile`, {
        headers: {
          "Authorization": `Bearer ${authService.getToken()}`,
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
      
      const profile = await response.json();
      return profile;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  };

  const login = async (userData) => {
    try {
      console.log("Login function called with:", userData);
      // Store token if provided
      if (userData.token) {
        authService.setToken(userData.token);
        console.log("Token stored in localStorage");
        // Fetch user profile using the token
        const userProfile = await fetchUserProfile();
        console.log("User profile fetched:", userProfile);
        setUser(userProfile);
        setIsAuthenticated(true);
        console.log("Auth state updated successfully");
      } else {
        throw new Error("No token received from login");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    authService.logout();
  };

  const updateUserProfile = (profileData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...profileData
    }));
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    updateUserProfile,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}