import React from "react";
import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import Pages from "../PageSelection/Pages";

function ListItem(props) {
  const { id, name, daysLeft, likeCount } = props.product;

  const handleEditClick = () => {
    props.changePage(Pages.EDIT_PRODUCT);
    props.setCurrentProduct(props.product);
  };

  const canBuy = daysLeft === 0;

  return (
    <Card className="p-3" id={id} key={id}>
      <Card.Title>{name}</Card.Title>
      <Row>
        <Col xs={{ span: 4 }}>
          <Button
            variant="btn btn-outline-success"
            className="px-4"
            onClick={() => props.removeProduct(props.product, true)}
          >
            <i className="far fa-thumbs-up"></i> Forget
          </Button>
        </Col>
        <Col xs={{ span: 8 }} className="text-right">
          <Button
            variant="outline-danger"
            title="Buy product"
            className="px-3 mb-1 mx-1"
            onClick={() => props.removeProduct(props.product, false)}
            disabled={!canBuy}
          >
            <i className="fas fa-shopping-cart"></i>{" "}
            {canBuy ? "Buy" : daysLeft + " days to unlock"}
          </Button>
          <Button
            variant="outline-secondary"
            title="Edit product"
            onClick={handleEditClick}
            className="mb-1"
          >
            <i className="fas fa-pen"></i>
          </Button>
          <Button
            variant="success"
            onClick={() => props.openNewQuestionModal(props.product)}
            className="px-2 mb-1 ml-1"
          >
            <i className="fas fa-question-circle"></i>
            <sup>
              <Badge variant="light">{likeCount}</Badge>
            </sup>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default ListItem;
