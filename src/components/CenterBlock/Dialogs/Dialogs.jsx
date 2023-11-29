import React from "react";
import s from "./Dialogs.module.css";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessage/AddMessageForm";

const Dialogs = props => {
    const {setUserMessage} = props
    const {dialogPage} = props;

    const onSubmit = values => setUserMessage(values.message) // Отправка значения из формы в редьюсор


    let dialogs = dialogPage.dialogsData.map((item) => (
        <Dialog key={item.id} userName={item.userName} id={item.id}/>
    ));
    let messages = dialogPage.messageData.map((item) => (
        <Message key={item.id} message={item.userMessage}/>
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogs}</div>
            <div className={s.messages}>
                <div>{messages}</div>
                <AddMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Dialogs;
