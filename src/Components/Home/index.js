import React from "react";
import ProductList from "./ProductList";
import NewQuestionModal from "./NewQuestionModal.js";

const Home = (props) => {
  return (
    <React.Fragment>
      <ProductList
        allProducts={props.allProducts}
        changePage={props.changePage}
      />
      <NewQuestionModal question="This is a test question" />
    </React.Fragment>
  );
};

export default Home;
