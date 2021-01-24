import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./Components/Home";
import { Products, TestSource } from "./Products";

import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

const products = new Products(TestSource);

function App() {
  const [activePage, setActivePage] = useState(App.pages.HOME);
  const allProducts = products.getAll();
  return (
    <Router>
      <Container>
        <header>
          {activePage === App.pages.HOME && (
            <Home allProducts={allProducts} changePage={setActivePage} />
          )}
        </header>
      </Container>
    </Router>
  );
}

App.pages = { HOME: "HOME", EDIT_PRODUCT: "EDIT_PRODUCT" };

export default App;
