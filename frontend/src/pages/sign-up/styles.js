import styled from "styled-components";
import bgImg from "../../assets/bg2.svg";

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
    color: #fff;
    margin-bottom: 1rem;
  }
  form {
    display: grid;
    gap: 0.5rem;
    p {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

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
