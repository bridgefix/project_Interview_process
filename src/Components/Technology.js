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
// import { Link } from "react-router-dom";

// const columns = [
//   { id: "logo", label: "TECHNOLOGY LOGO", minWidth: 170 },
//   { id: "name", label: "NAME", minWidth: 100 },
// ];

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(2);

//   const [rows, setRows] = React.useState([]);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         "`/technology/"
//       );
//       setRows(response.data);
//     };

//     fetchData();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper
//       sx={{ width: "100%", overflow: "hidden" }}
//       className="container"
//       style={{ marginTop: "40px", marginLeft: "52px" }}
//     >
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{
//                     minWidth: column.minWidth,
//                     fontWeight: "bold",
//                     fontSize: "17px",
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.id === "name" ? (
//                             <Link
//                               to={`/questions/${row.id}`}
//                               style={{ textDecoration: "none", color: "black" }}
//                             >
//                               {value}
//                             </Link>
//                           ) : (
//                             <span>No logo available</span>
//                           )}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[1, 2, 5]}
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
import Avatar from "@mui/material/Avatar";

const MUItable = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
        display: "excluded",
      },
    },
    {
      name: "logo",
      label: "TECHNOLOGY LOGO",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return <Avatar variant="rounded" src={value} alt="Technology Logo" />;
        },
      },
    },
    {
      name: "name",
      label: "NAME",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          const technologyId = data[tableMeta.rowIndex].id;
          return (
            <Link
              to={`/questions/${technologyId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
                <span>{capitalizedValue}</span>
            </Link>
          );
        },
      },
    },
    
  ];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const technologyId = rowData[0];
      console.log(technologyId);
      debugger;
      window.location.href = `/questions/${technologyId}`;
    },
  };

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/technology/`
    );
    setData(response.data);
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
      />
       
    </div>
  );
};

export default MUItable;
