import React from 'react';
import axios from 'axios';
import {Task} from "../../Model/Task";
import {Project} from "../../Model/Project";


export class HttpProvider {

    constructor(){
        this.base = 'http://localhost:8080/api/';
        this.headers = {'Content-Type': 'application/JSON'};
    }

    //Projects

    getProject(projectId){
        return axios.get(this.base + "projects/" + projectId.toString())
            .then(response => Project.fromJSON((response.data)))
            .catch(err => {throw new Error("getProject went wrong. " + err.toString())})
    }

    getAllProjects(){
        return axios.get(this.base + "projects/")
            .then(response => {
                return response.data.content.map(project => {
                    return Project.fromJSON(project);
                })
            })
            .catch(err => {throw new Error("getAllProjects went wrong. " + err.toString())})
    }

    createProject(project){
        return axios.post(this.base + "projects/", JSON.stringify(project), {headers: this.headers})
            .catch(err => {throw new Error("createProjects went wrong. " + err.toString())})
    }

    updateProject(project){
        let address = this.base + "projects/" + project.id.toString();
        return axios.put(address, JSON.stringify(project), {headers: this.headers})
            .catch(err => {throw new Error("updateProjects went wrong. " + err.toString())})

    }

    deleteProject(projectId){
        return axios.delete(this.base + "projects/" + projectId.toString())
            .catch(err => {throw new Error("deleteProjects went wrong. " + err.toString())})
    }

    // Tasks

    getTask(projectId, taskId) {
        let address = this.base + "projects/" + projectId.toString() + "/tasks/" + taskId.toString();
        return axios.get(address)
            .then(response => Task.fromJSON(response.data))
            .catch(err => {
                throw new Error("getTask went wrong. " + err.toString())
            });
    }

    getAllTasks(projectId){
        let address = this.base + "projects/" + projectId.toString() + "/tasks";
        return axios.get(address)
            .then(response => {
                return response.data.content.map(task => {
                    return Task.fromJSON(task);
                })
            })
    }

    createTask(projectId,task){
        let address = this.base + "projects/" + projectId.toString() + "/tasks";
        return axios.post(address, JSON.stringify(task), {headers: this.headers})
            .catch(err => {throw new Error("createTask went wrong. " + err.toString())})
    }



    updateTask(projectId, task){
        let address = this.base + "projects/" + projectId.toString() +  "/tasks/" + task.id.toString();
        return axios.put(address, JSON.stringify(task), {headers: this.headers})
    }

    deleteTask(projectId, taskId){
        let address = this.base + "projects/" + projectId.toString() + "/tasks" + taskId.toString();
        return axios.delete(address)
            .catch(err => {throw new Error("deleteProjects went wrong. " + err.toString())})
    }
}
