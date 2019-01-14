import React from 'react';

const base = "http://localhost:8080/api/auth/";

const headers = new Headers({
    'Content-Type': 'application/json',
})

export function signin(usernameOrEmail, password) {
    // TODO: Fail
    let signinRequest = {usernameOrEmail: usernameOrEmail, password: password};
    let address = base + "signin";
    let options = {method: "POST", body: JSON.stringify(signinRequest), headers};
    fetch(address, options).then(response =>
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    ).then(resp => localStorage.setItem('access_token', resp.accessToken))
}

export function signup(user, voucher){
    // TODO: Fail
    let voucherObj = {voucher: voucher};
    let signupRequest = Object.assign({}, user, voucherObj);
    let options = {method: "POST", body: JSON.stringify(signupRequest), headers};
    let address = base + "signup";
    fetch(address, options);

}