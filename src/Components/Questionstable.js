// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import PropTypes from "prop-types";
// // import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     answer: PropTypes.string.isRequired,
//     question: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const columns = [
//   { id: "question", label: "QUESTIONS LIST", minWidth: 170 },
//   { id: "type", label: "TYPE", minWidth: 100 },
//   { id: "company", label: "COMPANY", minWidth: 100 },
// ];

// function createData(id,question, type, company, answer) {
//   return {id, question, type, company, answer };
// }

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(4);
//   const [rows, setRows] = React.useState([]);
//   const [questions, setQuestions] = React.useState([]);
//   const { id } = useParams();
//   const [companies, setCompanies] = React.useState([]);
//   const [selectedCompany, setSelectedCompany] = React.useState("");
//   const [technologies, setTechnologies] = React.useState([]);
//   const [selectedTechnology, setSelectedTechnology] = React.useState(
//     id == "id" ? "" : id
//   );
//   console.log("id : ", id);

//   const handleChangeCompany = (event) => {
//     setSelectedCompany(event.target.value);
//   };

//   const fetchTechnologies = async () => {
//     try {
//       const response = await axios.get(
//         "${process.env.REACT_APP_BASE_URL}/technology/"
//       );
//       setTechnologies(response.data);
//     } catch (error) {
//       console.error("Error fetching technologies:", error);
//     }
//   };
//   const handleChangeTecchnology = (event) => {
//     setSelectedTechnology(event.target.value);
//     fetchData(selectedCompany, event.target.value);
//   };

//   const fetchCompanies = async () => {
//     try {
//       const response = await axios.get(
//         "${process.env.REACT_APP_BASE_URL}/company/"
//       );
//       setCompanies(response.data);
//     } catch (error) {
//       console.error("Error fetching companies:", error);
//     }
//   };

//   React.useEffect(() => {
//     fetchData();
//     fetchCompanies();
//     fetchTechnologies();
//     setSelectedTechnology(id == "id" ? "" : id);
//   }, [id]);

//   const fetchData = async () => {
//     try {
//       let response;
//       if (selectedTechnology !== "") {
//         response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
//         );
//       } else {
//         response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}`
//         );
//       }

