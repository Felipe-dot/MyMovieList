import React, { useRef, useState } from 'react';
import Logo from '../../assets/Logo.png';
import Butao from '../../components/button';
import Input from '../../components/input';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { UseContextAuthentication } from "../../context/authentication";
import { Link, useHistory } from 'react-router-dom';

import { Container, FormContent, Image } from './styles';

function Login() {
  const [loginError, setLoginError] = useState("");
  const referenceForm = useRef(null);
  const { login } = UseContextAuthentication();
  const history = useHistory();

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
      await login(data);
      history.push('/home');
      /* const reponse = await api.post("login", {
        email: data.email,
        password: data.password,
      });
      console.log(reponse.data); */
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = {};
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        console.log(errors);
        referenceForm.current?.setErrors(errors);
      }
      setLoginError("Account does not exist")
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
          <Link to='/sign-up'>
          Don't have an account? Sign-up here
          </Link>
        </Form>
        {!!loginError && window.alert(loginError)}
      </FormContent>
      <Image/>
    </Container>
    </>
  );
}

export default Login;
