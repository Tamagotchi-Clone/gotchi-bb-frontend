import { useUser } from '../../context/userContext';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...props }) {
  const { user } = useUser();

  return (
    <Route
      {...props}
      render={({ location }) =>
        user.username ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    ></Route>
  );
}
