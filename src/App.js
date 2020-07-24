import React from 'react';
import Form from './Form';
import Profile from './Profile';
import {
  // BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App container">
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <h1>Welcome to Nah'mazon</h1>
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
