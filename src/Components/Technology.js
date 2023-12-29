// import * as React from "react";
// import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Link } from "react-router-dom";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// export default function Technology() {
//   const [technologies, setTechnologies] = React.useState([]);

//   React.useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/interview_tracking/technology/")
//       .then((response) => {
//         setTechnologies(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching technologies:", error);
//       });
//   }, []);

//   return (
//     <>
//       <TableContainer
//         component={Paper}
//         style={{ marginTop: "30px", marginLeft: "50px" }}
//       >
//         <Table aria-label="simple table">
//           <TableHead sx={{ minWidth:100 }} >
//             <TableRow style={{ display: "flex", justifyContent: "center" }}>
//             <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 Logo
//               </TableCell>
//               <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
//                 Technology
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {technologies.map((tech, index) => (
//               <TableRow
//                 key={index}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
//                 }}
//               >
//                 <TableCell>
//                   <Link to={`/ptable/${tech.id}`} style={{ color: "gray",fontSize:"20px",fontWeight: "600" }}>
//                     {tech.name}
//                   </Link>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
       
//       </TableContainer>
//     </>
//   );
// }


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

export default function Technology() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/interview_tracking/technology/"
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
              Technology Logo
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
              Name
            </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.logo ? (
                  <Link to={`/questions/${row.id}`}>
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
