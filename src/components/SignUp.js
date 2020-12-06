import React, { useRef } from 'react';
import { useAuthContext } from '../context/authContext';

const SignUp = () => {
  const { signup } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password don't match");
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create account');
    }
    setLoading(false);
  };

  if (error.length > 1) {
    return <h1>Oh No</h1>;
  }

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
