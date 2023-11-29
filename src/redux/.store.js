
import stateDialogPageReducer from "./redusers/dialog_page_reducer";
import stateReducer from "./redusers/state_reducer";
import stateProfilePageReducer from "./redusers/profile_page_reducer";



let store = {
    _CallSubscriber() {
        //сюда приходит observer
    },
    subscribe(observer) {
        store._CallSubscriber = observer
    },
    _state: {
        profilePage: {
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
            NewPostValue: '',
        },
        dialogPage: {
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
            newMessageData: ''
        },
        friendsBox: [
            { id: 1, src: './img/icons/ava-maynkraft.jpg', name: "Pavel" },
            { id: 2, src: './img/icons/prikolnaya-avatarka-dlya-patsanov.jpg', name: "Roma" },
            { id: 3, src: './img/icons/spider.jpg', name: "Nekit" },
        ],
        barMenuLinks: [
            { id: 1, path: "/", nameLink: 'Profile' },
            { id: 2, path: "/dialogs", nameLink: 'Messages' },
            { id: 3, path: "/news", nameLink: 'News' },
            { id: 4, path: "/my-music", nameLink: 'Music' },
            { id: 5, path: "/settings", nameLink: 'Settings' },
        ],
    },

    dispatch(action) {
        this._state.dialogPage = stateDialogPageReducer(this._state.dialogPage, action)
        this._state.profilePage = stateProfilePageReducer(this._state.profilePage, action)
        this._CallSubscriber(this._state);
    },
    getState() {
        return this._state
    }
}


export default store;

// _getState() {
//     return this._state;
// },
// _setProfilePost() { //setState()
//     let NewPost = {
//         id: 1,
//         message: store._state.profilePage.NewPostValue,
//         countLikes: 0,
//         img: "https://i.pinimg.com/736x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg",
//     }
//     this._state.profilePage.postsData.push(NewPost)
//     this._subscriber(this._state) // перерендер
//     this._setProfileNewPostValue('') // нужен ли здесь рендер?
//     //Добавить рендер функцию(state)
// },
// _setProfileNewPostValue(text) {
//     this._state.profilePage.NewPostValue = text
//     this._subscriber(this._state)
// },
