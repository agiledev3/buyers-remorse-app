import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./Components/Home";
import { Products, TestSource } from "./Products";

const products = new Products(TestSource);

function App() {
  const [activePage, setActivePage] = useState(App.pages.HOME);
  const allProducts = products.getAll();
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {activePage === App.pages.HOME && (
            <Home allProducts={allProducts} changePage={setActivePage} />
          )}
        </header>
      </div>
    </Router>
  );
}

App.pages = { HOME: "HOME", EDIT_PRODUCT: "EDIT_PRODUCT" };

export default App;
