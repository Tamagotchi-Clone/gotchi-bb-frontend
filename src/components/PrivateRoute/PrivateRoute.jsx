import { useUser } from '../../context/UserContext';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...props }) {
  const { user, loading } = useUser();
  if (loading) return <span className="loader"></span>;
  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    ></Route>
  );
}
