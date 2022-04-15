import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Pet from './views/Pet/Pet';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}
