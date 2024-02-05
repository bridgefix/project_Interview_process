import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteResponseCompany,
  getResponseCompany,
} from "./Redux/Actions/InterviewActions";
// import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const Company = () => {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const companyData = useSelector(
    (state) => state.InterviewReducer2.CompanyData
  );

  // const DeleteCompanyData=useSelector((state)=>state.InterviewReducer2.DeleteCompanyData)
  // console.log(DeleteCompanyData)

  useEffect(() => {
    dispatch(getResponseCompany(id));
  }, []);

  const userRole = "admin";

  const deleteCompany = (event, companyId) => {
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
    //     axios.delete(`${process.env.REACT_APP_BASE_URL}/interview_tracking/company/${companyId}/`)
    //       .then((response) => {
    //         console.log('Delete successful:', response);
    //         dispatch(getResponseCompany(id));
    //         Swal.fire({
    //           icon: 'success',
    //           title: 'company deleted successfully!',
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //       })
    //       .catch((error) => {
    //         console.error('Error deleting company:', error);
    //         Swal.fire({
    //           icon: 'error',
    //           title: 'Oops...',
    //           text: 'Something went wrong while deleting the company!',
    //         });
    //       });
    //   }
    // });
    dispatch(deleteResponseCompany(id, companyId));
  };
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
          if (value) {
            const capitalizedValue = value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

            const companyId = companyData[tableMeta.rowIndex].id;
            return (
              <Link
                to={`/interview/${companyId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <span>{capitalizedValue}</span>
              </Link>
            );
          } else {
            return null;
          }
        },
     
      },
    },
    {
      name: "contact_email",
      label: "CONTACT_EMAIL",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          if(value){

            const capitalizedValue = value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

            return <span>{capitalizedValue}</span>;
          }
          else{
            return null;
          }
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
          const capitalizedValue = value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

          return <span>{capitalizedValue}</span>;
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
                    deleteCompany(event, tableMeta.rowData[0])
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
      debugger;
      window.location.href = `/questions/${technologyId}`;
    },
  };

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     `${process.env.REACT_APP_BASE_URL}/interview_tracking/company/`
  //   );
  //   setData(response.data);
  // };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginLeft: "50px" }}
    >
      <MUIDataTable
        title={"Employee List"}
        data={companyData}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Company;
