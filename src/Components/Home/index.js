import React from "react";

const Home = (props) => {
  return (
    <div>
      <ul>
        {props.allProducts.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
