import {baseModel} from "./baseModel";


export class Task extends baseModel{
    constructor(taskName, projectId, parentId){
        super();
        this.name = taskName;
        this.status = "Todo";
        this.mini = false;
        this.draft = false;
        this.fun = false;
        this.daily = null;
        this.deadline = "";
        this.dangerZone = 0;
        this.notes = ""; // undefined: error in the textfield material ui animation
        this.projectId = projectId;
        this.parentId = parentId;
    }

    static fromJSON(data){
        let newTask = new Task();
        newTask.id = data.id;
        newTask.projectId = data.projectId;
        newTask.parentId = data.parentId;
        newTask.name = data.name;
        if (data.notes) newTask.notes = data.notes;
        if (data.status) newTask.status = data.status;
        if (data.mini) newTask.mini = data.mini;
        if (data.fun) newTask.fun = data.fun;
        if (data.draft) newTask.draft = data.draft;
        if (data.daily) newTask.daily = data.daily;
        if (data.deadline) {
            let deadline = data.deadline.split("T")[0];
            newTask.deadline = deadline;
        }
        if (data.dangerZone) newTask.dangerZone = data.dangerZone;
        return newTask;
    }

}

