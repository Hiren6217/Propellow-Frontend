const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authService = {
  sendOtp: async (mobile) => {
    try {
      if (!API_BASE_URL) {
        throw new Error("Backend URL not configured. Please restart the development server.");
      }
      const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
      });
      
      if (!response.ok) {
        const data = await response.json().catch(() => ({ message: "Server error" }));
        throw new Error(data.message || "Failed to send OTP");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("OTP Error:", error);
      if (error.message === "Failed to fetch") {
        throw new Error("Cannot connect to server. Please ensure the backend is running on port 8080.");
      }
      throw error;
    }
  },

  verifyRegister: async (verifyData) => {
    try {
      if (!API_BASE_URL) {
        throw new Error("Backend URL not configured. Please restart the development server.");
      }
      const response = await fetch(`${API_BASE_URL}/auth/verify-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      });
      
      if (!response.ok) {
        const data = await response.json().catch(() => ({ message: "Server error" }));
        throw new Error(data.message || "Registration failed");
      }
      
      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      console.error("Registration Error:", error);
      if (error.message === "Failed to fetch") {
        throw new Error("Cannot connect to server. Please ensure the backend is running on port 8080.");
      }
      throw error;
    }
  },

  verifyLogin: async (mobile, otp) => {
    try {
      if (!API_BASE_URL) {
        throw new Error("Backend URL not configured. Please restart the development server.");
      }
      const response = await fetch(`${API_BASE_URL}/auth/verify-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, otp }),
      });
      
      if (!response.ok) {
        const data = await response.json().catch(() => ({ message: "Server error" }));
        throw new Error(data.message || "Login failed");
      }
      
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      console.error("Login Error:", error);
      if (error.message === "Failed to fetch") {
        throw new Error("Cannot connect to server. Please ensure the backend is running on port 8080.");
      }
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  setToken: (token) => {
    localStorage.setItem("token", token);
  },

  isAuthenticated: () => {
    const token = authService.getToken();
    if (!token) return false;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  },

  getUserName: () => {
    const token = authService.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.fullName || payload.sub || "User";
    } catch {
      return "User";
    }
  },

  getUserRole: () => {
    const token = authService.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || null;
    } catch {
      return null;
    }
  },

  getDashboardRoute: () => {
    const role = authService.getUserRole();
    switch (role) {
      case "OWNER":
        return "/dashboard";
      case "BUYER":
        return "/dashboard";
      case "AGENT":
        return "/dashboard";
      case "BUILDER":
        return "/dashboard";
      default:
        return "/dashboard";
    }
  }
};
