import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

describe("Home tests", () => {
  it("Home should render and match snapshot", (done) => {
    const container = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
    done();
  });
});
