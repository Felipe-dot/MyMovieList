import styled from "styled-components";
import bgImg from "../../assets/bg2.svg";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 2rem;
  h1 {
    color: #ffffff;
    margin-bottom: 1rem;
  }
  form {
    display: grid;
    gap: 0.5rem;
    p {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    /*   input {
      background: #f2f2f2;
      border: none;
      border-radius: 4px;
      border-left: 0.3rem solid #8c311c;
      padding: 1rem;
      margin-bottom: 1rem;
      ::placeholder {
        color: #d97b29;
      } 
    }
    /*     button {
      background: #8c311c;
      color: #fff;
      border: none;
      box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      padding: 1rem;
      margin-bottom: 1rem;
      font-size: 2rem;
      transition: background 0.2s;
    }
    button:hover {
      background: ${shade(0.6, "#8c311c")};
    } */

    a {
      color: #D9AE52;
      text-align: center;
      text-decoration: none;
      svg {
        margin-left: 0.5rem;
      }
    }
  }
  div {
    text-align: center;
    a {
      margin: 0 1rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
`;
