import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";

export default function DefaultHeader(props) {
  const { columns } = props;
  return (
    <TableHead>
      <TableRow>
        {columns.map((column, id) => (
          <TableCell key={column.id} align={id === 0 ? "left" : "right"}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

DefaultHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
};
