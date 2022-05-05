import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { signIn, signUp } from '../../services/users';
import './AuthForm.css';

export default function AuthForm({ isRegistering }) {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await signUp({
          username: formState.username,
          password: formState.password,
        });
        window.location.replace('/login');
      } else {
        let resp = await signIn({
          username: formState.username,
          password: formState.password,
        });
        setUser(resp);
        window.location.replace(`/pet`);
      }
    } catch (error) {
      if (isRegistering) {
        setErrorMsg('This username is already taken.');
      } else {
        setErrorMsg('Invalid username and/or password, please try again!');
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {isRegistering ? <h1>Sign Up</h1> : <h1>Login</h1>}

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
      <p>{errorMsg}</p>
    </form>
  );
}
