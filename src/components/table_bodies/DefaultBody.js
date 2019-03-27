import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";

export default function DefaultBody(props) {
  const { rows } = props;
  return (
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id}>
          {Object.keys(row).map((key, id) => (
            <TableCell
              key={key}
              align={id > 0 ? "right" : "left"}
              component={id === 0 ? "th" : undefined}
              scope={id === 0 ? "row" : undefined}
            >
              {row[key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

DefaultBody.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};
