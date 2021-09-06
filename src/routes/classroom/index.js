import React, { useState, useEffect } from 'react';
import './index.css';
import { Row, Col, Container } from 'react-bootstrap';

function Classroom() {
   
    return (
        <>
            <div className="head">
                <h1>Classroom </h1>
            </div>
            <p><br /><br /></p>
            <Container>
                <Row>
                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                </Row>

                <Row>
                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                </Row>

                <Row>
                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                    <Col lg={4} md={12} sm={12} xs={12} className='set1'>

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" frameBorder='10' allowFullScreen></iframe>
                        </div>
                        <p className='description'>Applied Science</p>
                    </Col>

                </Row>
            </Container>

        </>
    )
}
export default Classroom;