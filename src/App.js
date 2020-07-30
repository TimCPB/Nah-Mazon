import React from "react";
import CreateBusinessProfile from "./components/CreateBusinessProfile";
import BusinessProfile from "./components/BusinessProfile";
import ListAllItems from "./components/ListAllItems";
import SellersProfile from "./components/SellersProfile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateItem from "./components/CreateItem";

function App() {
	return (
		<div className='App'>
			<div className='container center-align'>
				<BrowserRouter>
					<Switch>
						<Route path='/create-profile'>
							<CreateBusinessProfile />
						</Route>
						<Route path='/business-profile/:id'>
							<BusinessProfile />
						</Route>
						<Route path='/list-items'>
							<ListAllItems />
						</Route>
						<Route path='/sellers-profile/:id'>
							<SellersProfile />
						</Route>
						<Route path='/'>
							<h1>Welcome to Not Amazon</h1>
							<CreateItem />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
