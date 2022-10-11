//import react
import React from "react";
import { BookItems } from './bookItems';
//import nav bar 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//extends the react component 
export class Books extends React.Component {
    //render method
    render() {
        //New method called mapping which allows us to display the book items 
        return this.props.books.map(
            (books) => {

                //Displays book items 
                return <BookItems books={books}></BookItems>
            }

        );
    }
}