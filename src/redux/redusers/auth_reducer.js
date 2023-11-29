import AuthApi from "../../api/AuthApi";

/* Constants */

const SET_USER_DATA = 'SET_USER_DATA';

/* State */

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

/* Reducer */

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return {
                ...state
            }
    }
}


// export const setUserData = () => {
//     const authUser = new AuthApi()
//     return dispatch => {
//         authUser.getAuthUser().then(data => {
//             if (data.resultCode === 0) {
//                 console.log(data.data);
//                 const { email, login, id } = data.data;
//                 dispatch(setUserDataAC(id, email, login))
//             }
//         })
//     }
// }
/* Thunks */

export const setUserData = () => (dispatch) => {
    new AuthApi().getAuthUser().then(data => {
        if (data.resultCode === 0) {
            const {email, login, id} = data.data;
            dispatch(setUserDataAC(id, email, login))
        }
    })

}

export const postLoginForm = () => {
    new AuthApi().sendLoginForm().then(data => {

    })
}

/* ActionCreator for Thunks */

const setUserDataAC = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}
/* Action Creators */

export default authReducer;