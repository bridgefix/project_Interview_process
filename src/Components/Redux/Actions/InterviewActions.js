import axios from "axios";
import Swal from "sweetalert2";
export const GET_TECHNOLOGY_RESPONSE = "GET_TECHNOLOGY_RESPONSE";
export const GET_COMPANY_RESPONSE = "GET_COMPANY_RESPONSE";
export const GET_INTERVIEW_RESPONSE = "GET_INTERVIEW_RESPONSE";
export const GET_QUESTIONS_RESPONSE = "GET_QUESTIONS_RESPONSE";
export const GET_QUESTIONS2_RESPONSE = "GET_QUESTIONS2_RESPONSE";
export const GET_ANSWER_RESPONSE = "GET_ANSWER_RESPONSE";
export const GET_COMMENT_RESPONSE = "GET_COMMENT_RESPONSE";
export const POST_COMMENT_RESPONSE = "POST_COMMENT_RESPONSE";
export const GET_INTERVIEWS_RESPONSE = "GET_INTERVIEWS_RESPONSE";
export const GET_QUESTION_RESPONSE = "GET_QUESTION_RESPONSE";
export const GET_DELETEANSWER_RESPONSE = "GET_DELETEANSWER_RESPONSE";
export const GET_DELETEQUESTIONS_RESPONSE = "GET_DELETEQUESTIONS_RESPONSE";
export const GET_DELETECOMPANY_RESPONSE = "GET_DELETECOMPANY_RESPONSE";
export const GET_DELETETECHNOLOGY_RESPONSE = "GET_DELETETECHNOLOGY_RESPONSE";
export const GET_DELETEINTERVIEW_RESPONSE = " GET_DELETEINTERVIEW_RESPONSE";
export const POST_QUESTIONS_RESPONSE = "POST_QUESTIONS_RESPONSE";
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

export const getTechnologyResponse = (data) => {
  return {
    type: GET_TECHNOLOGY_RESPONSE,
    paylod: data,
  };
};

export const getCompanyResponse = (data) => {
  return {
    type: GET_COMPANY_RESPONSE,
    paylod: data,
  };
};

export const getInterviewResponse = (data) => {
  return {
    type: GET_INTERVIEW_RESPONSE,
    paylod: data,
  };
};

export const getQuestionsResponse = (data) => {
  return {
    type: GET_QUESTIONS_RESPONSE,
    paylod: data,
  };
};

export const getQuestions2Response = (data) => {
  return {
    type: GET_QUESTIONS2_RESPONSE,
    paylod: data,
  };
};

export const getAnswerResponse = (data) => {
  return {
    type: GET_ANSWER_RESPONSE,
    paylod: data,
  };
};

export const getCommentResponse = (data) => {
  return {
    type: GET_COMMENT_RESPONSE,
    paylod: data,
  };
};

export const postCommentResponse = (data) => {
  return {
    type: POST_COMMENT_RESPONSE,
    paylod: data,
  };
};



export const getInterviewsResponse = (data) => {
  return {
    type: GET_INTERVIEWS_RESPONSE,
    paylod: data,
  };
};

export const getQuestionResponse = (data) => {
  return {
    type: GET_QUESTION_RESPONSE,
    paylod: data,
  };
};

export const deleteAnswerResponse = (data) => {
  return {
    type: GET_DELETEANSWER_RESPONSE,
    paylod: data,
  };
};

export const deleteQuestionsResponse = (data) => {
  return {
    type: GET_DELETEQUESTIONS_RESPONSE,
    paylod: data,
  };
};

export const deleteCompanyResponse = (data) => {
  return {
    type: GET_DELETECOMPANY_RESPONSE,
    paylod: data,
  };
};

export const deleteTechnologyReponse = (data) => {
  return {
    type: GET_DELETETECHNOLOGY_RESPONSE,
    paylod: data,
  };
};

export const deleteInterviewResponse = (data) => {
  return {
    type: GET_DELETEINTERVIEW_RESPONSE,
    paylod: data,
  };
};

export const postQuestionsResponse = (data) => {
  return {
    type: POST_QUESTIONS_RESPONSE,
    paylod: data,
  };
};

