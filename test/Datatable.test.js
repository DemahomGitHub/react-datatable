import React from "react";
import { shallow } from "enzyme";
import DatatableBuilder from "../src/components/DatatableBuilder";

describe("Testing component", () => {
  it("render without crashing", () => {
    shallow(<DatatableBuilder />);
  });
});
