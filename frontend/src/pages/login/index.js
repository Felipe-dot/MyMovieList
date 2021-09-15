import React, { useRef } from "react";
import Logo from '../../assets/Logo.png';
import Butao from "../../components/button";
import Input from "../../components/input";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { UseContextAuthentication } from "../../context/authentication";
/* import api from "../../services/api"; */

import { Container, FormContent, Image } from "./styles";

function Login() {
  const referenceForm = useRef(null);
  const { login } = UseContextAuthentication();

  const submitForm = async (data) => {
    console.log(data);
    try {
      const esquema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email required"),
        password: Yup.string().min(
          6,
          "Password must have at least 6 characters"
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
        referenceForm.current?.setErrors(erros);
      }
    }
  };

  return (
    <>
    <header>
      <img src={Logo} alt="logo"/>
    </header>
    <Container>
      <FormContent>
        <h1> Login </h1>
        <Form ref={referenceForm} onSubmit={submitForm}>
          <Input name="email" type="text" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          {/* <button type="submit">Cadastrar</button> */}
          <Butao type="submit">Login</Butao>
          <a href="#">
          Don't have an account? Sign-up here
          </a>
        </Form>
      </FormContent>
      <Image></Image>
    </Container>
    </>
  );
}

export default Login;
