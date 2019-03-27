import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import DefaultHeader from "./table_headers/DefaultHeader";
import DefaultBody from "./table_bodies/DefaultBody";

const DatatableBuilder = (
  HeadOfTheTable = null,
  BodyOfTheTable = null,
  FootOfTheTable = null
) =>
  class extends React.Component {
    render() {
      const { classes, data } = this.props;
      const Header = HeadOfTheTable !== null ? HeadOfTheTable : DefaultHeader;
      const Body = BodyOfTheTable !== null ? BodyOfTheTable : DefaultBody;
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            {Header !== null && <Header columns={data.columns} />}
            {Body !== null && <Body rows={data.rows} />}
            {FootOfTheTable !== null && <FootOfTheTable />}
          </Table>
        </Paper>
      );
    }
  };

DatatableBuilder.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired
};  

export default DatatableBuilder;
