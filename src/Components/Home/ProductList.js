import React from "react";
import ListItem from "./ListItem";
import Pages from "../PageSelection/Pages";
import { Card, Col, Row, Button } from "react-bootstrap";

function ProductList(props) {

    const handleAddClick = () => {
        props.changePage(Pages.EDIT_PRODUCT)
    }

  return (
    <div>
      <Card className="p-2">
        <Card.Title className="text-center">
          <Row>
            <Col sm={{ span: 2 }}></Col>
            <Col sm={{ span: 8 }}>Buyer's regret</Col>
            <Col sm={{ span: 2 }} style={{ fontSize: "2em" }}>
              <i className="far fa-user-circle align-middle"></i>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 2 }}></Col>
            <Col sm={{ span: 8 }}>My wishlist</Col>
            <Col sm={{ span: 2 }}></Col>
          </Row>
        </Card.Title>
      </Card>
      {props.allProducts.map((product) => (
        <ListItem
          key={product.id}
          product={product}
          changePage={props.changePage}
          openNewQuestionModal={props.openNewQuestionModal}
          setCurrentProduct={props.setCurrentProduct}
        />
      ))}
      <Button
        variant="primary"
        className="float-right my-3"
        title="Add new product"
        onClick={handleAddClick}
      >
        <i className="fas fa-plus"></i>
      </Button>
    </div>
  );
}

export default ProductList;
