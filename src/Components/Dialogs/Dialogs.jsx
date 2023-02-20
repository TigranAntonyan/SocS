import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> )
    
    let MessagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} /> )
    
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    
    return (
        <div className="dialogs">
            <div className="dialog-item">  { DialogsElements } </div>
            <div>
                <div className="messages">  { MessagesElements } </div>
                <div> <textarea value={ newMessageBody } onChange={onNewMessageChange} placeholder="Enter Your message"></textarea> </div>
                <div> <button onClick={onSendMessageClick}>Send</button> </div>
            </div>      
        </div>
    )
}

export default Dialogs;