import React from 'react';
import BusinessProfile from './components/BusinessProfile';
import ListAllItems from './components/ListAllItems'
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
          <Route path="/business-profile/:businessName">
            <BusinessProfile />
          </Route>
          <Route path="/list-items">
            <ListAllItems />
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
