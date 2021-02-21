import React from "react";
import ProductList from './ProductList'

const Home = (props) => {
  return (
    <ProductList allProducts={props.allProducts} 
                 changePage={props.changePage} 
                 setCurrentProduct={props.setCurrentProduct}/>
  );
};

export default Home;
