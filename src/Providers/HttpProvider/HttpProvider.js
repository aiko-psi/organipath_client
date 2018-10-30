import React from 'react';
import axios from 'axios';
import {Task} from "../../Model/task";


export class HttpProvider {

    constructor(){
        this.base = 'http://localhost:8080/api/';
        this.headers = {'Content-Type': 'application/JSON'};
    }

    getTask(number){
        return axios.get(this.base + "tasks/" + number.toString())
            .then(response => Task.fromJSON(response.data))
            .catch(err => {throw new Error('Upsi...')});
    }

    updateTask(task){
        let address = this.base + "tasks/" + task.id.toString();
        console.log(JSON.stringify(task));
        return axios.put(address, JSON.stringify(task), {headers: this.headers})
    }
}