export const postResponseComment=(id,userData)=>{
  return(dispatch)=>{
    axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/interview_tracking/comment/${id}/`,
      userData
    )
    .then((response) => {
      // setComments((prevComments) => [...prevComments, response.data]);
      // setComment("");
      dispatch(getResponseComment(id));
      dispatch(postCommentResponse(id))
    })
    .catch((error) => {
      console.error("Error posting comment:", error);
    });
  }
}

export const postResponseQuestions = (payload) => {
  return (dispatch) => {
    axios.post(
      `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`,
      payload
    ).then((response)=>{
      dispatch(postQuestionsResponse(response));

    })
  };
};

export const deleteResponseAnswer = (id) => {
  return (dispatch) => {
    axios
      .delete(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/${id}/`
      )
      .then(() => {
        // setQuestions({});
        // setAnswers({});
        dispatch(getAnswerResponse({}));
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };
};

export const deleteResponseInterview = (id, interviewId) => {
  return (dispatch) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/${interviewId}/`
          )
          .then((response) => {
            console.log("Delete successful:", response);
            dispatch(getResponseInterview(id));
            Swal.fire({
              icon: "success",
              title: "Interview deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error deleting Interview:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong while deleting the Interview!",
            });
          });
      }
    });
  };
};

export const deleteResponseTechnology = (id, technologyId) => {
  return (dispatch) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/${technologyId}/`
          )
          .then((response) => {
            console.log("Delete successful:", response);
            dispatch(getResponseTechnology(id));
            Swal.fire({
              icon: "success",
              title: "Technology deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error deleting Technology:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong while deleting the Tehcnology!",
            });
          });
      }
    });
  };
};

export const deleteResponseCompany = (id, companyId) => {
  return (dispatch) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.REACT_APP_BASE_URL}/interview_tracking/company/${companyId}/`
          )
          .then((response) => {
            console.log("Delete successful:", response);
            dispatch(getResponseCompany(id));
            Swal.fire({
              icon: "success",
              title: "company deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error deleting company:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong while deleting the company!",
            });
          });
      }
    });
  };
};

export const deleteResponseQuestions = (
  id,
  selectedCompany,
  selectedTechnology,
  questionId
) => {
  return (dispatch) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/${questionId}/`
          )
          .then((response) => {
            console.log("Delete successful:", response);
            dispatch(
              getResponseQuestions(id, selectedCompany, selectedTechnology)
            );
            Swal.fire({
              icon: "success",
              title: "  deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error deleting Interview:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong while deleting the Interview!",
            });
          });
      }
    });
  };
};

export const getResponseQuestion = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`,config)
      .then((response) => {
        // setQuestion(response.data);
        dispatch(getQuestionResponse(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
};
export const getResponseInterviews = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`,config)
      .then((response) => {
        console.log("Interview data:", response.data);
        // setInterview(response.data);
        dispatch(getInterviewsResponse(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
};

export const getResponseComment = (id) => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/comment/${id}/`
      )
      .then((response) => {
        dispatch(getCommentResponse(response.data));
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };
};
export const getResponseAnswer = (id) => {
  return (dispatch) => {
    axios
      .get(
        `${
          process.env.REACT_APP_BASE_URL
        }/interview_tracking/question/${parseInt(id)}/`
      )
      .then((response) => {
        dispatch(getAnswerResponse(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
};

export const getResponseInterview = (id) => {
  return (dispatch) => {
    if (id === "id") {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`)
        .then((res) => {
          dispatch(getInterviewResponse(res.data));
        })
        .catch((error) => {
          console.log("error fetching data", error);
        });
    } else {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/?company_id=${id}`
        )
        .then((res) => {
          dispatch(getInterviewResponse(res.data));
        });
    }
  };
};

export const getResponseQuestions = (
  id,
  selectedCompany,
  selectedTechnology
) => {
  return async (dispatch) => {
    try {
      let response;
      if (selectedTechnology !== "") {
        response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/?company_id=${selectedCompany}`
        );
      }

      if (selectedCompany === null) {
        if (id === "id") {
          if (selectedTechnology === null) {
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`
            );
          } else {
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/?technology_id=${selectedTechnology}`
            );
          }
        } else {
          if (selectedTechnology === null) {
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/?technology_id=${id}`
            );
          } else {
            response = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
            );
          }
        }
      } else {
        if (selectedTechnology === null) {
          response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/?company_id=${selectedCompany}`
          );
        } else {
          response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
          );
        }
      }
      dispatch(getQuestionsResponse(response.data));
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
};

export const getResponseCompany = () => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/company/`,
        config
      )
      .then((res) => {
        dispatch(getCompanyResponse(res.data));
      })
      .catch((error) => {
        console.log("error fetching data:", error);
      });
  };
};

export const getResponseTechnology = (id) => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/`,
        config
      )
      .then((res) => {
        dispatch(getTechnologyResponse(res.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};
