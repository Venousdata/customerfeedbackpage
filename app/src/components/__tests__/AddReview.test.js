import React from "react";
import { render, screen } from "@testing-library/react";
import AddReview from "../AddReview";
import {
  mockProduct,
  mockCloseHandler,
  mockHandleSubmit,
} from "./mockData/AddReview.data";

describe("AddReview tests", () => {
  // unfinished
  it("AddReview should render and match snapshot", (done) => {
    render(
      <AddReview
        product={mockProduct}
        open={true}
        handleClose={mockCloseHandler}
        handleSubmit={mockHandleSubmit}
      />
    );
    const component = screen.getByTestId("addreview");
    expect(component.innerHTML).toMatchSnapshot();
    done();
  });
});
