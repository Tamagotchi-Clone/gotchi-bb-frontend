import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pet from './views/Pet/Pet';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import ChoosePet from './views/ChoosePet/ChoosePet';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/choosepet">
            <ChoosePet />
          </Route>
          <Route exact path="/pet">
            <Pet />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
