import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormLogin from '../login/FormLogin'
import Home from '../home/index'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
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
