import React, { useState, useEffect } from 'react';
import './index.css'
import Collapsible from 'react-collapsible';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function LinkLearning() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://run.mocky.io/v3/03bcef59-e14f-4e4e-99f3-bd7976ee6e64")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.CD)
                },
            )
    }, [])

    return (
        <>
            <div className="head">
                <h1>LINKS </h1>
            </div>
            <p><br /><br /></p>
            {
                items && items.map((x, idx) =>
                    <Row className="collaps" key={idx}>
                        <Col>

                            <Collapsible trigger={x.trigger}>
                                <Table striped bordered hover variant="light" responsive>
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>URL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            x.items && x.items.map((n, idx) =>
                                                <tr key={idx}>
                                                    <td>{n.description}</td>
                                                    <td>{n.link}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </Collapsible>
                        </Col>
                    </Row>

                )

            }





        </>
    )
}
export default LinkLearning;