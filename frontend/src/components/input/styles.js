import styled, { css } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 1rem;
  ${(props) => {
    if (props.hasError == true) {
      return css`
        border: 1px red solid;
        margin-bottom: 0;
      `;
    } else {
      return css`
        margin-bottom: 1rem;
      `;
    }
  }}

  ${(props) => {
    if (props.focus == true) {
      return css`
        border-left: 0.3rem solid #D9AE52;
      `;
    }
  }}

  input {
    width: 100%;
    border: none;
    height: 100%;
    background: transparent;
    ::placeholder {
      color: gray;
    }
    :focus {
      outline: none;
    }
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
`;
