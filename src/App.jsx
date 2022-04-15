import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { UserProvider, useUser } from './context/userContext';
import Auth from './views/Auth/Auth';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/signup">
            <Auth isRegistering />
          </Route>
          <PrivateRoute exact path="/pets">
            <h1>pets</h1>
          </PrivateRoute>
          <Route exact path="/choosepet"></Route>
          <Route exact path="/pet"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
