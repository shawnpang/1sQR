import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainPageComponent from './MainPage/MainPageComponent'
import UploadPageComponent from './UploadPage/UploadPageComponent';

import { Link, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function App() {
	return (
		<Container fluid className="main-body">
			<Navbar className="bg-primary">
				<Link to="/">Home</Link>
			</Navbar>
			<Container fluid className="h-100 d-flex">
				<Switch>
					<Route path="/upload">
						<UploadPageComponent></UploadPageComponent>
					</Route>
					<Route path="/">
						<MainPageComponent></MainPageComponent>
					</Route>
				</Switch>
			</Container>
		</Container>
	);
}

export default App;
