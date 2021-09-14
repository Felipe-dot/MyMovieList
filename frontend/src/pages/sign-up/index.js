import React, { useRef } from "react";
import Butao from "../../components/button";
import Input from "../../components/input";
import { Form } from "@unform/web";
import * as Yup from "yup";
import api from "../../services/api";

import { Container, ConteudoFormulario, Figura } from "./styles";

function Cadastro() {
  const formularioReferencia = useRef(null);

  const submeterFormulario = async (data) => {
    console.log(data);
    try {
      const esquema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatorio"),
        email: Yup.string()
          .email("Email invalido")
          .required("O email é obrigatorio"),
        password_hash: Yup.string().min(
          6,
          "A senha deve ter no minimo 6 caracteres"
        ),
      });
      await esquema.validate(data, { abortEarly: false });
      const reponse = await api.post("user", {
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
      });
      console.log(reponse.data);
    } catch (err) {
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
          <p>Insira seus dados para realizar o cadastro</p>
          <Input name="name" type="text" placeholder="Nome Completo" />
          <Input name="email" type="text" placeholder="Email" />
          <Input name="password_hash" type="password" placeholder="Senha" />
          {/* <button type="submit">Cadastrar</button> */}
          <Butao type="submit">Cadastrar</Butao>
          <a href="#">
            Já tem cadastro? Realize seu login
          </a>
        </Form>
      </ConteudoFormulario>
      <Figura> Teste </Figura>
    </Container>
  );
}

export default Cadastro;
