import React from "react";
import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import sinon from "sinon";
import axios from "axios";
import Home from "../Home";
import { mockGetAllProducts } from "./mockData/Home.data";

describe("Home tests", () => {
  it("Home should render and match snapshot", async (done) => {
    const getStub = sinon.stub(axios, "get");
    getStub.withArgs("products/all").returns(mockGetAllProducts);

    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    }).then(() => {
      const component = screen.getByTestId("home");
      expect(component.innerHTML).toMatchSnapshot();
      done();
    });
  });
});
