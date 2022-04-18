import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import styles from '../../components/Auth/AuthForm.css';
const { authBox } = styles;

export default function Auth({ isRegistering = false }) {
  return (
    <div className={authBox}>
      <AuthForm isRegistering={isRegistering} />
    </div>
  );
}
