import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App acceptance tests", () => {
  describe("when rendering the product list", () => {
    beforeEach(() => {
      render(<App />);
    });

    test("if it renders the first product", () => {
      const productItem = screen.getByText(/First product/i);
      expect(productItem).toBeInTheDocument();
    });

    test("if it renders the second product", () => {
      const productItem = screen.getByText(/Second product/i);
      expect(productItem).toBeInTheDocument();
    });

    test("if it renders the third product", () => {
      const productItem = screen.getByText(/Third product/i);
      expect(productItem).toBeInTheDocument();
    });

    describe("when the button to add a new product is clicked", () => {
      beforeEach(() => {
        const addNewProductButton = screen.getByTitle(/Add new product/i);
        addNewProductButton.click();
      });

      test("if it renders edit product title", () => {
        const editPageTitle = screen.getByText(/Edit product/i);
        expect(editPageTitle).toBeInTheDocument();
      });

      describe("when typing product details and saving", () => {
        const newProduct = {
          name: "My new product",
        };

        beforeEach(() => {
          // type required input fields
          // click save button
        });

        test("if it renders the new product in product list", () => {
          const productItem = screen.getByText(newProduct.name);
          expect(productItem).toBeInTheDocument();
        });
      });
    });
  });
});
