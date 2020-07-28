import React from 'react';
import home from './home.jpeg';
import about from './home-about.png';
import {Image,Button,Row,Col,Container,Media} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Home.css';
import { AboutUS } from '../aboutus/index';

export class Home extends React.Component {
    render() {
        return (
            <>
            <div className="container-fluid home-first-section">
                <Image src={home} className="home-bg-img" />
                <h1 className ="welcoMessageCss">WELCOME TO DSU DIGITAL LIBRARY</h1>
            </div>
            <Container fluid>
                <Row className = "home-about">
                
                
                <Col lg={6} md={12} xs={12}>
                <Image   src={about} alt="" fluid/>
                </Col>
                
                
                <Col lg={6} md={12} xs={12}>
                    <h3>About DSU Digital Library</h3>
                    <p >Books are chief instrument of Education and Library is center of intellectual life so the Dayananda Sagar University is proud of good and comprehensive University Library with most modern facilities catering to the academic needs of the students and teaching community. The Library has a huge collection of books, along with CD's and DVD's apart from latest Journals and Periodicals, along with this access to e-resources is also available through the Digital Library 'Think Centre' systems. DSU Digital Library Provides E-resources and other digital library services for users in a single search point.<br/><br/> <Button type="button"  class="btn btn-outline-dark" href="/about" >Read More</Button></p>
                </Col>
                
                </Row>
            </Container>
            <Switch>
              <Route path="/about">
                <AboutUS />
              </Route>
            </Switch>
            </> 
        )
    }
}