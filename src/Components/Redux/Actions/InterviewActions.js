import axios from "axios";
// import { BASE_URL } from "../../config";
export const GET_INTERVIEW_RESPONSE = "GET_INTERVIEW_RESPONSE";
export const GET_ALL_INTERVIEW_RESPONSE = "GET_ALL_INTERVIEW_RESPONSE";

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

export const GetResumeResponse = (data) => {
  return {
    type: GET_INTERVIEW_RESPONSE,
    paylod: data,
  };
};
// export const GetResponseAllResume = (data) => {
//   return {
//     type: GET_ALL_INTERVIEW_RESPONSE,
//     paylod: data,
//   };
// };

// export const getResponseId = (id) => {
//   debugger;
//   return (dispatch) => {
//     let response;
//     if (id === null) {
//       axios
//         .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`)
//         .then((res) => {
//           debugger;
//         //   dispatch(GetResumeResponse(response.data));
//         });
//     } else {
//       axios
//         .get(
//           `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/?company_id=${id}`
//         )
//         .then((res) => {
//           debugger;
//           dispatch(GetResumeResponse(response.data));
//         });
//     }
// };
// };

export const getResponseTechnology = (id) => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/`,
        config
      )
      .then((res) => {
        console.log("API Response:", res.data);
        dispatch(GetResumeResponse(res.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};
