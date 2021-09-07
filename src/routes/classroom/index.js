import React, { useState, useEffect } from 'react';
import './index.css';
import { Row, Col, Container } from 'react-bootstrap';

function Classroom() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://run.mocky.io/v3/fb135cac-d439-4fa6-9673-4ccca69212b6")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.classroom)
                },
            )
    }, [])
    return (
        <>
            <div className="head">
                <h1>Classroom </h1>
            </div>
            <p><br /><br /></p>
            <Container>
                <Row>
                    {

                        items && items.map((x, idx) =>

                            <Col lg={4} md={12} sm={12} xs={12} className='set1' id="idx">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={x.link} frameBorder='10' allowFullScreen />
                                </div>
                                <p className='description'>{x.subject}</p>
                            </Col>


                        )

                    }
                </Row>
               
            </Container>

        </>
    )
}
export default Classroom;