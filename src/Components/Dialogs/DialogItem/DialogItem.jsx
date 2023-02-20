import React from "react";
import "./../Dialogs.css";

const DialogItem = (props) => {


    return (
        <div className="dialog">
            {props.name} 
        </div>
    )
}

export default DialogItem;