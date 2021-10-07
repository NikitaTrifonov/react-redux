import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you ?", likesCount: 12 },
                { id: 2, message: "It's  my first post", likesCount: 4 },
            ],

            newPostText: "",
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: "Sam" },
                { id: 2, name: "Bob" },
                { id: 3, name: "Jack" },
                { id: 4, name: "Frodo" },
                { id: 5, name: "Gabriel" },
                { id: 6, name: "Alice" },
            ],
            messages: [
                { id: 2, message: "Hello", myMessage: true },
                { id: 3, message: "Yo!", myMessage: false },
                { id: 4, message: "How are you?", myMessage: true },
                { id: 1, message: "Fine!", myMessage: false },
                { id: 5, message: "u?!", myMessage: true },
                { id: 6, message: "Ok =)", myMessage: false },
            ],
            newMessageBody: "",
        },
    },
    _callSubscriber() {
        console.log("state was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
