import React from 'react';
import GlobalStyle from './styles/global';
import { AuthenticationProvider } from './context/authentication';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes></Routes>
      </AuthenticationProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
