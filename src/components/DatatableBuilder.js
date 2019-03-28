import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import DefaultHeader from "./table_headers/DefaultHeader";
import DefaultBody from "./table_bodies/DefaultBody";
import classes from "../app.css";

const DatatableBuilder = (
  HeadOfTheTable = DefaultHeader,
  BodyOfTheTable = DefaultBody,
  FootOfTheTable = null
) =>
  class extends React.Component {
    render() {
      const { data } = this.props;
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            {HeadOfTheTable !== null && <HeadOfTheTable columns={data.columns} />}
            {BodyOfTheTable !== null && <BodyOfTheTable rows={data.rows} />}
            {FootOfTheTable !== null && <FootOfTheTable />}
          </Table>
        </Paper>
      );
    }
  };

DatatableBuilder.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired
};
export default DatatableBuilder;
