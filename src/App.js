import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';

// creates a fixed width container using Bootstrap in div.container
// add a Navbar inside the container that fits to the container width 
// using attribute 'fluid'
// use Link component from React-Router to handle link to app's homepage
// (w/o forcing browser to refresh)
// Routes is after Navbar (part below bar will change to diff component like homepage)
// NavItem - adds links
// Navbar.Collapse - ensures the 2 links collapse on mobile view
// Navbar.Brand - place to put navbar logo/text
// Navbar.Toggle
// Navbar.Header
// stop refresh when click on links - React Router Bootstrap
//       can wrap around navbar links and use React Router to route
//       the app to required link w/o refresh browser
function App() {
  return (
    <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem href="/signup">Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem href="/login">Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        <Routes />
    </div>
  );
}

export default App;
