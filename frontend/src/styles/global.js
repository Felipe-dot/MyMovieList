import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #313D3E;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  margin: 0;
}

body, button, input{
  font-size: 1rem;
}

button{ 
  cursor: pointer;
}

`;
