import React from 'react';
import {getAllProjects, getUser} from "./HttpProvider";
import {User} from "../Model/User";

const base = "http://localhost:8080/api/auth/";

const headers = new Headers({
    'Content-Type': 'application/json',
});

export function signin(usernameOrEmail, password) {
    // TODO: Fail
    let signinRequest = {usernameOrEmail: usernameOrEmail, password: password};
    let address = base + "signin";
    let options = {method: "POST", body: JSON.stringify(signinRequest), headers};
    return fetch(address, options).then(response =>
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    ).then(resp => {
        localStorage.setItem('access_token', resp.accessToken);
        let user = User.fromJSON(resp.currentUser);
        return user;
    })
}

export function logout() {
    localStorage.removeItem('username');
    return localStorage.removeItem('access_token')


}

export function signup(user, voucher){
    // TODO: Fail
    let voucherObj = {voucher: voucher};
    let signupRequest = Object.assign({}, user, voucherObj);
    let options = {method: "POST", body: JSON.stringify(signupRequest), headers};
    let address = base + "signup";
    return fetch(address, options);

}

export function checkLoggedIn(){
    let access = localStorage.getItem('access_token');
    if (access){
        // check if the access token is working, therefore making a request
        return getUser().then((user) => {
            return user;
        });
    } else {
        return Promise.reject();
    }
}