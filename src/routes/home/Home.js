import React from 'react';

import './Home.css';

import home from './home.jpeg';
import about from './home-about.png';
import apsci from './Applied Science.png';
import arts from './Arts and Humanities.png';
import commerce from './Commerce.png';
import health from './Health Science.png';
import eng from './Enginnering.png'

import {Link} from 'react-router-dom';

import {Image,Button,Row,Col,Container} from 'react-bootstrap';


export class Home extends React.Component {
    render() {
        const courses = [
            {
                title: "Applied Science",
                img: apsci
            },
            {
                title: "Arts And Humanities",
                img: arts
            },
            {
                title: "Commerce",
                img: commerce
            },
            {
                title: "Health Science",
                img: health
            },
            {
                title: "Engineering",
                img: eng
            },

        ]
        return (
            <>
                <div className="container-fluid home-first-section">
                    <Image src={home} className="home-bg-img" />
                    <h1 className ="welcoMessageCss">WELCOME TO DSU DIGITAL LIBRARY</h1>
                </div>
                <Container>
                    <Row className = "home-about">
                        
                        <Col lg={6} md={12} xs={12}>
                            <Image   src={about} alt="" fluid/>
                        </Col>
                
                        <Col lg={6} md={12} xs={12}>
                            <h3>About DSU Digital Library</h3>
                            <p >Books are chief instrument of Education and Library is center of intellectual life so the Dayananda Sagar University is proud of good and comprehensive University Library with most modern facilities catering to the academic needs of the students and teaching community. The Library has a huge collection of books, along with CD's and DVD's apart from latest Journals and Periodicals, along with this access to e-resources is also available through the Digital Library 'Think Centre' systems. DSU Digital Library Provides E-resources and other digital library services for users in a single search point.<br/><br/> 
                                <Link to ="/about">
                                    <Button  >Read More</Button>
                                </Link>
                            </p>
                        </Col>
                
                    </Row>
                </Container>
            
            
          
                <Container fixed="true" >
                    <div className="home-school-Recatngle">
                        <h1 className ="school_text">OUR SCHOOLS</h1>
                        <h4 className ="school_text">CHECK OUT ALL OUR PROFESSIONAL COURSES HERE</h4>
                    </div>
                    <div className="school-discription">
                        <Row className="justify-content-md-center" >
                            {
                                courses.map(({title, img}, index) => (
                                    <Col lg="2" md="auto" key={index} className = "schools">
                                        <Image src={img} alt = {title} className ="home-school-image" fluid />
                                        <p><br/></p>
                                        <Link to = "/schools">
                                            <Button  href="/schools" >Learn More</Button>
                                        </Link>
                                        <p><br/></p>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                
                </Container>
           
            </> 
        )
    }
}



          
        
      
      