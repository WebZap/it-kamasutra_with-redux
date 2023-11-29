const RENDER_BAR_MENU_LINKS = 'RENDER_FRIEND_BOX';


let initialState = {
    postsData: [
        // {
        //     id: 1,
        //     message: "How are you my bad?",
        //     countLikes: 12,
        //     img: "https://i.pinimg.com/736x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg"
        // },
        // {
        //     id: 2,
        //     message: "I am fine",
        //     countLikes: 10,
        //     img: "https://i.pinimg.com/736x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg"
        // },
    ],
    NewPostValue: '',
    barMenuLinks: [
        { id: 1, path: "/profile/*", nameLink: 'Profile' },
        { id: 2, path: "/dialogs", nameLink: 'Messages' },
        { id: 3, path: "/news", nameLink: 'News' },
        { id: 4, path: "/my-music", nameLink: 'Music' },
        { id: 5, path: "/settings", nameLink: 'Settings' },
        { id: 6, path: "/users", nameLink: 'Users' }
    ],
}

const barMenuLinksReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case RENDER_BAR_MENU_LINKS:
            return newState
        default:
            return newState
    }
}

export const renderFriendBoxAction = () => {
    return {
        type: RENDER_BAR_MENU_LINKS
    }
}

export default barMenuLinksReducer;