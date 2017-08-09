let defaultState = {
    posts: [],
    currentPost: {},
    comments: [],
    subject: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_DATA") {
        return {
            ...state,
            posts: action.data
        }

    } else if (action.type === "CURRENT_POST") {
        return {
            ...state,
            currentPost: action.data
        }

    } else if (action.type === "SET_COMMENT") {
        return {
            ...state,
            comments: action.data
        }
    } else if (action.type === "SET_SUBJECT") {
        return {
            ...state,
            subject: action.data
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;