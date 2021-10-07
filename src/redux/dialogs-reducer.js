const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return { ...state, newMessageBody: action.body };
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: 6, message: body, myMessage: true }],
            };
        }

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (newBody) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newBody,
});

export default dialogsReducer;
