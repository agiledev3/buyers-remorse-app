//import { useState } from "react";

import PageSelection from "./Components/PageSelection/PageSelection.js"
import { Products, TestSource } from "./Products";

import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

const products = new Products(TestSource);

function App() {
  {/* const [activePage, setActivePage] = useState(App.pages.HOME); */}
  const allProducts = products.getAll();
  return (
    <Container>
      <header>
        <PageSelection pages={App.pages} allProducts={allProducts}/>
      </header>
    </Container>
  );
}

App.pages = { HOME: "HOME", EDIT_PRODUCT: "EDIT_PRODUCT" };

export default App;
