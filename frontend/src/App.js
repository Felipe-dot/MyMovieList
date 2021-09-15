import React from "react";
import GlobalStyle from "./styles/global";
import Home from './pages/home'
import Login from "./pages/login";
import { AuthenticationProvider } from "./context/authentication";
import Cadastro from './pages/sign-up'

function App() {
  return (
    <>
      <GlobalStyle />

      {/* <Cadastro /> */}

      {/* <AuthenticationProvider>
        <Login />
      </AuthenticationProvider> */}

      <Home />

    </>
  );
}

export default App;
