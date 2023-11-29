import React from 'react';
import {Field, reduxForm} from "redux-form";

const ChangeStatusForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="statusProfile" component={"input"}/>
        </form>
    );
};

export default reduxForm({form: "statusProfile"})(ChangeStatusForm);