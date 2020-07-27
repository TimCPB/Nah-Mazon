import React from 'react';
import Form from './Form';
import Profile from './Profile';
import Navbar from './Navbar';
import {
  // BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container center-align">
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
    </div>
  );
}

export default App;
