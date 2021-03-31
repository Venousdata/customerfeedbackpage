import React from "react";
import { render } from "@testing-library/react";
import Products from "../Products";

describe("Products tests", () => {
  it("Products should render and match snapshot", (done) => {
    const container = render(<Products />);
    expect(container.firstChild).toMatchSnapshot();
    done();
  });
});
