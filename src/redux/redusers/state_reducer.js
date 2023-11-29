
const GET_ENTIRE_STATE = 'GET_ENTIRE_STATE';
export const ActionStateCreators = {
    getEntireState() {
        return {
            type: GET_ENTIRE_STATE
        }
    }
}

const stateReducer = (state,action) => {
    switch (action.type) {
        case GET_ENTIRE_STATE:
            return {...state}
        default :
            return state
    }
}

export default  stateReducer;
