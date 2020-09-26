import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainPageComponent from './MainPage/MainPageComponent'
import UploadComponent from './UploadPage/UploadComponent'

import { Link, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import DisplayComponent from './DisplayComponent/DisplayComponent';

function App() {
	return (
		<Container fluid className="main-body">
			{/* <Navbar className="bg-primary">
				<Link to="/">Home</Link>
			</Navbar> */}
			<Container fluid className="h-100 d-flex">
				<Switch>
					<Route path="/upload">
						<UploadComponent/>
					</Route>
					<Route path="/display">
						<DisplayComponent/>
					</Route>
					<Route path="/" exact={true}>
						<MainPageComponent/>
					</Route>
				</Switch>
			</Container>
		</Container>
	);
}

export default App;
