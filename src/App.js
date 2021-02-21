import { useState } from "react";

import PageSelection from "./Components/PageSelection/PageSelection.js";
import { Products, LocalStorageSource, TestSource } from "./Products";
import DateService from "./Utils/DateService";
import { PwaPrompt } from "./Components/PwaPrompt";

import { Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const products =
  process.env.NODE_ENV !== "test"
    ? new Products(LocalStorageSource, new DateService())
    : new Products(TestSource.initialize(), new DateService());
function App() {
  const [allProducts, setAllProducts] = useState(products.getAll());
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showForgetAlert, setShowForgetAlert] = useState(false);

  const createProduct = (product) => {
    products.create.bind(products)(product);
    setAllProducts(products.getAll());
  };
  const updateProduct = (productId, product) => {
    products.update.bind(products)(productId, product);
    setAllProducts(products.getAll());
  };
  const removeProduct = (product) => {
    products.remove.bind(products)(product.id);
    setAllProducts(products.getAll());
    setShowForgetAlert(true);
    setTimeout(() => {
      setShowForgetAlert(false);
    }, 2000);
  };
  const increaseLikeCount = (productId) => {
    products.increaseLikeCount.bind(products)(productId);
    setAllProducts(products.getAll());
  };

  return (
    <Container>
      <PwaPrompt />
      <header>
        <PageSelection
          pages={App.pages}
          allProducts={allProducts}
          createProduct={createProduct}
          removeProduct={removeProduct}
          updateProduct={updateProduct}
          increaseLikeCount={increaseLikeCount}
          setCurrentProduct={setCurrentProduct}
          currentProduct={currentProduct}
        />
      </header>
      <Alert show={showForgetAlert} variant="success" className="my-1">
        <p>The product has been removed from the list. Good job!</p>
      </Alert>
    </Container>
  );
}

App.pages = { HOME: "HOME", EDIT_PRODUCT: "EDIT_PRODUCT" };

export default App;
