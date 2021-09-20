import React, { createContext, useContext } from "react";
import api from "../services/api";

const AuthenticationContext = createContext(null);

export const AuthenticationProvider = ({ children }) => {
  const login = async ({ email, password }) => {
    console.log("Ok");
    const response = await api.post("login", {
      email: email,
      password: password,
    });
    const { token, user } = response.data;

    localStorage.setItem("@aplication:token", token);
    localStorage.setItem("@aplication:user", JSON.stringify(user));
  };

  const logoff = () => {
    localStorage.removeItem("@aplication:token");
    localStorage.removeItem("@aplication:user");
  };

  return (
    <AuthenticationContext.Provider value={{ login, logoff }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function UseContextAuthentication() {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("could not use this context");
  }

  return context;
}
