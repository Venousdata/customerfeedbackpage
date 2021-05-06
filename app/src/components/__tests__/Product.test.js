import React from "react";
import { act, render, screen } from "@testing-library/react";
import ReactRouter from "react-router";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Product from "../Product";
import { mockProduct, mockReviews } from "./mockData/Product.data";
import sinon from "sinon";

describe("Product tests", () => {
  it("Product should render and match snapshot", async (done) => {
    // set up mocks to avoid actually calling the API
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: "1" });
    const getStub = sinon.stub(axios, "get");
    getStub.withArgs("product/1").returns(mockProduct);
    getStub.withArgs("productreviews/product/1").returns(mockReviews);

    /* Material UI does not support snapshot testing: 
    https://github.com/mui-org/material-ui/issues/21293
    used ugly workaround instead */
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 100;
    global.Math = mockMath;

    await act(async () => {
      render(
        <BrowserRouter>
          <Product />
        </BrowserRouter>
      );
    }).then(() => {
      const component = screen.getByTestId("product");
      expect(component.innerHTML).toMatchSnapshot();
      done();
    });
  });
});
