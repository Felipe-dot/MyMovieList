import React from "react";

import { Container } from "./styles";

function Butao({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Butao;
