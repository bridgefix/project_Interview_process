// import * as React from "react";
// import PropTypes from "prop-types";
// import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// // import DeleteIcon from "@mui/icons-material/Delete";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { visuallyHidden } from "@mui/utils";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// function createData(companylogo, name, contact_email, location) {
//   return {
//     companylogo,
//     name,
//     contact_email,
//     location,
//   };
// }

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: "companylogo",
//     numeric: false,
//     disablePadding: true,
//     label: "COMPANY LOGO",
//   },
//   {
//     id: "name",
//     numeric: true,
//     disablePadding: false,
//     label: "NAME",
//   },
//   {
//     id: "contact email",
//     numeric: true,
//     disablePadding: false,
//     label: "CONTACT_EMAIL",
//   },
//   {
//     id: "location",
//     numeric: true,
//     disablePadding: false,
//     label: "LOCATION",
//   },
//   {
//     id: "action",
//     numeric: true,
//     disablePadding: false,
//     label: "ACTION",
//   },
// ];

// const columns = headCells.map((headCell) => ({
//   id: headCell.id,
//   label: headCell.label,
//   minWidth: 100,
// }));

// function EnhancedTableHead(props) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <>
//       <TableHead>
//         <TableRow>
//           <TableCell padding="checkbox">
//             <Checkbox
//               color="primary"
//               indeterminate={numSelected > 0 && numSelected < rowCount}
//               checked={rowCount > 0 && numSelected === rowCount}
//               onChange={onSelectAllClick}
//               inputProps={{
//                 "aria-label": "select all desserts",
//               }}
//               style={{ fontWeight: "bold", fontSize: "17px" }}
//             />
//           </TableCell>
//           {headCells.map((headCell) => (
//             <TableCell
//               key={headCell.id}
//               padding={headCell.disablePadding ? "none" : "normal"}
//               sortDirection={orderBy === headCell.id ? order : false}
//               style={{ fontWeight: "bold", fontSize: "17px" }}
//             >
//               <TableSortLabel
//                 active={orderBy === headCell.id}
//                 direction={orderBy === headCell.id ? order : "asc"}
//                 onClick={createSortHandler(headCell.id)}
//               >
//                 {headCell.label}
//                 {orderBy === headCell.id ? (
//                   <Box component="span" sx={visuallyHidden}>
//                     {order === "desc"
//                       ? "sorted descending"
//                       : "sorted ascending"}
//                   </Box>
//                 ) : null}
//               </TableSortLabel>
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//     </>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("calories");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };
//   const [rows, setRows] = React.useState([]);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         "http://127.0.0.1:8000/api/interview_tracking/company/"
//       );
//       setRows(response.data);
//     };

//     fetchData();
//   }, []);

//   const handleDeleteClick = () => {
//     selected.forEach(async (id) => {
//       await axios.delete(
//         `http://127.0.0.1:8000/api/interview_tracking/company/${id}`
//       );

//       setRows(rows.filter((row) => row.id !== id));
//       setSelected([]);
//     });
//   };

//   <EnhancedTableToolbar
//     numSelected={selected.length}
//     onDeleteClick={handleDeleteClick}
//   />;

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (id) => selected.indexOf(id) !== -1;

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <Box
//       sx={{ width: "100%" }}
//       style={{ marginTop: "40px", marginLeft: "50px" }}
//       className="container"
//     >
//       <Paper sx={{ mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? "small" : "medium"}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {rows
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => {
//                   const { companylogo, name, contact_email, location } = row;
//                   const isSelected = selected.indexOf(row.id) !== -1;
//                   const labelId = `enhanced-table-checkbox-${row.id}`;

//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.id}
//                       selected={isSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isSelected}
//                           onChange={(event) => handleClick(event, row.id)}
//                           inputProps={{
//                             "aria-labelledby": labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {companylogo ? (
//                           <Link to={`/interview/${row.id}`}>
//                             <img
//                               src={companylogo}
//                               style={{ width: "30px", height: "30px" }}
//                               alt="Company Logo"
//                             />
//                           </Link>
//                         ) : (
//                           <span>No logo available</span>
//                         )}
//                       </TableCell>
//                       <TableCell align="left">
//                         <Link
//                           to={`/interview/${row.id}`}
//                           style={{ textDecoration: "none", color: "inherit" }}
//                         >
//                           {name}
//                         </Link>
//                       </TableCell>
//                       <TableCell align="left">{contact_email}</TableCell>
//                       <TableCell align="left">{location}</TableCell>
//                       <DeleteIcon style={{color:"red",marginLeft:"20px"}} />
//                       <EditIcon/>
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <TablePagination
//           rowsPerPageOptions={[2, 5, 15]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }

import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Company = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

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
      name: "companylogo",
      label: "COMPANY LOGO",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return <Avatar variant="rounded" src={value} alt="Comapny Logo" />;
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
          const companyId = data[tableMeta.rowIndex].id;
          return (
            <Link
              to={`/interview/${companyId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>{capitalizedValue}</span>
            </Link>
          );
        },
      },
    }
    ,
    {
      name: "contact_email",
      label: "CONTACT_EMAIL",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
          return <span >{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "location",
      label: "LOCATION",
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
      const technologyId = rowData[0];
      console.log(technologyId);
      debugger;
      window.location.href = `/questions/${technologyId}`;
    },
  };

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/company/`
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

export default Company;
