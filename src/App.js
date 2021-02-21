import { useState } from "react";

import PageSelection from "./Components/PageSelection/PageSelection.js";
import { Products, LocalStorageSource, TestSource } from "./Products";
import DateService from "./Utils/DateService";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const products =
  process.env.NODE_ENV !== 'test'
    ? new Products(LocalStorageSource, new DateService())
    : new Products(TestSource, new DateService());
function App() {
  const [allProducts, setAllProducts] = useState(products.getAll());
  const [currentProduct, setCurrentProduct] = useState(null);

  const createProduct = (product) => {
    products.create.bind(products)(product);
    setAllProducts(products.getAll());
  };
  const updateProduct = (productId, product) => {
    products.update.bind(products)(productId, product);
    setAllProducts(products.getAll());
  };

  return (
    <Container>
      <header>
        <PageSelection
          pages={App.pages}
          allProducts={allProducts}
          createProduct={createProduct}
          updateProduct={updateProduct}
          setCurrentProduct={setCurrentProduct}
          currentProduct={currentProduct}
        />
      </header>
    </Container>
  );
}

App.pages = { HOME: "HOME", EDIT_PRODUCT: "EDIT_PRODUCT" };

export default App;
