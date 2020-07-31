import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div>
				<button className='btn'>
					<Link className='white-text' to='/create-profile'>
						Business Centre
					</Link>
					<br></br>
				</button>
				<button className='btn'>
					<Link className='white-text' to='/list-items'>
						View Items
					</Link>
				</button>
			</div>
		);
	}
}

export default Home;
