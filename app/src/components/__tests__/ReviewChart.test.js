import React from "react";
import { render } from "@testing-library/react";
import ReviewChart from "../ReviewChart";

describe("ReviewChart tests", () => {
  it("ReviewChart should render and match snapshot", (done) => {
    // hack to get chart.js to play nicely with @testing-library/react
    jest.mock("chart.js", () => "Chart");

    const container = render(<ReviewChart />);
    expect(container.firstChild).toMatchSnapshot();
    done();
  });
});
