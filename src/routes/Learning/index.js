import React from 'react';
import './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    
  } from "react-router-dom";



import { Button, Row,Col } from 'react-bootstrap';


export class Learning extends React.Component {
    render() {
        return (
            <>
            <div>
                <Row>
                <Col lg = "6" md ="12" xs = "12" >
                    <Link to="/learning/link">
                        <Button >Link</Button>
                    </Link>
                </Col>
                <Col lg = "6" md ="12" xs = "12">
                    <Button  href="/about" >CD</Button>
                </Col>
                </Row>
            </div>
            
            
        </>
        )
    }
}