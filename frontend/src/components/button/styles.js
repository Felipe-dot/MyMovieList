import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: linear-gradient(
      90deg,
      rgb(21, 79, 112) 0%,
      rgb(104, 16, 82) 100%
    );
  color: #fff;
  border: none;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.6, "#8c311c")};
  }
`;
