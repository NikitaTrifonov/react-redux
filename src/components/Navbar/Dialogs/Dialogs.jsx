import React from "react";
import { Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

let Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />);

    const messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} myMessage={m.myMessage} key={m.id} />);

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) return <Redirect to="/login" />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>{dialogsElements}</div>
            <div className={classes.messageBox}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder="Enter your message"
                            onChange={onNewMessageChange}
                            value={props.dialogsPage.newMessageBody}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
