import styled, { css } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 1rem;
  ${(props) => {
    if (props.temErro == true) {
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
        border-left: 0.3rem solid #8c311c;
      `;
    }
  }}

  input {
    width: 100%;
    border: none;
    height: 100%;
    background: transparent;
    ::placeholder {
      color: #8c311c;
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
