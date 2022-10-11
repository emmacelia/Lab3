import logo from './logo.svg';
import './App.css';
import React from 'react';

//import bootstap for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './Components/content';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Read } from './Components/read';
import { Create } from './Components/create';
//imports for navigation bar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Container from 'react-bootstrap/Container';
//imports browser router so we can go betwwen different components
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  //render method
  render() {


    //return method
    return (

      <Router>
        <div className="App">
          {/* adds the dark Nav bar to the top of the webpage */}
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Menu</Navbar.Brand>
              <Nav className="me-auto">
                {/* Adds the name to the navigation bar */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                <Nav.Link href="/footer">Footer</Nav.Link>


              </Nav>
            </Container>
          </Navbar>
          <Routes>
            {/* Routes the paths to display the content,header, footer  */}
            <Route path='/' element={<Content />}></Route>
            <Route path='/Footer' element={<Footer />}></Route>
            <Route path='/read' element={<Read />}></Route>
            <Route path='/create' element={<Create />}></Route>
          </Routes>

          <header className="App-header">

            {/* <Content></Content>
              <Header></Header>
              <Footer></Footer>
         */}
          </header>
        </div>
      </Router>
    );
  }



}


export default App;
