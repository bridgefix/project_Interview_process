import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";

export default function Interview() {
  const [rows, setRows] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (id == "id") {
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
    <TableContainer
      component={Paper}
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "15px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Interview Round
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Result
            </TableCell>
            {/* <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              feedback
            </TableCell> */}
            {/* <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Remark
            </TableCell> */}
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              actual_interviewee
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              interviewee
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Technology
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Interviewer
            </TableCell>
            {/* <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              interview_mode
            </TableCell> */}

            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Date
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              sheduled_by
            </TableCell>
            {/* <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              created_at
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              updated_at
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.interview_round}</TableCell>
              <TableCell>{row.result}</TableCell>
              {/* <TableCell>{row.feedback}</TableCell> */}
              {/* <TableCell>{row.remark}</TableCell> */}
              <TableCell>{row.actual_interviewee}</TableCell>
              <TableCell>{row.interviewee}</TableCell>
              <TableCell>{row.technology}</TableCell>
              {/* <TableCell>{row.interviewer}</TableCell> */}
              <TableCell>
                {/* <Link
                  to={`/interview/${row.index}/`}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                > */}
                {row.interviewer}
                {/* </Link> */}
              </TableCell>
              <TableCell>{row.sheduled_by}</TableCell>
              {/* <TableCell>{row.interview_mode}</TableCell> */}
              <TableCell>
                {row.date ? row.date : <span>No date available</span>}
              </TableCell>
              {/* <TableCell>{row.created_at}</TableCell>
              <TableCell>{row.updated_at}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
