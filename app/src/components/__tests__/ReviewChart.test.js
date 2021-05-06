import React from "react";
import { render, screen } from "@testing-library/react";
import ReviewChart from "../ReviewChart";
import { BrowserRouter } from "react-router-dom";
import { mockReviews } from "./mockData/ReviewChart.data";

describe("ReviewChart tests", () => {
  it("ReviewChart should render and match snapshot", (done) => {
    // hack to get chart.js to play nicely with @testing-library/react
    jest.mock("chart.js", () => "Chart");

    render(
      <BrowserRouter>
        <ReviewChart reviews={mockReviews} />
      </BrowserRouter>
    );

    const component = screen.getByTestId("reviewchart");
    expect(component.innerHTML).toMatchSnapshot();
    done();
  });
});
