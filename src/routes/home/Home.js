import React from 'react';
import home from './home.jpeg';
import {Image} from 'react-bootstrap'
import './Home.css';

export class Home extends React.Component {
    render() {
        return (
            <>
            <div className="container-fluid home-first-section">
                <Image src={home} className="home-bg-img" />
                <h1 className ="welcoMessageCss">WELCOME TO DSU DIGITAL LIBRARY</h1>
            </div>
            <div className="container-fluid" >
                <p>df</p>
            </div>
            </> 
        )
    }
}