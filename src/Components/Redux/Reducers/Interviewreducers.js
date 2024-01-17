import { GET_INTERVIEW_RESPONSE ,GET_ALL_INTERVIEW_RESPONSE } from "../Actions/InterviewActions"

const initialState = {
    InterviewData: null,
    AllInterviewData: null,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INTERVIEW_RESPONSE:
            return {
                ...state,
                InterviewData: action.paylod
            }
        case GET_ALL_INTERVIEW_RESPONSE:
            return{
                ...state,
                AllInterviewData:action.paylod
            }
        default:
            return state
    }
}
export default reducer
