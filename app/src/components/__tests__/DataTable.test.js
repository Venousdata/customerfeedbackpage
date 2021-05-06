import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "../DataTable";
import { mockReviews } from "./mockData/DataTable.data";

describe("DataTable tests", () => {
  it("DataTable should render and match snapshot", (done) => {
    /* Material UI (grids/tables) do not support snapshot testing: 
    https://github.com/mui-org/material-ui/issues/21293
    used ugly workaround instead */
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 100;
    global.Math = mockMath;

    render(<DataTable reviews={mockReviews} />);
    const component = screen.getByTestId("datatable");
    expect(component.innerHTML).toMatchSnapshot();
    done();
  });
});
