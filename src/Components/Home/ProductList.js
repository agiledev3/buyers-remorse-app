import React from "react";
import ListItem from "./ListItem";
import Pages from "../PageSelection/Pages";
import { Button } from "react-bootstrap";

//Renders a list of products
function ProductList(props) {
  //takes user to Edit page when clicking on Add button
  const handleAddClick = () => {
    props.changePage(Pages.EDIT_PRODUCT);
  };

  return (
    <div>
      {props.allProducts.map((product) => (
        <ListItem
          key={product.id}
          product={product}
          changePage={props.changePage}
          openNewQuestionModal={props.openNewQuestionModal}
          removeProduct={props.removeProduct}
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
