import React from "react";
import ChangeStatusForm from "./ChangeStatusForm";

const StatusProfile = ({onClickField, editMode, status}) => {
    const onSubmit = form => {
        console.log(form)
    }
    return (
        <div style={{display: "flex"}}>
            Status user :
            {!editMode && <div onClick={() => onClickField()}>{status}</div>}
            {editMode && (<ChangeStatusForm onSubmit={onSubmit}/>)}
        </div>
    );
};

export default StatusProfile;
