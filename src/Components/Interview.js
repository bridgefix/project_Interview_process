// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import MUIDataTable from "mui-datatables";

// const columns = [
//   {
//     id: "interview_round",
//     label: "INTERVIEW_ROUND",
//     minWidth: 170,
//     style: {
//       fontSize: "medium",
//       fontWeight: "revert",
//     },
//   },

//   { id: "result", label: "RESULT", minWidth: 100 },
//   {
//     id: "actual_interviewee",
//     label: "ACTUAL_INTERVIEW",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "interviewee",
//     label: "INTERVIEW",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "technology",
//     label: "TECHNOLOGY",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "interviewer",
//     label: "INTERVIEWER",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "action",
//     label: "Action",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "action",
//     label: "Action",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },

// ];

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(2);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const [rows, setRows] = React.useState([]);
//   const { id } = useParams();

//   const fetchData = async () => {
//     let response;
//     if (id === "id") {
//       response = await axios.get(
//         "http://127.0.0.1:8000/api/interview_tracking/interview/"
//       );
//     } else {
//       response = await axios.get(
//         `http://127.0.0.1:8000/api/interview_tracking/interview/?company_id=${id}`
//       );
//     }
//     setRows(response.data);
//   };

//   const deleteData = async (id) => {
//     try {
//       await axios.delete(
//         `http://127.0.0.1:8000/api/interview_tracking/interview/${id}/`
//       );
//       console.log("Row deleted:", id);
//       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     } catch (error) {
//       console.error("Error deleting row:", error);
//     }
//   };

//   React.useEffect(() => {
//     fetchData();
//   }, [id]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "200px",
//       }}
//     >
//       <Paper
//         sx={{ width: "100%", overflow: "hidden" }}
//         className="container"
//         style={{ marginTop: "40px", marginLeft: "45px" }}
//       >
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{
//                       minWidth: column.minWidth,
//                       fontWeight: "bold",
//                       fontSize: "16px",
//                     }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => {
//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.code}
//                     >
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.id === "interview_round" ? (
//                               <Link
//                                 to="/questions/id"
//                                 style={{
//                                   color: "black",
//                                   textDecoration: "none",
//                                 }}
//                               >
//                                 {column.format && typeof value === "number"
//                                   ? column.format(value)
//                                   : value}
//                               </Link>
//                             ) : column.id === "action" ? (
//                               <>
//                                 {value}
//                                 <DeleteIcon
//                                   style={{ color: "red", cursor: "pointer" }}
//                                   onClick={() => {
//                                     console.log(
//                                       "Deleting row with id:",
//                                       row.id
//                                     );
//                                     deleteData(row.id);
//                                   }}
//                                 />

//                                 <EditIcon style={{ color: "green" }} />
//                               </>
//                             ) : column.format && typeof value === "number" ? (
//                               column.format(value)
//                             ) : (
//                               value
//                             )}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[1, 2, 10]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>

//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import axios from "axios";

const MUItable = () => {
  const columns = [
    {
      name: "interview_round",
      label: "INTERVIEW_ROUND",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "result",
      label: "RESULT",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          const color = value.toLowerCase() === "pass" ? "green" : "red";
          return <span style={{ color }}>{capitalizedValue}</span>;
        },
      },
    },

    {
      name: "actual_interviewee",
      label: "ACTUAL_INTERVIEW",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "interviewee",
      label: "INTERVIEW",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "technology",
      label: "TECHNOLOGY",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return value.map((tech, i) => <Chip key={i} label={tech} />);
        },
      },
    },

    {
      name: "interviewer",
      label: "INTERVIEWER",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },

    {
      name: "feedback",
      label: "FEEDBACK",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },

    {
      name: "remark",
      label: "REMARK",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "interview_mode",
      label: "INTERVIEW_MODE",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "date",
      label: "DATE",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "created_at",
      label: "CREATED_AT",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "updated_at",
      label: "UPDATED_AT",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const interviewId = rowData[0];
      if (interviewId) {
        window.location.href = `/questions/id`;
      }
    },
  };

  const handlechipDelete = () => {
    debugger;
  };
  useEffect(()=>{
    console.log(process.env.REACT_APP_BASE_URL)
  })
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    let response;
    if (id === "id") {
      response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/interview/`
        // "http://127.0.0.1:8000/api/interview_tracking/interview/"
      );
    } else {
      response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/interview/?company_id=${id}`
      );
    }
    setData(response.data);
    console.log("response :", response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default MUItable;
