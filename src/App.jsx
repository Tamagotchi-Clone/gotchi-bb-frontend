import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './views/Auth/Auth';
import Pet from './views/Pet/Pet';
import Profile from './views/Profile/Profile';
import ChoosePet from './views/ChoosePet/ChoosePet';
import Bot from './components/Bot/Bot';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
            {/* <Bot /> */}
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

          <PrivateRoute exact path="/pets/:id">
            <Pet />
          </PrivateRoute>
          <PrivateRoute exact path="/choosepet">
            <ChoosePet />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
