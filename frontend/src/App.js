import React from "react";
import GlobalStyle from "./styles/global";
import Login from "./pages/login";
import { AutenticacaoProvider } from "./context/authentication";
import Cadastro from './pages/sign-up'

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <AutenticacaoProvider>
        <Login />
      </AutenticacaoProvider> */}

      <Cadastro />
    </>
  );
}

export default App;
