import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteResponseInterview, getResponseInterview } from "./Redux/Actions/InterviewActions";
import DeleteIcon from "@mui/icons-material/Delete";
// import Swal from "sweetalert2";

const MUItable = () => {
  const dispatch = useDispatch();
  const technologyData = useSelector(
    (state) => state.InterviewReducer2.TechnologyData
  );

  // const DeleteInterviewData = useSelector(
  //   (state) => state.InterviewReducer2.DeleteInterviewData
  // );

  // console.log(DeleteInterviewData)

  useEffect(() => {
    dispatch(getResponseInterview(id));
  }, []);

  const deleteInterview = (event, interviewId) => {
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
    //     axios.delete(`${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/${interviewId}/`)
    //       .then((response) => {
    //         console.log('Delete successful:', response);
    //         dispatch(getResponseInterview(id));
    //         Swal.fire({
    //           icon: 'success',
    //           title: 'Interview deleted successfully!',
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //       })
    //       .catch((error) => {
    //         console.error('Error deleting Interview:', error);
    //         Swal.fire({
    //           icon: 'error',
    //           title: 'Oops...',
    //           text: 'Something went wrong while deleting the Interview!',
    //         });
    //       });
    //   }
    // });
    dispatch(deleteResponseInterview(id, interviewId));
  };

  const userRole = "admin";
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
          if (value) {
            const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
            const color = value.toLowerCase() === "pass" ? "green" : "red";
            return <span style={{ color }}>{capitalizedValue}</span>;
          } else {
            return null; // or provide a default value or handle the null case appropriately
          }
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
          const capitalizedValue = value ? value.toUpperCase() : "";
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
        // customBodyRender: (value) => {
        //   const capitalizedValue =
        //     value.toUpperCase() + value.slice(1);
        //   return <span>{capitalizedValue}</span>;
        // },
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

    // {
    //   name: "feedback",
    //   label: "FEEDBACK",
    //   options: {
    //     filter: true,
    //     sort: false,
    //     customBodyRender: (value) => {
    //       const capitalizedValue =
    //         value.charAt(0).toUpperCase() + value.slice(1);
    //       return <span>{capitalizedValue}</span>;
    //     },
    //   },
    // },

    // {
    //   name: "remark",
    //   label: "REMARK",
    //   options: {
    //     filter: true,
    //     sort: false,
    //     customBodyRender: (value) => {
    //       const capitalizedValue =
    //         value.charAt(0).toUpperCase() + value.slice(1);
    //       return <span>{capitalizedValue}</span>;
    //     },
    //   },
    // },
    // {
    //   name: "interview_mode",
    //   label: "INTERVIEW_MODE",
    //   options: {
    //     filter: true,
    //     sort: false,
    //     customBodyRender: (value) => {
    //       const capitalizedValue =
    //         value.charAt(0).toUpperCase() + value.slice(1);
    //       return <span>{capitalizedValue}</span>;
    //     },
    //   },
    // },
    {
      name: "date",
      label: "DATE",
      options: {
        filter: true,
        sort: false,
        // customBodyRender: (value) => {
        //   const capitalizedValue =
        //     value.charAt(0).toUpperCase() + value.slice(1);
        //   return <span>{capitalizedValue}</span>;
        // },
      },
    },
    // {
    //   name: "created_at",
    //   label: "CREATED_AT",
    //   options: {
    //     filter: true,
    //     sort: false,
    //     customBodyRender: (value) => {
    //       const capitalizedValue =
    //         value.charAt(0).toUpperCase() + value.slice(1);
    //       return <span>{capitalizedValue}</span>;
    //     },
    //   },
    // },
    // {
    //   name: "updated_at",
    //   label: "UPDATED_AT",
    //   options: {
    //     filter: true,
    //     sort: false,
    //     customBodyRender: (value) => {
    //       const capitalizedValue =
    //         value.charAt(0).toUpperCase() + value.slice(1);
    //       return <span>{capitalizedValue}</span>;
    //     },
    //   },
    // },
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
                    deleteInterview(event, tableMeta.rowData[0])
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
      const interviewId = rowData[0];
      if (interviewId) {
        window.location.href = `/questions/id`;
      }
    },
  };

  // const handlechipDelete = () => {
  //   debugger;
  // };
  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
  });
  // const [data, setData] = useState([]);
  const { id } = useParams();

  // const fetchData = async () => {
  //   let response;
  //   if (id === "id") {
  //     response = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`
  //     );
  //   } else {
  //     response = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/?company_id=${id}`
  //     );
  //   }
  //   setData(response.data);
  //   console.log("response :", response.data);
  // };

  // const localId = window.localStorage.getItem("id");

  // useEffect(() => {
  //     dispatch(getResponseId(localId))
  // }, [localId]);

  // useEffect(()=>{
  //   fetchData()
  // })

  return (
    <div className="container" style={{marginTop:"110px"}}>
      <MUIDataTable
        title={"Employee List"}
        data={technologyData}
        columns={columns}
        options={options}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default MUItable;
