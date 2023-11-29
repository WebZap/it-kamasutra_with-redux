import React, {Component} from "react";

import StatusProfile from "./StatusProfile";
import {connect} from "react-redux";
import {updateStatus} from "../../../../../redux/redusers/profile_page_reducer";


class StatusProfileContainer extends Component { //Компонента классовая
    state = { // Инициализация стейте локального
        status: this.props.status, //Присваивание Стейту-статус локального значение приходящих из пропса
        editMode: false, //Состояние меняюще взависомти от булевого значение отображение компоненты
    };

    componentDidUpdate(prevProps, prevState) { //метод жизненного цикла
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    editModeEnable = () => {
        this.setState({
            editMode: true,
        });
    };
    disabledEditMode = () => {
        this.setState({
            editMode: false,
        });
        debugger
        this.props.updateStatus(this.state.status)

    };
    onChangedValue = (e) => {
        const statusNew = e.currentTarget.value
        console.log(statusNew)
        this.setState({
            status: statusNew
        })
    }

    render() {
        return (<StatusProfile
            onClickField={this.editModeEnable}
            onFocusMissed={this.disabledEditMode}
            onChangedValue={this.onChangedValue}
            editMode={this.state.editMode}
            status={this.state.status}
        />);
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        status: state.profilePage.statusUser,
    };
};

export default connect(mapStateToProps, {updateStatus})(StatusProfileContainer);
