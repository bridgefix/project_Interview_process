import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  // GET_DELETETECHNOLOGY_RESPONSE,
  deleteResponseTechnology,
  getResponseTechnology,
} from "./Redux/Actions/InterviewActions";
// import axios from "axios";
// import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const MUItable = () => {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const interviewData = useSelector(
    (state) => state.InterviewReducer2.InterviewData
  );

  // const DeleteTechnologyData=useSelector((state)=>state.InterviewReducer2.DeleteTechnologyData)

  useEffect(() => {
    dispatch(getResponseTechnology(id));
  }, []);

  const userRole = "admin";

  const deleteTechnology = (event, technologyId) => {
    event.stopPropagation();

    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You won\'t be able to revert this!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#d33',
    //   cancelButtonColor: '#3085d6',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     axios.delete(`${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/${technologyId}/`)
    //       .then((response) => {
    //         console.log('Delete successful:', response);
    //         dispatch(getResponseTechnology(id));
    //         Swal.fire({
    //           icon: 'success',
    //           title: 'Technology deleted successfully!',
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //       })
    //       .catch((error) => {
    //         console.error('Error deleting Technology:', error);
    //         Swal.fire({
    //           icon: 'error',
    //           title: 'Oops...',
    //           text: 'Something went wrong while deleting the Tehcnology!',
    //         });
    //       });
    //   }
    // });
    dispatch(deleteResponseTechnology(id, technologyId));
  };

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
          const technologyId = interviewData[tableMeta.rowIndex].id;
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
    {
      name: "action",
      label: "ACTION",
      options: {
        customBodyRender: (value, tableMeta) => (
          <>
            {userRole === "admin" && (
              <>
                {/* <EditIcon
                  style={{ color: "green", cursor: "pointer", marginRight: 10 }}
                  onClick={() => handleEditClick(tableMeta.rowData[0])}
                  /> */}

                <DeleteIcon
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginLeft: "20px",
                  }}
                  onClick={(event) =>
                    deleteTechnology(event, tableMeta.rowData[0])
                  }
                />
              </>
            )}
          </>
        ),
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const technologyId = rowData[0];
      console.log(technologyId);

      window.location.href = `/questions/${technologyId}`;
    },
  };

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     `${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/`
  //   );

  //   setData(response.data);
  // };

  useEffect(() => {
    // fetchData()
  });
  return (
    <div className="container" style={{ marginTop: "100px", marginLeft: "50px" }}>
      <MUIDataTable
        title={"Employee List"}
        data={interviewData}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default MUItable;
