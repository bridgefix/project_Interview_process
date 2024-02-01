import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getResponseQuestions,
  getResponseCompany,
  getResponseTechnology,
  deleteResponseQuestions,
} from "../Redux/Actions/InterviewActions";
// import Swal from "sweetalert2";
const MUItable = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = React.useState([]);
  const { id } = useParams();
  const [companies, setCompanies] = React.useState([]);
  const [selectedCompany, setSelectedCompany] = React.useState("");
  const [technologies, setTechnologies] = React.useState([]);
  const [dataPostState, setDataPostState] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = React.useState("");
  const [questions, setQuestions] = React.useState([]);
  // const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  // const navigate = useNavigate();
  const questionsData = useSelector(
    (state) => state.InterviewReducer2.QuestionsData
  );
  const CompanyData = useSelector(
    (state) => state.InterviewReducer2.CompanyData
  );

  const InterviewData = useSelector(
    (state) => state.InterviewReducer2.InterviewData
  );

  // const DeleteQuestionsData=useSelector((state)=>state.InterviewReducer2.DeleteQuestionsData)

  useEffect(() => {
    setCompanies(CompanyData == null ? [] : CompanyData);
  }, [CompanyData]);

  useEffect(() => {
    dispatch(getResponseCompany(id, selectedCompany));
  }, []);

  useEffect(() => {
    setTechnologies(InterviewData == null ? [] : InterviewData);
  }, [InterviewData]);

  useEffect(() => {
    dispatch(getResponseTechnology());
  }, []);

  // console.log("questionsData2 :", questionsData2);

  // useEffect(()=>{
  //   dispatch(getResponseQuestions1(id, selectedCompany));
  // })
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
      name: "question",
      label: "QUESTIONS LIST",
      options: {
        filter: true,
        sort: true,
        // customBodyRender: (value) => {
        //   return <Avatar variant="rounded" src={value} alt="Comapny Logo" />;
        // },
        // customBodyRender: (value) => {
        //   const capitalizedValue =
        //     // value.charAt(0).toUpperCase() + value.slice(1);
        //   // return <span>{capitalizedValue}</span>;
        // },
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
          if (value !== undefined && value !== null) {
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
          } else {
            return <span style={{ color: "black" }}>Undefined or null</span>;
          }
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
          if (typeof value === "string") {
            const capitalizedValue =
              value.charAt(0).toUpperCase() + value.slice(1);
            return <span>{capitalizedValue}</span>;
          } else {
            return <span>Invalid value</span>;
          }
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
                    deleteQuestions(event, tableMeta.rowData[0])
                  }
                />
              </>
            )}
          </>
        ),
      },
    },
  ];
  // const handleEditClick = (questionId) => {
  //   setSelectedQuestionId(questionId);
  // };

  const deleteQuestions = (event, questionId) => {
    // debugger
    event.stopPropagation();

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#d33",
    //   cancelButtonColor: "#3085d6",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     axios
    //       .delete(
    //         `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/${questionId}/`
    //       )
    //       .then((response) => {
    //         console.log("Delete successful:", response);
    //         dispatch(getResponseQuestions(id,selectedCompany,selectedTechnology));
    //         Swal.fire({
    //           icon: "success",
    //           title: "  deleted successfully!",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //       })
    //       .catch((error) => {
    //         console.error("Error deleting Interview:", error);
    //         Swal.fire({
    //           icon: "error",
    //           title: "Oops...",
    //           text: "Something went wrong while deleting the Interview!",
    //         });
    //       });
    //   }
    // });
    dispatch(deleteResponseQuestions(id,selectedCompany,selectedTechnology,questionId))
  };

  // const confirmDelete = () => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You won\'t be able to revert this!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       deleteQuestions();

  //     }
  //   });
  // };
  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const anserId = rowData[0];
      console.log(anserId);

      window.location.href = `/answer/${anserId}`;
    },
  };
  const handleChangeCompany = (event) => {
    setSelectedCompany(event.target.value);
    setSelectedTechnology("");
    dispatch(
      getResponseQuestions(
        event.target.value,
        event.target.value,
        selectedTechnology
      )
    );
  };
  function createData(id, question, type, company, answer) {
    return { id, question, type, company, answer };
  }

  // const fetchTechnologies = async () => {
  //   // try {
  //   // const response = await axios.get(
  //   //   `${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/`
  //   // );
  //   //   setTechnologies(response.data);
  //   // } catch (error) {
  //   //   console.error("Error fetching technologies:", error);
  //   // }
  // };
  const handleChangeTecchnology = (event) => {
    setSelectedTechnology(event.target.value);
    dispatch(
      getResponseQuestions(
        event.target.value,
        selectedCompany,
        event.target.value
      )
    );
  };

  // const fetchCompanies = async () => {
  //   // try {
  //   //   const response = await axios.get(
  //   //     `${process.env.REACT_APP_BASE_URL}/interview_tracking/company/`
  //   //   );
  //   //   setCompanies(response.data);
  //   // } catch (error) {
  //   //   console.error("Error fetching companies:", error);
  //   // }
  // dispatch(/getResponseQuestions1(id, selectedCompany));
  // };

  useEffect(() => {
    if (questionsData.length > 0) {
      setQuestions(
        questionsData.map((item) => ({
          id: item.id,
          question: item.title,
          answer: item.answer,
          type: item.difficulty,
          company: item.company,
        }))
      );
    } else {
      setQuestions(questionsData);
    }
  }, [questionsData]);

  React.useEffect(() => {
    dispatch(getResponseQuestions(id, selectedCompany, selectedTechnology));
    // fetchCompanies();
    // fetchTechnologies();
    setSelectedTechnology(id == "id" ? "" : id);
  }, [id]);

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
    // fetchData(selectedCompany, selectedTechnology);
  }, [selectedCompany, selectedTechnology]);

  useEffect(() => {
    dispatch(getResponseQuestions(id, selectedCompany, selectedTechnology));
  }, []);

  const DataPost = async (payload) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`,
        payload
      );
      setDataPostState(true);
      // fetchData();
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  };

  return (
    <div className="container" style={{ marginTop: "100px", marginLeft: "50px" }}>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        style={{
          marginTop: "30px",
          marginLeft: "50px",
          backgroundColor: "white",
        }}
      >
        <InputLabel id="demo-select-small-label" style={{ color: "black" }}>
          Company
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedCompany}
          label="Company"
          onChange={handleChangeCompany}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
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
        <InputLabel id="demo-select-small-label" style={{ color: "black" }}>
          Technology
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedTechnology}
          label="Company"
          onChange={handleChangeTecchnology}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {technologies.map((technology) => (
            <MenuItem key={technology.id} value={technology.id}>
              {technology.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{ m: 1, minWidth: 150 }}
        size="small"
        style={{ marginTop: "30px", marginLeft: "50px" }}
      >
        {/* <Modals DataPostFun = {DataPost} dataPostState={dataPostState}/> */}

        <Link to="/questionsadd">
          <Button
            variant="outlined"
            style={{ color: "black", outline: "black", borderColor: "gray" }}
            DataPostFun={DataPost}
            dataPostState={dataPostState}
          >
            Add Questions
          </Button>
        </Link>
      
      </FormControl>

      <FormControl
        sx={{ m: 1, minWidth: 150 }}
        size="small"
        style={{ marginTop: "30px", marginLeft: "50px" }}
      >
        {/* <Modals DataPostFun = {DataPost} dataPostState={dataPostState}/> */}

        <Link to="/questions/id ">
          <Button
            variant="outlined"
            style={{ color: "black", outline: "black", borderColor: "gray" }}
            DataPostFun={DataPost}
            dataPostState={dataPostState}
          >
            Frequently Questions
          </Button>
        </Link>
      
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
