import {baseModel} from "./baseModel";


export class Project extends baseModel{
    constructor(){
        super();
        this.id = 0;
        this.name ="";
        this.privacy = true; // undefined: error in the textfield material ui animation
    }

    static fromJSON(data){
        let newProject = new Project();
        newProject.id = data.id;
        if (data.name) newProject.name = data.name;
        if (data.privacy) newProject.privacy = data.privacy;
        return newProject;
    }

}

