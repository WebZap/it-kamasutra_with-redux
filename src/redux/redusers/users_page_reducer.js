import UsersApi from "../../api/UsersApi"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_PAGE = "SET_PAGE"
const SET_STATUS = "SET_STATUS"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS"


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true, //is означает вопрос,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    return user.id === action.userId ? {
                        ...user,
                        followed: false
                    } : user
                })
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,

                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter((id) => id !== action.id)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNuber
            }
        case SET_STATUS:
            let newStatus = action.status
            return {
                ...state,
                isFetching: newStatus
            }
        default:
            return state
    }
}


// export const setUsers = currentPageNumber => {
//     const usersApi = new UsersApi();
//     return async dispatch => {
//         dispatch(isFethingProgress(true))
//         try {
//             const data = await usersApi.getUsers(currentPageNumber)
//             dispatch(isFethingProgress(false))
//             dispatch(setUsersData(data.items))
//             dispatch(setCountUsers(data.totalCount))
//         } catch (error) {
//             alert(error)
//         }
//     }
// }
// export const setUsersToPage = numberPage => {
//     const usersApi = new UsersApi();
//     return async dispatch => {
//         dispatch(isFethingProgress(true))
//         dispatch(setEntirePage(numberPage))
//         try {
//             const data = await usersApi.getUsers(numberPage)
//             dispatch(isFethingProgress(false))
//             dispatch(setUsersData(data.items))
//             dispatch(setCountUsers(data.totalCount))
//         } catch (error) {
//             alert(error)
//         }
//     }
// }
// export const followUser = id => {
//     const usersAPI = new UsersApi();
//     return async dispatch => {
//         dispatch(toggleFollowingProgress(true, id));
//         usersAPI.followUser(id).then(() => {
//             dispatch(follow(id))
//             dispatch(toggleFollowingProgress(false, id));
//         })
//     }
// }
// export const unfollowUser = id => {
//     const usersAPI = new UsersApi();
//     return async dispatch => {
//         dispatch(toggleFollowingProgress(true, id));
//         usersAPI.unfollowUser(id).then(() => {
//             dispatch(unfollow(id))
//             dispatch(toggleFollowingProgress(false, id));
//         })
//     }
// }


export const setUsers = currentPageNumber => dispatch => {
    dispatch(isFethingProgress(true))
    new UsersApi().getUsers(currentPageNumber).then(data => {
        dispatch(isFethingProgress(false))
        dispatch(setUsersData(data.items))
        dispatch(setCountUsers(data.totalCount))
    })
}
export const setUsersToPage = numberPage => dispatch => {
    dispatch(isFethingProgress(true))
    dispatch(setEntirePage(numberPage))

    new UsersApi().getUsers(numberPage)
        .then(data => {
            dispatch(isFethingProgress(false))
            dispatch(setUsersData(data.items))
            dispatch(setCountUsers(data.totalCount))
        })
}
export const followUser = id => dispatch => {
    dispatch(toggleFollowingProgress(true, id));
    new UsersApi().followUser(id).then(() => {
        dispatch(follow(id))
        dispatch(toggleFollowingProgress(false, id));
    })
}
export const unfollowUser = id => dispatch => {
    dispatch(toggleFollowingProgress(true, id));
    new UsersApi().unfollowUser(id).then(() => {
        dispatch(unfollow(id))
        dispatch(toggleFollowingProgress(false, id));
    })
}

export const toggleFollowingProgress = (isFetching = false, id) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        isFetching,
        id
    }
}
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
const setUsersData = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCountUsers = (totalUsers) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers
    }
}
export const setEntirePage = (pageNuber) => {
    return {
        type: SET_PAGE,
        pageNuber
    }
}
export const isFethingProgress = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export default usersReducer