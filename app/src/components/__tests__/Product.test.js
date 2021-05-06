import React from "react";
import { render } from "@testing-library/react";
import Product from "../Product";
import ReactRouter from "react-router";
import { BrowserRouter } from "react-router-dom";

describe("Product tests", () => {
  it("Product should render and match snapshot", (done) => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: "1" });
    const container = render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
    done();
  });
});
