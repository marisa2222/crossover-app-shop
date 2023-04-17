import React from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../src/context/AuthContext";

function ProtectedRoutes({ component: Component, ...rest }) {
    const { token } = React.useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Navigate to={{ pathname: "/user/login" }} />
                )
            }
        />
    );
}

export default ProtectedRoutes;
