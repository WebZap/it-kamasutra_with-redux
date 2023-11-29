import {combineReducers, configureStore} from "@reduxjs/toolkit";
import stateProfilePageReducer from "./redusers/profile_page_reducer";
import stateDialogPageReducer from "./redusers/dialog_page_reducer";
import friendBoxReducer from "./redusers/friend_box_reducer";
import barMenuLinksReducer from "./redusers/bar_menu_links_reducer";
import usersReducer from "./redusers/users_page_reducer";
import authReducer from "./redusers/auth_reducer";
import {reducer as formReducer} from 'redux-form';


let rootReduce = combineReducers({
    profilePage: stateProfilePageReducer,
    dialogPage: stateDialogPageReducer,
    friendsBox: friendBoxReducer,
    barMenuLinks: barMenuLinksReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = configureStore({reducer: rootReduce});

window.store = store

export default store