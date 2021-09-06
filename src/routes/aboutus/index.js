import React from 'react';
import './index.css'
import {Link} from 'react-router-dom';
import {Button,Image,Row,Col,Container} from 'react-bootstrap';
import amarnath from './amarnath.png';
import david from './david.png';
import devnath from './devnath.png';
import ramya from './ramyag.jpg';
import shivappa from './Shivappa.jpg';
import first_img from './about.jpg';
import student from './pic.png';

export class AboutUS extends React.Component {
    render() {
        const team = [
            {
                title: "Dr. Johnson C. David",
                img: david
            },
            {
                title: "Mr. Amarnath",
                img: amarnath
            },
            {
                title: "Mr. Devanath P R",
                img: devnath
            },
            {
                title: "Ms. Ramya G",
                img: ramya
            },
            {
                title: "Mr. Shivappa",
                img: shivappa
            },

        ]
        return (
            <>
                <div className = "main-rectangle">
                    <Row>
                    <Col lg={6} md={6} xs={12}>
                        <h1 className = "heading">ABOUT DSU DIGITAL LIBRARY</h1>
                        <Image src={student} className = "d-lg-block d-md-block d-none student-image"/>    
                    </Col>
                    <Col lg={4} md={5} xs={12} className = "black-rectangle">
                        <Image src = {first_img}  className = "book-image"/>
                        <p className ="about-para">
                        <br/><br/>Books are chief instrument of Education and Library is center of intellectual life. <br/><br/>
                        </p>
                        <p className ="about-para">
                            Dayananda Sagar University is proud of good and comprehensive University Library with most modern facilities catering to the academic needs of the students and teaching community.<br/><br/>
                        </p>
                        <p className ="about-para">
                            The Library has a huge collection of books, along with CD's and DVD's apart from latest Journals and Periodicals, along with this access to e-resources is also available through the Digital Library ‘Think Centre’ systems.<br/> <br/>
                        </p>
                        <p className ="about-para">
                            DSU Digital Library Provides E-resources and other digital library services for users in a single search point. Reading books is an adequate remedy for students to relieve stress. When students read books they feel stress free and books take them to the world of imagination. Reading books inspire students and motivate them to change their life and they are highly charged with positive energy.
                        </p>
                    </Col>
                    </Row>
                </div>
                <Container fixed="true" >
                    <div className="team-black-rect">
                        <h1 className ="team-heading">Meet Our Team</h1>
                        
                    </div>
                    <div className="team-details">
                        <Row className="justify-content-md-center" >
                            {
                                team.map(({title, img}, index) => (
                                    <Col lg="2" md="auto" key={index} >
                                        <Image src={img} alt = {title} className = "team-image"fluid />
                                        <h4>{title}</h4>
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