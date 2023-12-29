import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Company() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/interview_tracking/company/"
      );
      setRows(response.data);
    };

    fetchData();
  }, []);

  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: "30px", marginLeft: "50px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Company Logo
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Contact_email
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Location
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.logo ? (
                  <Link to={`/interview/${row.id}`}>
                    <img
                      src={row.logo}
                      style={{ width: "30px", height: "30px" }}
                      alt="Company Logo"
                    />
                  </Link>
                ) : (
                  <span>No logo available</span>
                )}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.contact_email}</TableCell>
              <TableCell>{row.location}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
