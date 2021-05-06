import React from "react";
import { render } from "@testing-library/react";
import AddReview from "../AddReview";
import {
  mockProduct,
  mockCloseHandler,
  mockHandleSubmit,
} from "./mockData/AddReview.data";

describe("AddReview tests", () => {
  it("AddReview should render and match snapshot", (done) => {
    const { baseElement } = render(
      <AddReview
        product={mockProduct}
        open={true}
        handleClose={mockCloseHandler}
        handleSubmit={mockHandleSubmit}
      />
    );
    /* https://github.com/testing-library/react-testing-library/issues/62
    Material UI Dialog is based off a React.Portal. these are a bit tricky to snapshot normally (getByTestId) */
    expect(baseElement.innerHTML).toMatchSnapshot();
    done();
  });
});
