import React from "react";

const Home = (props) => {
  return (
    <div>
      <ul>
        {props.allProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
