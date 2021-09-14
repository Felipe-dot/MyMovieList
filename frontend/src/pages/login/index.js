import React, { useRef } from "react";
import Butao from "../../components/button";
import Input from "../../components/input";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { UseContextAutenticacao } from "../../context/authentication";
/* import api from "../../services/api"; */

import { Container, ConteudoFormulario, Figura } from "./styles";

function Cadastro() {
  const formularioReferencia = useRef(null);
  const { login } = UseContextAutenticacao();

  const submeterFormulario = async (data) => {
    console.log(data);
    try {
      const esquema = Yup.object().shape({
        email: Yup.string()
          .email("Email invalido")
          .required("O email é obrigatorio"),
        password: Yup.string().min(
          6,
          "A senha deve ter no minimo 6 caracteres"
        ),
      });
      await esquema.validate(data, { abortEarly: false });
      login(data);
      /* const reponse = await api.post("login", {
        email: data.email,
        password: data.password,
      });
      console.log(reponse.data); */
    } catch (err) {
      console.log("ok");
      if (err instanceof Yup.ValidationError) {
        const erros = {};
        err.inner.forEach((e) => {
          erros[e.path] = e.message;
        });
        console.log(erros);
        formularioReferencia.current?.setErrors(erros);
      }
    }
  };

  return (
    <Container>
      <ConteudoFormulario>
        <h1> Bem Vindo</h1>
        <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
          <p>Insira seus dados para realizar seu login</p>
          <Input name="email" type="text" placeholder="Email" />
          <Input name="password" type="password" placeholder="Senha" />
          {/* <button type="submit">Cadastrar</button> */}
          <Butao type="submit">Login</Butao>
          <a href="#">
            Não tem cadastro? Realize seu cadastro
          </a>
        </Form>
      </ConteudoFormulario>
      <Figura> Teste </Figura>
    </Container>
  );
}

export default Cadastro;
