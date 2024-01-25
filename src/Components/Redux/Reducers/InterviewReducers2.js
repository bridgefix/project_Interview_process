import {
  GET_TECHNOLOGY_RESPONSE,
  GET_COMPANY_RESPONSE,
  GET_INTERVIEW_RESPONSE,
  GET_QUESTIONS_RESPONSE,
  GET_ANSWER_RESPONSE,
  GET_COMMENT_RESPONSE,
  POST_COMMENT_RESPONSE,
  GET_INTERVIEWS_RESPONSE,
  GET_QUESTION_RESPONSE,
  GET_DELETEANSWER_RESPONSE,
  GET_DELETEQUESTIONS_RESPONSE,
  GET_DELETECOMPANY_RESPONSE,
  GET_DELETETECHNOLOGY_RESPONSE,
  GET_DELETEINTERVIEW_RESPONSE,
  POST_QUESTIONS_RESPONSE,
} from "../Actions/InterviewActions";

const initialState = {
  InterviewData: [],
  CompanyData: [],
  TechnologyData: [],
  QuestionsData: [],
  AnswerData:null,
  CommentData:[],
  PostCommentData:[],
  InterviewsData:[],
  QuestionData:[],
  DeleteAnswerData:[],
  DeleteQuestionsData:[],
  DeleteCompanyData:[],
  DeleteTechnologyData:[],
  DeleteInterviewData:[],
  PostQuestionsData:[],
  
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
    case GET_ANSWER_RESPONSE:
      return {
        ...state,
        AnswerData: action.paylod,
      }
    case GET_COMMENT_RESPONSE:
      return{
        ...state,
        CommentData : action.paylod
      }
    
    case POST_COMMENT_RESPONSE:
      return{
        ...state,
        PostCommentData:action.paylod
      }
    
    case GET_INTERVIEWS_RESPONSE:
      return{
        ...state,
        InterviewsData:action.paylod
      }
    
    case GET_QUESTION_RESPONSE:
      return{
        ...state,
        QuestionData:action.paylod

      }
    case GET_DELETEANSWER_RESPONSE:
      return{
        ...state,
        DeleteAnswerData:action.paylod

      }
    case GET_DELETEQUESTIONS_RESPONSE:
      return{
        ...state,
        DeleteQuestionsData:action.paylod
        
      }
    case GET_DELETECOMPANY_RESPONSE:
      return{
        ...state,
        DeleteCompanyData:action.paylod
      }
    
    case GET_DELETETECHNOLOGY_RESPONSE:
      return{
        ...state,
        DeleteTechnologyData: action.paylod
      }
    
    case GET_DELETEINTERVIEW_RESPONSE:
      return{
        ...state,
        DeleteInterviewData:action.paylod
      }

    case POST_QUESTIONS_RESPONSE:
      return{
        ...state,
        PostQuestionsData:action.paylod
      }
    default:
      return state;
  }
};
export default InterviewReducer2;
