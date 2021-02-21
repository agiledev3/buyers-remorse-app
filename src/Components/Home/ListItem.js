import React from "react";
import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import Pages from "../PageSelection/Pages";

function ListItem(props) {
  const { id, name, daysLeft, questions } = props.product;

    const handleEditClick = () => {
        props.changePage(Pages.EDIT_PRODUCT)
        props.setCurrentProduct(props.product)
    }

  return (
    <Card className="p-3" id={id} key={id}>
      <Card.Title>{name}</Card.Title>
      <Row>
        <Col>
          {daysLeft === 0 ? (
            <Button variant="btn btn-outline-success" className="px-3">
              <i className="fas fa-minus-circle"></i> Forget
            </Button>
          ) : (
            <span>
              <i className="far fa-clock"></i> {daysLeft} days left
            </span>
          )}
        </Col>
        <Col className="text-right">
          <Button
            variant="outline-secondary"
            title="Edit product"
            onClick={handleEditClick}
          >
            <i className="fas fa-pen"></i>
          </Button>
          <Button
            variant="success"
            onClick={() => props.openNewQuestionModal(props.product)}
            style={{
              paddingLeft: "0.55em",
              paddingRight: "0.2em",
              marginLeft: "0.3em",
            }}
          >
            <i className="fas fa-thumbs-up"></i>
            <sup>
              <Badge variant="light">
                {(questions && Object.entries(questions).length) || 0}
              </Badge>
            </sup>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default ListItem;
