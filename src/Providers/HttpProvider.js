import React from 'react';
import axios from 'axios';
import {Task} from "../Model/Task";
import {Project} from "../Model/Project";

// Inspiration from Callicoder
// https://github.com/callicoder/spring-security-react-ant-design-polls-app/blob/master/polling-app-client/src/util/APIUtils.js



const base = 'http://localhost:8080/api/';


const sendRequest = (options) => {
    const headers = new Headers({
        "Content-Type": "application/json" ,
    });

    if(localStorage.getItem('access_token')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    }

    //const defaults = {headers: headers};
    //options = Object.assign({}, defaults, options);
    options = {...options, headers};

    return fetch(options.url, options);

};


//Projects

export function getProject(projectId){
    return axios.get(this.base + "projects/" + projectId.toString())
        .then(response => Project.fromJSON((response.data)))
        .catch(err => {throw new Error("getProject went wrong. " + err.toString())})
}


export function getAllProjects(){
    return sendRequest({
        url: base + "projects/",
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data.map(proj => Project.fromJSON(proj));
        })
        .catch(err => {
            throw new Error("Get all Projects not working!")
        })
}

export function createProject(project){
    return sendRequest({
        url: base + "projects/",
        method: 'POST',
        body: JSON.stringify(project)
    }).catch(err => {throw new Error("createProjects went wrong. " + err.toString())})
}

export function updateProject(project){
    let address = this.base + "projects/" + project.id.toString();
    return sendRequest({
        url: address,
        method: 'PUT',
        body: JSON.stringify(project)
    }).catch(err => {throw new Error("updateProjects went wrong. " + err.toString())})

}

export function deleteProject(projectId){
    return sendRequest({
        url: base + "projects/" + projectId.toString(),
        method: 'DELETE'
    }).catch(err => {throw new Error("deleteProjects went wrong. " + err.toString())})
}

// Tasks

export function getTask(projectId, taskId) {
    let address = this.base + "projects/" + projectId.toString() + "/tasks/" + taskId.toString();
    return sendRequest({
        url: address,
        method: 'GET'
    }).then(response => Task.fromJSON(response.data))
        .catch(err => {
            throw new Error("getTask went wrong. " + err.toString())
        });
}

export function getAllTasks(projectId){
    let address = this.base + "projects/" + projectId.toString() + "/tasks";
    return sendRequest({
        url: address,
        method: 'GET'
    }).then(response => {
            return response.data.content.map(task => {
                return Task.fromJSON(task);
            })
        })
}

export function createTask(projectId,task){
    let address = this.base + "projects/" + projectId.toString() + "/tasks";
    return sendRequest({
        url: address,
        method: 'POST',
        body: JSON.stringify(task)
    }).catch(err => {throw new Error("createTask went wrong. " + err.toString())})
}


export function updateTask(projectId, task){
    let address = this.base + "projects/" + projectId.toString() +  "/tasks/" + task.id.toString();
    return sendRequest({
        url: address,
        method: 'PUT',
        body: JSON.stringify(task)
    })
}

export function deleteTask(projectId, taskId){
    let address = this.base + "projects/" + projectId.toString() + "/tasks" + taskId.toString();
    return sendRequest({
        url: address,
        method: 'DELETE'
    })
}
