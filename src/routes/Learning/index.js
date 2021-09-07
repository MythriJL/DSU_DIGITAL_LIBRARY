import React from 'react';
import Classroom from './Classroom.png'
import Knimbus from './KNIMBUS.png'
import Cds from './Cds.png'
import Corporate from './Corporate.png'
import Access from './Access.jpg'
import Nptl from './nptl.jpg'
import Dspace from './Dspace.png'
import link from './Link.png'
import Ebook from './Ebook.png'
import National from './national.png'
import Opac from './OPAC.png'
import Ejournals from './ejournals.jpg'
import Moodle from './Moodle.jpeg';
import Database from './database.png';
import Digimat from './digimat.jpeg';
import { Link, } from "react-router-dom";
import { Image } from 'react-bootstrap'
import { Row, Col, Container } from 'react-bootstrap';

import './index.css';

export class Learning extends React.Component {

    render() {
        return (
            <>
                <div className="head">
                    <h1>Learning Resources </h1>
                </div>
                <br></br>
                <Container>
                    <Row>


                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <Link to="learning/classroom">
                                <Image src={Classroom} alt="Classroom" className="home-learning-image" fluid />
                            </Link>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >


                            <a href='https://www.digimat.in/'>
                                <Image src={Digimat} alt="digimat" className="home-learning-image" fluid />
                            </a>

                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <Link to="/learning/cd">
                                <Image src={Cds} alt="Cds" className="home-learning-image" fluid />
                            </Link>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <a href='https://moodle.org/'>
                                <Image src={Moodle} alt="Moodle" className="home-learning-image" fluid />
                            </a>

                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <a href='https://www.knimbus.com/'>
                                <Image src={Knimbus} alt="Knimbus" className="home-learning-image" fluid />
                            </a>

                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <a href='https://nptel.ac.in/'>
                                <Image src={Nptl} alt="Nptl" className="home-learning-image" fluid />
                            </a>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >

                            <a href='https://duraspace.org/dspace/'>
                                <Image src={Dspace} alt="Dspace" className="home-learning-image" fluid />
                            </a>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <Link to="/learning/link">
                                <Image src={link} alt="Link" className="home-learning-image" fluid />
                            </Link>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >

                            <Link to="learning/ebook">
                                <Image src={Ebook} alt="Ebook" className="home-learning-image" fluid />
                            </Link>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <a href='https://ndl.iitkgp.ac.in/'>
                                <Image src={National} alt="National" className="home-learning-image" fluid />
                            </a>
                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >
                            <a href="https://opac.app/en/">
                                <Image src={Opac} alt="Opac" className="home-learning" fluid />
                            </a>

                        </Col>
                        <Col lg={4} md={12} sm={12} xs={12} className='set1' >

                            <Link to="learning/ejournal">
                                <Image src={Ejournals} alt="Ejournals" className="home-learning-image" fluid />
                            </Link>
                        </Col>
                        




                    </Row>

                </Container>






            </>
        )

    }
}
export default Learning;


