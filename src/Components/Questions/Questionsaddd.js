import { useEffect, useState } from "react";
import axios from "axios";
import {
  getResponseCompany,
  getResponseInterviews,
  getResponseQuestion,
  getResponseQuestions,
  getResponseTechnology,
  postResponseQuestions,
} from "../Redux/Actions/InterviewActions";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "primereact/editor";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
const Questionsaddd = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [company, setCompany] = useState([]);
  const [selectCompany, setSelectCompany] = useState("");
  const [interview, setInterview] = useState([]);
  const [selectInterview, setSelectInterview] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [selectTechnology, setSelectTechnology] = useState("");

  const dispatch = useDispatch();
  const CompanyData = useSelector(
    (state) => state.InterviewReducer2.CompanyData
  );

  const InterviewData = useSelector(
    (state) => state.InterviewReducer2.InterviewData
  );

  // const technologyData = useSelector(
  //   (state) => state.InterviewReducer2.TechnologyData
  // );

  const InterviewsData = useSelector(
    (state) => state.InterviewReducer2.InterviewsData
  );

  const QuestionData = useSelector(
    (state) => state.InterviewReducer2.QuestionData
  );
  useEffect(() => {
    setTechnology(InterviewData == null ? [] : InterviewData);
  }, [InterviewData]);

  useEffect(() => {
    setCompany(CompanyData == null ? [] : CompanyData);
  }, [CompanyData]);

  useEffect(() => {
    setInterview(InterviewsData == null ? [] : InterviewsData);
  }, [InterviewsData]);

  useEffect(() => {
    setQuestion(QuestionData == null ? [] : QuestionData);
  }, [QuestionData]);

  const handleClose = () => {
    setShow(false);
    setQuestion("");
    setAnswer("");
    setCompany("");
    setTechnology("");
    setInterview("");
    setSelectedOption("");
  };

  const fetchData = async () => {
    dispatch(getResponseQuestions("id", selectCompany, technology));
  };

  const DataPostHandle = async () => {
    const payload = {
      title: question,
      answer: answer,
      difficulty: selectedOption,
      company: selectCompany,
      // interview: [parseInt(selectCompany)],
      interview: selectInterview,
      technology: [parseInt(selectTechnology)],
    };

    const DataPost = async (payload) => {
      // try {
      //   const response = await axios.post(
      //     `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`,
      //     payload
      //   );
      //   fetchData();
      // } catch (error) {
      //   console.error("Error posting data: ", error);
      // }
      navigate("/questions/id");
      dispatch(postResponseQuestions(payload));
    };
    DataPost(payload);

    // try {
    //   const response = await axios.post(
    //     `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`,
    //     payload
    //   );
    //   handleClose();
    //   fetchQuestions();
    // } catch (error) {
    //   console.error("Error posting data: ", error);
    // }
  };

  useEffect(() => {
    if (props.dataPostState) {
      handleClose();
    }
  }, [props.dataPostState]);

  // const fetchQuestions = () => {
  //   // axios
  //   //   .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`)
  //   //   .then((response) => {
  //   //     setQuestion(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching data: ", error);
  //   //   });
  //   dispatch(getResponseQuestion());
  // };
  // const fetchInterview = () => {
  //   // axios
  //   // .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`)
  //   // .then((response) => {
  //   //     console.log("Interview data:", response.data);
  //   //     setInterview(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching data: ", error);
  //   //   });
  //   dispatch(getResponseInterviews());
  // };

  // const fetchCompany = () => {
  //   // axios
  //   //   .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/company/`)
  //   //   .then((response) => {
  //   //     console.log("Company data:", response.data);
  //   //     setCompany(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching data: ", error);
  //   //   });
  //   dispatch(getResponseCompany());
  // };

  // const fetchTechnology = () => {
  //   // axios
  //   //   .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/`)
  //   //   .then((response) => {
  //   //     console.log("Company data:", response.data);
  //   //     setTechnology(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching data: ", error);
  //   //   });
  //   dispatch(getResponseTechnology());
  // };
  useEffect(() => {
    dispatch(getResponseInterviews());
    dispatch(getResponseCompany());
    dispatch(getResponseTechnology());
    dispatch(getResponseQuestion());
  }, []);

  // const handleShow = () => {
  //   setShow(true);
  // };

  // const handleSaveChanges = () => {
  //   const payload = {
  //     question: question,
  //     answer: answer,
  //     company: selectCompany,
  //     interview: selectInterview,
  //     technology: selectTechnology,
  //   };
  // };

  const staticOptions = [
    { value: "HARD", label: "HARD" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "EASY", label: "EASY" },
  ];

  // const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <>
      <div className="container">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              minWidth: "900px",
              marginLeft: "200px",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
          }}
          noValidate
          autoComplete="off"
          style={{ marginTop: "40px" }}
          // className="container"
        >
          <h3 style={{ color: "black" }}>ADD QUESTIONS</h3>
          <div className="row">
            <div className="col-lg-12">
              <TextField
                id="filled-multiline-flexible"
                label="QUESTIONS"
                multiline
                maxRows={100}
                variant="filled"
                InputLabelProps={{
                  style: { color: "black", width: "240px" },
                }}
                style={{ width: "1000px", marginLeft: "150px" }}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            <div className="col-lg-12">
              <Editor
                value={answer}
                label="ANSWER"
                onTextChange={(e) => setAnswer(e.htmlValue)}
                style={{
                  height: "220px",
                  width: "1000px",
                  marginLeft: "150px",
                }}
                InputLabelProps={{
                  style: { color: "black", width: "1000px" },
                }}
                // onChange={(e) => setAnswer(e.htmlValue)}
              />
            </div>
            <div className="col-lg-6">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 480, marginLeft: "150px" }}
              >
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{ color: "black" }}
                >
                  Select Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  {staticOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="col-lg-6">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 480, marginLeft: "20px" }}
              >
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{ color: "black" }}
                >
                  Select Company
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={selectCompany}
                  onChange={(e) => setSelectCompany(e.target.value)}
                >
                  {company.length > 0 &&
                    company.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>

            <br />
            <div className="col-lg-6">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 340, minWidth: 480, marginLeft: "150px" }}
              >
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{ color: "black" }}
                >
                  Select Technology
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={selectTechnology}
                  onChange={(e) => setSelectTechnology(e.target.value)}
                >
                  {technology.length > 0 &&
                    technology.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>

            <div className="col-lg-6">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 480, marginLeft: "20px" }}
              >
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{ color: "black" }}
                >
                  Select interview
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={selectInterview}
                  name={selectInterview}
                  onChange={(e) => {
                    setSelectInterview(e.target.value);
                  }}
                  multiple
                >
                  {interview.length > 0 &&
                    interview.map((option) => {
                      debugger
                      return (
                        <MenuItem key={option.id} value={option.id}>
                          {option.company}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </div>
          </div>
          <div></div>
          {/* </div> */}
          <br />
          <Button
            variant="outlined"
            style={{
              width: "79%",
              marginLeft: "20px",

              // marginRight:"20px",
              color: "black",
              border: "1px solid gray",
              border: "1px solid #477dad",
              backgroundColor: "#477dad",
              color: "white",
              height: "50px",
              fontSize: "20px",
            }}
            onClick={DataPostHandle}
          >
            SUBMIT
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Questionsaddd;
