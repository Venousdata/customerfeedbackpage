import React from "react";
import { render } from "@testing-library/react";
import AddReview from "../AddReview";

describe("AddReview tests", () => {
  it("AddReview should render and match snapshot", (done) => {
    const container = render(<AddReview />);
    expect(container.firstChild).toMatchSnapshot();
    done();
  });
});