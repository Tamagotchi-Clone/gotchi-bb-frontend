import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { UserProvider, useUser } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Pet from './views/Pet/Pet';
import Profile from './views/Profile/Profile';
import ChoosePet from './views/ChoosePet/ChoosePet';

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
          <Route exact path="/pet"></Route>

          <Route exact path="/pets/:id">
            <Pet />
          </Route>
          <Route exact path="/choosepet">
            <ChoosePet />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
