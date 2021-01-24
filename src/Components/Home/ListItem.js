import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row, Button, Badge } from 'react-bootstrap'

function ListItem(prop) {
    const { id, name, daysLeft, likeCount } = prop.product;

    return (
        <Card className="p-3">
             <Card.Title>{name}</Card.Title>
             <Row>
                <Col>
                    <i className="far fa-clock"></i> {daysLeft} days left
                </Col>
                <Col className="text-right">
                    <Button variant="outline-dark"><i className="fas fa-pen" ></i></Button>
                    <Link to={`/product/${id}`}>
                        <Button variant="outline-dark" style={{paddingLeft:'0.55em', paddingRight:'0.2em'}}>
                            <i className="fas fa-thumbs-up"></i>
                            <sup><Badge variant="light">{likeCount}</Badge></sup>
                        </Button>
                    </Link>
                    <Button variant="outline-dark"><i className="fas fa-trash-alt" ></i></Button>
                </Col>
            </Row>
        </Card>        
    )
}

export default ListItem
