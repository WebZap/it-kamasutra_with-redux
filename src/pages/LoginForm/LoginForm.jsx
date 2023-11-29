import React from 'react';
import {Button, CenteredContainer, FormContainer, } from "./LoginForm_styled";
import {Field, reduxForm} from "redux-form";
import LoginInputWrappedComponent from "../../hoc/LoginInputWrappedComponent";


const LoginForm = (props) => {
    return (
        <CenteredContainer>
            <FormContainer onSubmit={props.handleSubmit}>
                <Field type="text" name="login" placeholder="Логин" component={LoginInputWrappedComponent}/>
                <Field type="password" name="password" placeholder="Пароль" component={LoginInputWrappedComponent}/>

                <label >
                    Запомнить меня
                    <Field type="checkbox" name="rememberMe" component={LoginInputWrappedComponent}/>
                </label>
                <Button>Войти</Button>

            </FormContainer>
        </CenteredContainer>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);


export default LoginReduxForm;