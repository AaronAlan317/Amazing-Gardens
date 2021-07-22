import { colors } from '@material-ui/core';
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './styles.css'
import { NavLink } from 'react-router-dom';

const homeStyle = {
    marginLeft: '10px',
  };
const body ={
    padding: '100px'
}
const div={
    backgroundColor: '#DBF9FC',
    marginTop: '10px', 
    padding: '10px',
    borderRadius: '25px'
}

const home = () => {
    return (
        <Container >
            <Row>
                <Col>
                <Card   >
                <Card.Body>
                
                <Card.Text>
                        
                
                <p>Planning and growing a garden seems easy enough, 
                    just scatter some seeds and water, right?</p>
                <p>It can be frustrating after spending time to prep space only to realize that the space 
                    gets very limited sun light, or the peppers you planted actually was
                    planted too late or does not even grow well in your area. </p>
                <p>Once your garden is growing, you slowly start growing your collection of seeds and plants, and
                    keeping track of where and when of you plant can be tedious and require more work
                    than what you may want to put in, but keeping track of all this information can 
                    take your garden from being an ok garden to an AMAZING GARDEN. </p>
                <p>Here are some tools to help you take your gardening to the next level.</p>
                </Card.Text>
                <NavLink className="btn-primary" to="/apps" >Apps</NavLink>
                </Card.Body>
            </Card> 
                
                </Col>
            </Row>
        
        
        </Container>
    
    );
}
 
export default home;