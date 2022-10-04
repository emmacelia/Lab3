//import react
import React from "react";
//import nav bar 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//extends the react component 
export class Header extends React.Component {
//render method
    render() {
        return (

            //displays the message 
            <div>
                <h1> In header from another component </h1>

            </div>
        );
    }
}