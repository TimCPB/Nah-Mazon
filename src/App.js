import React from 'react';
import Profile from './Profile';
import ListProducts from './ListProducts'
import {
  Switch,
  Route
} from "react-router-dom";
import CreateItem from './components/CreateItem';


function App() {
  return (
    <div className="App">
      <div className="container center-align">
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/list-products">
            <ListProducts />
          </Route>
          <Route path="/">
            <h1>Welcome to Nah'mazon</h1>
            <CreateItem />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
