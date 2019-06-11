import {Redirect, Route} from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";

generatePath("/user/:id/:entity(posts|comments)", { id: 1, entity: "posts" });
// Will return /user/1/posts


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) =>
        localStorage.getItem('access_token') ?
            (<Component {...props} />)
            : (<Redirect to="/login" />)
    } />
);

