import React from "react";
import { render } from "@testing-library/react";
import Product from "../Product";

describe("Product tests", () => {
  it("Product should render and match snapshot", (done) => {
    const container = render(<Product />);
    expect(container.firstChild).toMatchSnapshot();
    done();
  });
});
