import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormLogin from '../login/FormLogin'
import Logo from '../../assets/Logo.png'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <header>
        <img src={Logo} alt="logo"/>
        </header>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='img/bg2.svg' alt='movie theather seats' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormLogin />
        )}
      </div>
    </>
  );
};

export default Form;
