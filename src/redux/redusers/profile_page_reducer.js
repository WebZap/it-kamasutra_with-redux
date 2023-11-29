import StatusApi from "../../api/StatusApi";
import UsersApi from "../../api/UsersApi";


/* Constants */

const SET_PROFILE_POST = 'SET_PROFILE_POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const SET_STATUS = 'SET_STATUS';
const SET_DATA_USER_STATUS = "SET_DATA_USER_STATUS";

/* State */

let initialState = {
    postsData: [
        {
            id: 1,
            message: "How are you my bad?",
            countLikes: 12,
            img: "https://i.pinimg.com/736x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg"
        },
        {
            id: 2,
            message: "I am fine",
            countLikes: 10,
            img: "https://i.pinimg.com/736x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg"
        },
    ],
    dataEntireUser: null,
    isFetching: true,
    statusUser: " ",
}

/* Reducer */

const stateProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_POST:
            let NewPost = {
                id: 1,
                message: action.message,
                countLikes: 0,
                img: "https://i.pinimg.com/736x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg",
            }
            return {
                ...state,
                postsData: [...state.postsData, NewPost],
            }
        case SET_PROFILE_USER:
            return {
                ...state,
                dataEntireUser: action.data
            }
        case SET_STATUS:
            return {
                ...state,
                isFetching: action.status
            }
        case SET_DATA_USER_STATUS:
            return {
                ...state,
                statusUser: action.data
            }
        default:
            return state
    }
}
/* Thunks */

export const setEntireUserProfile = id => dispatch => {
    new UsersApi().getEntireUser(id)
        .then(data => {
            dispatch(isFethingProgress(false))
            dispatch(setUserProfile(data))
        })
}

export const setStatus = id => dispatch => {
    new StatusApi().getStatusUser(id)
        .then(data => dispatch(setDataStatus(data)));
}

export const updateStatus = status => dispatch => {
    new StatusApi().updateStatusUser(status)
        .then(data => {
            debugger
            if (data.resultCode === 0) dispatch(setDataStatus(status));
        });
}


/* ActionCreator for Thunks */

export const isFethingProgress = (status) => {

    return {
        type: SET_STATUS,
        status
    }
}
const setDataStatus = data => {
    return {
        type: SET_DATA_USER_STATUS,
        data
    }
}
const setUserProfile = (data) => {
    return {
        type: SET_PROFILE_USER,
        data
    }
}

/* Action Creators */


export const setProfilePost = (message) => {
    return {
        type: SET_PROFILE_POST,
        message
    }
}


export default stateProfilePageReducer;





// export const setEntireUserProfile = id => {
//     const usersApi = new UsersApi();
//     return dispatch => {
//         usersApi.getEntireUser(id).then(data => {
//             dispatch(isFethingProgress(false))
//             dispatch(setUserProfile(data))
//         })
//     }
// }
// export const setStatus = id => {
//     const statusApi = new StatusApi();
//     return async dispatch => {
//         const data = await statusApi.getStatusUser(id);
//         dispatch(setDataStatus(data))
//     }
// }
// export const updateStatus = status => {
//     const statusApi = new StatusApi();
//     return async dispatch => {
//         const data = await statusApi.updateStatusUser(status);
//
//         if(data.resultCode === 0) dispatch(setDataStatus(data));
//     }
// }




