import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import '../../components/Auth/AuthForm.css';

export default function Auth({ isRegistering = false }) {
  return (
    <div className="authBox">
      <AuthForm isRegistering={isRegistering} />
    </div>
  );
}
