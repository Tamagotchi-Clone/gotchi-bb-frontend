import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';

export default function Auth({ isRegistering = false }) {
  return (
    <div>
      <h1>{isRegistering ? 'Create An Account' : 'Login'}</h1>

      <AuthForm isRegistering={isRegistering} />
    </div>
  );
}
