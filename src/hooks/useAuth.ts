import { useState, useEffect } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useState<{
    token: string | null;
    role: string | null;
    loading: boolean;
  }>(() => ({
    token: null,
    role: null,
    loading: true,
  }));

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    setAuth({
      token,
      role,
      loading: false,
    });
  }, []);

  const login = (token: string, role: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    setAuth({
      token,
      role,
      loading: false,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setAuth({
      token: null,
      role: null,
      loading: false,
    });
  };

  return { ...auth, login, logout };
};
