import React from "react";
import s from "./AddMessage.module.css";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    const {handleSubmit} = props

    return (
        <form className={s.messageBlock} onSubmit={handleSubmit}>
            <Field name="message" cols="20" rows="5" className={s.textArea} component={"textarea"}/>
            <button>Add message!</button>
        </form>
    );
};

export default reduxForm({
    form: 'addMessageForm',
})(AddMessageForm);


