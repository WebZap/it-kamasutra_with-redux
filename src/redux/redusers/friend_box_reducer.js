const RENDER_FRIEND_BOX = 'RENDER_FRIEND_BOX';

export const renderFriendBoxAction = () => {
    return {
        type: RENDER_FRIEND_BOX
    }
}

let initialState = {
    friendsBox: [
        { id: 1, src: './img/icons/ava-maynkraft.jpg', name: "Pavel" },
        { id: 2, src: './img/icons/prikolnaya-avatarka-dlya-patsanov.jpg', name: "Roma" },
        { id: 3, src: './img/icons/spider.jpg', name: "Nekit" },
        { id: 4, src: './img/icons/spider.jpg', name: "Stas" },
        { id: 5, src: './img/icons/spider.jpg', name: "Vlada" },
    ],
}

const friendBoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case RENDER_FRIEND_BOX:
            return state
        default:
            return state
    }
}

export default friendBoxReducer;