import React, { useRef } from 'react';
import { useAuthContext } from '../context/authContext';

const SignUp = () => {
  const { signup } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <main className='form-container'>
      <form onSubmit={handleSubmit}>
        <header>
          <h1>Sign Up</h1>
        </header>
        <section className='email'>
          <label htmlFor='email'>Email</label>
          <input required ref={emailRef} id='email' type='email' />
        </section>
        <section className='password'>
          <label htmlFor='password'>Password</label>
          <input required ref={passwordRef} id='password' type='email' />
        </section>
        <section className='password-confirm'>
          <label htmlFor='password-confirm'>Confirm Password</label>
          <input
            required
            ref={passwordConfirmRef}
            id='password-confirm'
            type='password'
          />
        </section>
        <section className='button'>
          <button type='submit'>Sign Up</button>
        </section>
        <section className='prior-user'>
          <p>Already have an account? Login here</p>
        </section>
      </form>
    </main>
  );
};

export default SignUp;
