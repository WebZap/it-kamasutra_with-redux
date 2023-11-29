import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));


//! ----------------------------------------------

const rerenderEntireTree = () => {
    root.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    );
}
rerenderEntireTree()


//! ---------------------------------------------- 




