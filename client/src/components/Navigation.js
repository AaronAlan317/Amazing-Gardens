import React from 'react';

import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const navStyle={
   backgroundColor:"#F4F1BB"

}

const Navigation = () => {
    return (
      
       <Navbar collapseOnSelect  expand='sm'  variant='light' style={navStyle}>
         <Container >
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
               <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/apps">Apps</Nav.Link>
                  {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
               </Nav>
            </Navbar.Collapse>
         </Container>
       </Navbar>
      
    );
}
 
export default Navigation;