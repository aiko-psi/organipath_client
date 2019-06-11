import {baseModel} from "./baseModel";


export class Task extends baseModel{
    constructor(taskName, projectId, parentId){
        super();
        this.id = 0;
        this.name = taskName;
        this.notes = ""; // undefined: error in the textfield material ui animation
        this.projectId = projectId;
        this.parentId = parentId;
    }

    static fromJSON(data){
        let newTask = new Task();
        newTask.id = data.taskId;
        newTask.projectId = data.projectId;
        if (data.name) newTask.name = data.name;
        if (data.notes) newTask.notes = data.notes;
        return newTask;
    }

}

