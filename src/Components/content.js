//imports for react 
import React from "react";
//imports for nav bar 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//extending contents 
export class Content extends React.Component {

//render method
    render() {
        return (
            <div>
                {/* Displays the words */}
                <h1> Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}