import React, { createContext, useContext } from "react";
import api from "../services/api";

const ContextoAutenticacao = createContext(null);

export const AutenticacaoProvider = ({ children }) => {
  const login = async ({ email, password }) => {
    console.log("Ok");
    const response = await api.post("login", {
      email: email,
      password: password,
    });
    const { token, user } = response.data;

    localStorage.setItem("@aplicacao:token", token);
    localStorage.setItem("@aplicacao:user", JSON.stringify(user));
  };

  const logoff = () => {
    localStorage.removeItem("@aplicacao:token");
    localStorage.removeItem("@aplicacao:user");
  };

  return (
    <ContextoAutenticacao.Provider value={{ login, logoff }}>
      <h1>meu contexto de autenticao</h1>
      {children}
    </ContextoAutenticacao.Provider>
  );
};

export function UseContextAutenticacao() {
  const context = useContext(ContextoAutenticacao);
  if (!context) {
    throw new Error("Não foi possivel usar o contexto");
  }

  return context;
}
