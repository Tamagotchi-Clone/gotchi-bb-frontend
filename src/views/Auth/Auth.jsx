import React, { useState } from 'react';
import { signIn } from '../../services/users';

export default function Auth({ setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'signin'
          ? await signIn(username, password)
          : await signUp(username, password);
      setCurrentUser(resp);
      history.push('/pets');
    } catch (e) {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return <div>Auth</div>;
}
