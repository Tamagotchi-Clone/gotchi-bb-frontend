export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="signin"></Route>
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
