import { AuthContext } from "../context/AuthContext";
import React from "react";


function getToken() {
    return localStorage.getItem('jwt');
}

function AuthContextProvider(props) {
    const token = getToken();

    return (
        <AuthContext.Provider value={{ token }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
