import React from 'react';
import axios from 'axios';


export class HttpProvider {

    constructor(){
        this.base = 'http://localhost:8080/api/';
    }

    getTask(number){
        let address = this.base + "tasks/" + number.toString();
        console.log(address);
        return axios.get(address);
    }

}

export const ProviderContext = React.createContext(new HttpProvider());
