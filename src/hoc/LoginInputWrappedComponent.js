import {Input} from "../pages/LoginForm/LoginForm_styled";

const LoginInputWrappedComponent = ({input, type, placeholder}) => {
    return <Input {...input} type={type} placeholder={placeholder}/>
}

export default LoginInputWrappedComponent;

// { input, label, type, meta: { touched, error } }



