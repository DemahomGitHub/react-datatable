import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import DatatableBuilder from "./components/DatatableBuilder";

const DatatableContainer = (
  HeadOfTheTable = null,
  BodyOfTheTable = null,
  FootOfTheTable = null,
) =>
  class extends Component {
    constructor(props) {
      super(props);
    }
    render() { 
      const {classes, data} = this.props;
      const Datatable = DatatableBuilder(HeadOfTheTable, BodyOfTheTable, FootOfTheTable);
      return (
        <Provider store={store}>
          <Datatable data={data} classes={classes} />
        </Provider>
      );
    }
  }

export {DatatableContainer};

