// this component just displays the reviews in a table format,
// allowing for sorting on columns, filtering, etc.

import { makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getColumns, getRows } from "../helpers/helpers";

const useStyles = makeStyles((theme) => ({
  tableContainer: { padding: "1rem", width: "100%", height: "350px" },
}));

const DataTable = ({ reviews }) => {
  const columns = getColumns(reviews, ["id", "productid"]);
  const rows = getRows(reviews);
  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
