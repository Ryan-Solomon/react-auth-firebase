import React, { useRef } from 'react';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <main className='form-container'>
      <form>
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
