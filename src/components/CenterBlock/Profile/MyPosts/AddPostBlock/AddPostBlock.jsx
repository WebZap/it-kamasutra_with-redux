import React from "react";
import s from "../MyPosts.module.css";
import {Field, reduxForm} from "redux-form";


const AddPostBlock = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}  className={s.inputBlock}>
            <div>
                <Field name="postMessage" cols="20" rows="5" component={"textarea"} />
            </div>

            <button>Добавить постичек !!!</button>
        </form>
    );
};



export default reduxForm({
    form: "addMessage"
})(AddPostBlock)
