import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signIn, signUp } from '../../services/users';

export default function AuthForm({ isRegistering }) {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { user, setUser, loading } = useUser();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await signUp({
          username: formState.username,
          password: formState.password,
        });
        history.push('/login');
      } else {
        let resp = await signIn({
          username: formState.username,
          password: formState.password,
        });
        setUser(resp);
        window.location.replace('/pets');
      }
    } catch (error) {
      setErrorMsg('Invalid username or password, please try again!');
    }
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      {errorMsg ? <p>{errorMsg}</p> : ''}
      {isRegistering && <h1>Sign Up</h1>}

      <input
        type="text"
        placeholder="Username"
        value={formState.username}
        onChange={(e) =>
          setFormState({ ...formState, username: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={formState.password}
        onChange={(e) =>
          setFormState({ ...formState, password: e.target.value })
        }
      />

      <button type="submit">{isRegistering ? 'Sign Up' : 'Login'}</button>
    </form>
  );
}
