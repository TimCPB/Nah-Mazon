import React from 'react';
import Form from './Form';
import Profile from './Profile';
import ListProducts from './ListProducts'
import {
  // BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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
            <Form />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
