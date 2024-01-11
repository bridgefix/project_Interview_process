import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

const columns = [
  {
    id: "interview_round",
    label: "INTERVIEW_ROUND",
    minWidth: 170,
    style: {
      fontSize: "medium",
      fontWeight: "revert",
    },
  },

  { id: "result", label: "RESULT", minWidth: 100 },
  {
    id: "actual_interviewee",
    label: "ACTUAL_INTERVIEW",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "interviewee",
    label: "INTERVIEW",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "technology",
    label: "TECHNOLOGY",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "interviewer",
    label: "INTERVIEWER",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [rows, setRows] = React.useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      let response;
      if (id === "id") {
        response = await axios.get(
          "http://127.0.0.1:8000/api/interview_tracking/interview/"
        );
      } else {
        response = await axios.get(
          `http://127.0.0.1:8000/api/interview_tracking/interview/?company_id=${id}`
        );
      }
      setRows(response.data);
    };

    fetchData();
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
      }}
    >
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="container"
        style={{ marginTop: "40px", marginLeft: "45px" }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "interview_round" ? (
                              <Link
                                to="/questions/id"
                                style={{
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </Link>
                            ) : column.id === "action" ? (
                              <>
                                {value}
                                <DeleteIcon  style={{color:"red"}}/>
                                <EditIcon style={{color:"green"}}/>
                              </>
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[1, 2, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
