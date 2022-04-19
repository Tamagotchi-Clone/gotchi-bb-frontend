import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './views/Auth/Auth';
import Pet from './views/Pet/Pet';
import Settings from './views/Settings/Settings';
import ChoosePet from './views/ChoosePet/ChoosePet';
import './App.css';
import Home from './views/Home/Home';
import Loading from './views/Loading/Loading';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route exact path="/pet">
            <Loading />
          </Route>

          <PrivateRoute exact path="/pet/:id">
            <Pet />
          </PrivateRoute>
          <PrivateRoute exact path="/choosepet">
            <ChoosePet />
          </PrivateRoute>
          <PrivateRoute exact path="/pets/:id/edit">
            <Settings />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
