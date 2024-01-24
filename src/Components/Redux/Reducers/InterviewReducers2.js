import {
  GET_TECHNOLOGY_RESPONSE,
  GET_COMPANY_RESPONSE,
  GET_INTERVIEW_RESPONSE,
  GET_QUESTIONS_RESPONSE,
  // GET_QUESTIONS1_RESPONSE,
  // GET_QUESTIONS2_RESPONSE,
} from "../Actions/InterviewActions";

const initialState = {
  InterviewData: [],
  CompanyData: [],
  TechnologyData: [],
  QuestionsData: [],
  // QuestionsData1: null,
  // QuestionsData2: null,
};
const InterviewReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHNOLOGY_RESPONSE:
      return {
        ...state,
        InterviewData: action.paylod,
      };
    case GET_COMPANY_RESPONSE:
      return {
        ...state,
        CompanyData: action.paylod,
      };

    case GET_INTERVIEW_RESPONSE:
      return {
        ...state,
        TechnologyData: action.paylod,
      };
    case GET_QUESTIONS_RESPONSE:
      return {
        ...state,
        QuestionsData: action.paylod,
      };
    // case GET_QUESTIONS1_RESPONSE:
    //   return {
    //     ...state,
    //     QuestionsData1: action.paylod,
    //   };

    // case GET_QUESTIONS2_RESPONSE:
    //   return {
    //     ...state,
    //     QuestionsData2: action.paylod,
    //   };

    default:
      return state;
  }
};
export default InterviewReducer2;
