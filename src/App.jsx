import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Pet from './views/Pet/Pet';
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
          <Route exact path="/pets/:id">
            <Pet />
          </Route>
          <Route exact path="/choosepet">
            <ChoosePet />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
