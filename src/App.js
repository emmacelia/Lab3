import logo from './logo.svg';
import './App.css';
import React from 'react';

//import bootstap for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './Components/content';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

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
              <Navbar.Brand href="#home">Menu</Navbar.Brand>
              <Nav className="me-auto">
                {/* Adds the name to the navigation bar */}
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/Read">Read</Nav.Link>
                <Nav.Link href="/Create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            {/* Routes the paths to display the content,header, footer  */}
            <Route path='/home' element={<Content />}></Route>
            <Route path='/Read' element={<Header />} />
            <Route path='/Create' element={<Footer />}>
            </Route>
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
