import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";

export default function BasicTable() {
  const { id } = useParams();
  const [answers, setAnswers] = useState();

  const fetchAnswer = () => {
    axios.get(`http://127.0.0.1:8000/api/interview_tracking/question/${id}/`)
      .then((response) => {
        setAnswers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  console.log(setAnswers);

  useEffect(() => {
    fetchAnswer();
  }, [id]);

  return (
    <TableContainer
      component={Paper}
      className="container"
      style={{ marginTop: "40px", marginLeft: "50px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontSize: "25px" }}>
              Answer
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {answers && (
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{ fontSize: "17px" }}
              >
                {answers.answer}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <br />

      <Comments />
    </TableContainer>
  );
}
