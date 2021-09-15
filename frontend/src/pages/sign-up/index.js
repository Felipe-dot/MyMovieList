import React, { useRef } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { Form } from "@unform/web";
import * as Yup from "yup";
import api from "../../services/api";
import Logo from '../../assets/Logo.png'

import { Container, FormContent, Image } from "./styles";

function SignUp() {
  const referenceForm = useRef(null);

  const submitForm = async (data) => {
    console.log(data);
    try {
      const esquema = Yup.object().shape({
        nickname: Yup.string().required("Nickname required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email required"),
        password_hash: Yup.string().min(
          6,
          "Password must have at least 6 characters"
        ),
      });
      await esquema.validate(data, { abortEarly: false });
      const reponse = await api.post("user", {
        nickname: data.nickname,
        email: data.email,
        password_hash: data.password_hash,
      });
      console.log(reponse.data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = {};
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        console.log(errors);
        referenceForm.current?.setErrors(errors);
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
        <h1> Create your account </h1>
        <Form ref={referenceForm} onSubmit={submitForm}>
          <Input name="nickname" type="text" placeholder="Nickname" />
          <Input name="email" type="text" placeholder="Email" />
          <Input name="password_hash" type="password" placeholder="Password" />
          {/* <button type="submit">Cadastrar</button> */}
          <Button type="submit">Sign up</Button>
          <a href="#">
            Already have an account? Login here
          </a>
        </Form>
      </FormContent>
      <Image></Image>
    </Container>
    </>
  );
}

export default SignUp;
