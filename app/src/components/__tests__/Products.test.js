import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "../Products";
import { mockProducts } from "./mockData/Products.data";
import { BrowserRouter } from "react-router-dom";

describe("Products tests", () => {
  it("Products should render and match snapshot", (done) => {
    render(
      <BrowserRouter>
        <Products products={mockProducts} />
      </BrowserRouter>
    );
    const component = screen.getByTestId("products");
    expect(component.innerHTML).toMatchSnapshot();
    done();
  });
});
