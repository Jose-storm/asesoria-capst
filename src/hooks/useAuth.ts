
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useState<{ token: string | null, isAdmin: boolean, loading: boolean }>({
    token: null,
    isAdmin: false,
    loading: true
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      setAuth({ token, isAdmin: role === "admin", loading: false });
    } else {
      setAuth({ token: null, isAdmin: false, loading: false });
    }
  }, []);

  const login = (token: string, role: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setAuth({ token, isAdmin: role === "admin", loading: false });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({ token: null, isAdmin: false, loading: false });
  };

  return { ...auth, login, logout };
};
