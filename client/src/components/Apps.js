import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import useStyles from '../styles';
import './styles.css'
import data from  './data/data.json'


const  newdata= data.map( ( data) =>{
    
    return  (
    <Container >
        <Row >
            <Col >
            <Card key= {data.id}  >
                <Card.Body>
                <Card.Title>{ data.name}</Card.Title>
                <Card.Text>
                        {data.desc}
                </Card.Text>
                <NavLink className="btn-primary" to={data.url} >{data.btnText}</NavLink>
                </Card.Body>
            </Card> 
            </Col>
        </Row>
    </Container>
    )
}
)

const AppsComponent = () => {
        return (
            <Container >{newdata} </Container>
           
        )
    
}


export default AppsComponent;