import axios from "axios";
// import { BASE_URL } from "../../config";
export const GET_TECHNOLOGY_RESPONSE = "GET_TECHNOLOGY_RESPONSE";
export const GET_COMPANY_RESPONSE = "GET_COMPANY_RESPONSE";
export const GET_INTERVIEW_RESPONSE = "GET_INTERVIEW_RESPONSE";
export const GET_QUESTIONS_RESPONSE = "GET_QUESTIONS_RESPONSE";
// export const GET_QUESTIONS1_RESPONSE = "GET_QUESTIONS1_RESPONSE";
export const GET_QUESTIONS2_RESPONSE = "GET_QUESTIONS2_RESPONSE";

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
