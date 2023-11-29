import {
    setUserMessage,
    updateMessageBody,
} from "../../../redux/redusers/dialog_page_reducer";

import {AuthRedirectHOC} from "../../../hoc/AuthRedirectComponent";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    };
};

export default compose(connect(mapStateToProps, {setUserMessage}), AuthRedirectHOC)(Dialogs);
