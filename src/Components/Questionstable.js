import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "axios";
import { useParams } from "react-router-dom";
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.question}
        </TableCell>
        {/* <TableCell>{row.answer}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="answers">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <strong>Answer:</strong>
                    </TableCell>
                    <TableCell colSpan={3}>{row.answer}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default function QuestionTable() {
  const [questions, setQuestions] = React.useState([]);
  const { id } = useParams();
  const [companies, setCompanies] = React.useState([]);
  const [selectedCompany, setSelectedCompany] = React.useState("");

  const handleChangeCompany = (event) => {
    setSelectedCompany(event.target.value);
  };

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/interview_tracking/company/"
      );
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
    fetchCompanies();
  }, [id]);

  const fetchData = async () => {
    try {
      let response;
      if (id === "id") {
        response = await axios.get(
          "http://127.0.0.1:8000/api/interview_tracking/question/"
        );
      } else {
        response = await axios.get(
          `http://127.0.0.1:8000/api/interview_tracking/question/?technology_id=${id}`
        );
      }
      setQuestions(
        response.data.map((item) => ({
          question: item.title,
          answer: item.answer,
        }))
      );
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <>
      <Box>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          style={{ marginTop: "30px", marginLeft: "50px" }}
        >
          <InputLabel id="demo-select-small-label">Company</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedCompany}
            label="Company"
            onChange={handleChangeCompany}
          >
            <MenuItem value="">{/* <em>None</em> */}</MenuItem>
            {companies.map((company) => (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TableContainer
          component={Paper}
          style={{ marginTop: "30px", marginLeft: "50px" }}
        >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Questions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.map((row, i) => (
                <>
                  <Row key={row.question} row={row} />
                </>
              ))}
            </TableBody>
          </Table>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
              marginRight: "50px",
            }}
          >
            {/* <Stack spacing={2}>
              <Pagination count={10} />
            </Stack> */}
          </div>
        </TableContainer>
      </Box>
    </>
  );
}
