//import { useState } from "react";

import PageSelection from "./Components/PageSelection/PageSelection.js";
import { Products, TestSource } from "./Products";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const products = new Products(TestSource);

function App() {
  const allProducts = products.getAll();
  const createProduct = products.create.bind(products);
  const updateProduct = products.update.bind(products);
  return (
    <Container>
      <header>
        <PageSelection
          pages={App.pages}
          allProducts={allProducts}
          createProduct={createProduct}
          updateProduct={updateProduct}
        />
      </header>
    </Container>
  );
}

App.pages = { HOME: "HOME", EDIT_PRODUCT: "EDIT_PRODUCT" };

export default App;
