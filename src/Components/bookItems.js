//import react
import React from "react";
import { Card } from "react-bootstrap";

//import nav bar 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//extends the react component 
export class BookItems extends React.Component {
    //render method
    render() {
        return (
            //displays the message 
            //Puts card around the title
            //displays the image of the book
            <div>
                
                <Card>
                    <Card.Body>{this.props.books.title}</Card.Body>
                </Card>

                <img src={this.props.books.thumbnailUrl}></img>
            </div>
        );
    }
}