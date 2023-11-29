import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

export const AuthRedirectHOC = Component => {
    const RedirectComponent = props => {
        return (
            <>
                {/*{if (!props.isAuth) return <Navigate to="/login" />}*/}
                {!props.isAuth && <Navigate to="/login"/>}
                {props.isAuth && <Component {...props} />}
            </>
        )

    }
    const mapStateToProps = state => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps, null)(RedirectComponent)
}





// 1 - Мы создаем функцию AuthRedirectHOC - которая возвращает компонент в нее приходящий
// 2 - Мы создаем новую переменную которой присваиваем результат выполнения функции connect
//# Оборачиваем в обертку для того чтобы взять необходимое нам состояние из контекст апи
//3 - Возвращаем результат функции ConnectedRedirectComponent

