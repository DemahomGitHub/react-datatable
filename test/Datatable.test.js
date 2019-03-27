import React from "react";
import { shallow } from "enzyme";
import DatatableBuilder from "../src/components/DatatableBuilder";

const data = {
  columns: [
    {
      id: "dessert",
      label: "Dessert",
      colSize: "",
      editable: "",
      required: "",
      dataType: ""
    },
    {
      id: "calories",
      label: "Calories",
      colSize: "",
      editable: "",
      required: "",
      dataType: ""
    }
  ],
  rows: [
    {
      name: "Frozen yoghurt",
      calories: 159
    },
    {
      name: "Ice cream sandwich",
      calories: 237
    }
  ]
};

describe("Datatable Builder component", () => {
  it("Build a datatable when passed in", () => {
    const Table = DatatableBuilder();
    shallow(<Table data={data} />);
  });
});
