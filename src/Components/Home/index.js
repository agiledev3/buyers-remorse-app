import React from "react";
import ProductList from './ProductList'

const Home = (props) => {
  return (
    <ProductList allProducts={props.allProducts} changePage={props.changePage}/>
  );
};

export default Home;
