import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you ?", likesCount: 12 },
        { id: 2, message: "It's  my first post", likesCount: 4 },
    ],

    newPostText: "",
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostText = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: newPostText, likesCount: 0 }],
                newPostText: "",
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newPostText };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }

        default:
            return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newText,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then((data) => {
            debugger;
            dispatch(setUserProfile(data));
        });
    };
};

export default profileReducer;
