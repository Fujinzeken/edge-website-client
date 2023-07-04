import React, { createContext, useState } from "react";
import axios from "axios";

const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (data, errCallback) => {
    try {
      setLoading(true);
      const { firstName, lastName, email, password } = data;
      console.log(data);
      const res = await axios.post("http://localhost:4000/auth/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err) errCallback();
    }
  };

  const handleLogin = async (data, errCallback) => {
    try {
      setLoading(true);
      const { email, password } = data;
      const res = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (errCallback) errCallback();
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser("");
      localStorage.removeItem("user");
    }, 2000);
  };
  const value = {
    registration: handleRegistration,
    loading,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    user,
  };
  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

export { AuthContext, AuthProvider };
