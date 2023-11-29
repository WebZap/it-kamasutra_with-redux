const SET_USER_MESSAGE = 'SET_USER_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, userName: 'Dima' },
        { id: 2, userName: 'Pavel' },
        { id: 3, userName: 'Roma' },
        { id: 4, userName: 'Olya' }
    ],
    messageData: [
        { id: 1, userMessage: 'Hello Yeok' },
        { id: 2, userMessage: 'I am her' },
        { id: 3, userMessage: 'Me too' },
        { id: 4, userMessage: 'Go back' },
    ],
}

const stateDialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_MESSAGE:
            let NewMessage = {
                id: 1,
                userMessage: action.message
            }
            return {
                ...state,
                messageData: [...state.messageData, NewMessage],
            }
        default:
            return state
    }
}

export const setUserMessage = (message) => {
    return {
        type: SET_USER_MESSAGE,
        message
    }
}

export default stateDialogPageReducer;
