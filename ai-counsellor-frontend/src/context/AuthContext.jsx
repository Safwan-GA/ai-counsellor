import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await axios.get("/auth/me");
        setUser(res.data.user); // backend returns the user object
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");
    if (token) fetchMe();
    else setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