//       if (selectedCompany === null) {
//         if (id === "id") {
//           if (selectedTechnology === null) {
//             // ;
//             response = await axios.get(
//               "${process.env.REACT_APP_BASE_URL}/question/"
//             );
//           } else {
//             // ;
//             response = await axios.get(
//               `${process.env.REACT_APP_BASE_URL}/question/?technology_id=${selectedTechnology}`
//             );
//           }
//         } else {
//           if (selectedTechnology === null) {
//             // ;
//             response = await axios.get(
//               `${process.env.REACT_APP_BASE_URL}/question/?technology_id=${id}`
//             );
//           } else {
//             // ;
//             response = await axios.get(
//               `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
//             );
//           }
//         }
//       } else {
//         if (selectedTechnology === null) {
//           // ;
//           response = await axios.get(
//             `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}`
//           );
//         } else {
//           // ;
//           response = await axios.get(
//             `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
//           );
//         }
//       }
//       setQuestions(
//         response.data.map((item) => ({
//           id: item.id,
//           question: item.title,
//           answer: item.answer,
//           type: item.difficulty,
//           company: item.company,
//         }))
//       );
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   React.useEffect(() => {
//     fetchData(selectedCompany, selectedTechnology);
//   }, [selectedCompany, selectedTechnology]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   React.useEffect(() => {
//     fetchData();
//     fetchCompanies();
//     fetchTechnologies();
//     setSelectedTechnology(id == "id" ? "" : id);
//   }, [id]);

//   React.useEffect(() => {
//     fetchData(selectedCompany, selectedTechnology);
//   }, [selectedCompany, selectedTechnology]);

//   React.useEffect(() => {
//     fetchData(selectedCompany, selectedTechnology);
//   }, [selectedCompany, selectedTechnology]);

//   React.useEffect(() => {
//     setRows(
//       questions.map((question) =>
//         createData(
//           question.id,
//           question.question,
//           question.type,
//           question.company
//         )
//       )
//     );
//   }, [questions]);

//   console.log("rows : ", rows);

//   return (
//     <Paper
//       sx={{ width: "100%", overflow: "hidden" }}
//       style={{ marginTop: "40px", marginLeft: "100px" ,}}
//       className="container"
//     >
//       <FormControl
//         sx={{ m: 1, minWidth: 120 }}
//         size="small"
//         style={{ marginTop: "30px", marginLeft: "50px" }}
//       >
//         <InputLabel id="demo-select-small-label">Company</InputLabel>
//         <Select
//           labelId="demo-select-small-label"
//           id="demo-select-small"
//           value={selectedCompany}
//           label="Company"
//           onChange={handleChangeCompany}
//         >
//           <MenuItem value="">{/* <em>None</em> */}</MenuItem>
//           {companies.map((company) => (
//             <MenuItem key={company.id} value={company.id}>
//               {company.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <FormControl
//         sx={{ m: 1, minWidth: 120 }}
//         size="small"
//         style={{ marginTop: "30px", marginLeft: "50px" }}
//       >
//         <InputLabel id="demo-select-small-label">Technology</InputLabel>
//         <Select
//           labelId="demo-select-small-label"
//           id="demo-select-small"
//           value={selectedTechnology}
//           label="Company"
//           onChange={handleChangeTecchnology}
//         >
//           <MenuItem value="">{/* <em>None</em> */}</MenuItem>
//           {technologies.map((technology) => (
//             <MenuItem key={technology.id} value={technology.id}>
//               {technology.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth,fontWeight: "600", fontSize: "17px" }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={index}>
//                     {columns.map((column) => {
//                       if (column.id === "question") {
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             <Link to={`/answer/${row.id}`} style={{color:"black",textDecoration:"none"}}>
//                               {row[column.id]}
//                             </Link>
//                           </TableCell>
//                         );
//                       } else {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       }
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 20]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
const MUItable = () => {
  const [rows, setRows] = React.useState([]);
  const { id } = useParams();
  const [companies, setCompanies] = React.useState([]);
  const [selectedCompany, setSelectedCompany] = React.useState("");
  const [technologies, setTechnologies] = React.useState([]);
  const [selectedTechnology, setSelectedTechnology] = React.useState(
    id == "id" ? "" : id
  );
  const [questions, setQuestions] = React.useState([]);

  const columns = [
    {
      name: "id",
      label: "NAME",
      options: {
        filter: true,
        sort: true,
        display: "excluded",
      },
    },
    {
      name: "question",
      label: "QUESTIONS LIST",
      options: {
        filter: true,
        sort: true,
        // customBodyRender: (value) => {
        //   return <Avatar variant="rounded" src={value} alt="Comapny Logo" />;
        // },
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "type",
      label: "TYPE",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          let color;
          switch (value.toLowerCase()) {
            case "easy":
              color = "green";
              break;
            case "medium":
              color = "#ffc107";
              break;
            case "hard":
              color = "red";
              break;
            default:
              color = "black";
              break;
          }
          return <span style={{ color }}>{value}</span>;
        },
      },
    },

    {
      name: "company",
      label: "COMPANY",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
          return <span >{capitalizedValue}</span>;
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const anserId = rowData[0];
      console.log(anserId);
      // debugger;
      window.location.href = `/answer/${anserId}`;
    },
  };

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     "${process.env.REACT_APP_BASE_URL}/company/"
  //   );
  //   setData(response.data);
  // };
  const handleChangeCompany = (event) => {
    setSelectedCompany(event.target.value);
  };

  function createData(id, question, type, company, answer) {
    return { id, question, type, company, answer };
  }

  const fetchTechnologies = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/technology/`
      );
      setTechnologies(response.data);
    } catch (error) {
      console.error("Error fetching technologies:", error);
    }
  };
  const handleChangeTecchnology = (event) => {
    setSelectedTechnology(event.target.value);
    fetchData(selectedCompany, event.target.value);
  };

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/company/`
      );
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
    fetchCompanies();
    fetchTechnologies();
    setSelectedTechnology(id == "id" ? "" : id);
  }, [id]);

  const fetchData = async () => {
    try {
      let response;
      if (selectedTechnology !== "") {
        response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}`
        );
      }

      if (selectedCompany === null) {
        if (id === "id") {
          if (selectedTechnology === null) {
            // ;
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/question/`
            );
          } else {
            // ;
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/question/?technology_id=${selectedTechnology}`
            );
          }
        } else {
          if (selectedTechnology === null) {
            // ;
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/question/?technology_id=${id}`
            );
          } else {
            // ;
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
            );
          }
        }
      } else {
        if (selectedTechnology === null) {
          // ;
          response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}`
          );
        } else {
          // ;
          response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
          );
        }
      }
      setQuestions(
        response.data.map((item) => ({
          id: item.id,
          question: item.title,
          answer: item.answer,
          type: item.difficulty,
          company: item.company,
        }))
      );
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  React.useEffect(() => {
    setRows(
      questions.map((question) =>
        createData(
          question.id,
          question.question,
          question.type,
          question.company
        )
      )
    );
  }, [questions]);

  React.useEffect(() => {
    fetchData(selectedCompany, selectedTechnology);
  }, [selectedCompany, selectedTechnology]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        style={{
          marginTop: "30px",
          marginLeft: "50px",
          backgroundColor: "white",
        }}
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
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        style={{ marginTop: "30px", marginLeft: "50px" }}
      >
        <InputLabel id="demo-select-small-label">Technology</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedTechnology}
          label="Company"
          onChange={handleChangeTecchnology}
        >
          <MenuItem value="">{/* <em>None</em> */}</MenuItem>
          {technologies.map((technology) => (
            <MenuItem key={technology.id} value={technology.id}>
              {technology.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <MUIDataTable
        title={"Employee List"}
        data={rows}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default MUItable;
