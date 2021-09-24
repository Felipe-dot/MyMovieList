import React, { useState, useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";

const Input = ({ name, ...rest }) => {
  const referenciaInput = useRef(null);
  const [focus, setFocus] = useState(false);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: referenciaInput.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container focus={focus} temErro={!!error}>
        <input
          {...rest}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={referenciaInput}
        ></input>
      </Container>
      {!!error && <Error>{error}</Error>}
    </>
  );
};

export default Input;
