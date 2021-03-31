import React from "react";
import { render } from "@testing-library/react";
import DataTable from "../DataTable";

describe("DataTable tests", () => {
  it("DataTable should render and match snapshot", (done) => {
    const container = render(<DataTable />);
    expect(container.firstChild).toMatchSnapshot();
    done();
  });
});
