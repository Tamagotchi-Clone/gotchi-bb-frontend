import AuthForm from '../../components/Auth/AuthForm';
import '../../components/Auth/AuthForm.css';
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Auth({ isRegistering = false }) {
  return (
    <FadeIn>
      <div className="authBox">
        <AuthForm isRegistering={isRegistering} />
      </div>
    </FadeIn>
  );
}
