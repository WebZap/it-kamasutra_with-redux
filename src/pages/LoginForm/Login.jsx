import React from 'react';
import LoginReduxForm from "./LoginForm";


const Login = () => {
    const onSubmit = form => console.log(form)
    return (
        <div>
            <div style={
                {
                    width: "100",
                    textAlign: "center",
                    fontSize: "30px",
                    marginTop: "50px"
                }
            }>
                Login
            </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;