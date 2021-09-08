	import React from 'react';
	
	import './App.css';
	
	import 'bootstrap/dist/css/bootstrap.css';
	
	import Image from 'react-bootstrap/Image'
	
	import nav_logo from './nav-logo.jpg';
	
	import {
		BrowserRouter,
		Switch,
		Route,	
		Link,
	} from "react-router-dom";
	import { HashRouter as Router } from 'react-router-dom'
	import {Navbar, Nav, Form, Button} from "react-bootstrap"
	
	import { Home } from './routes/home/Home';
	import { AboutUS } from './routes/aboutus';
	import { Learning } from './routes/Learning';
	import { School } from './routes/school';
	import CD from './routes/learningCD';
	import LinkLearning  from './routes/learningLink';
	import Ebook from './routes/ebook';
	import Ejournal from './routes/ejournal';
	import Classroom from './routes/classroom';
	
	
	function App() {
		return (
			<>
		  
			<Navbar  className = "navbarcss"  fixed="top"  expand="lg" variant="dark">

				<Navbar.Brand href="/"><Image src={nav_logo} height = "50px" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">

					<Nav className="ml-auto">

						<Link to="/">Home &nbsp;&nbsp;</Link>
						<Link to="/about">About &nbsp;&nbsp;</Link>
						<Link to="/learning">Learning Resource &nbsp;</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		
			
			<div className='body-section'>

				<Switch>

					<Route path="/about" exact>
						<AboutUS />
					</Route>


					<Route path = "/learning" exact>
						<Learning />
					</Route>
					
					<Route path="/learning/link" exact >
						<LinkLearning />
					</Route>
					
					<Route path = "/downloads" exact>
						<Downloads />
					</Route>
		
					<Route path = "/login" exact>
						<Login />
					</Route>
		
					<Route path="/learning/cd" excat>
						<CD />
					</Route>
					<Route path="/learning/ebook" exact>
						<Ebook />
					</Route>
					<Route path="/learning/ejournal" exact>
							<Ejournal/>
					</Route>
					<Route path="/learning/classroom" exact>
							<Classroom/>
					</Route>
					<Route path="/">
						<Home /> 
					</Route>
	
				</Switch>

			</div> 


			
			
			</>
		);
	}
export default App;  
		
function Downloads(){
	return(
		<div><h1>Downloads page</h1></div>
	)}
		
function Login(){
	return(
		<h1>login page</h1>
	)
}
				

						