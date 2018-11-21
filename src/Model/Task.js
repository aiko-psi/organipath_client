import {baseModel} from "./baseModel";


export class Task extends baseModel{
    constructor(){
        super();
        this.id = 0;
        this.name ="";
        this.notes = ""; // undefined: error in the textfield material ui animation
    }

    static fromJSON(data){
        let newTask = new Task();
        newTask.id = data.taskId;
        if (data.name) newTask.name = data.name;
        if (data.notes) newTask.notes = data.notes;
        return newTask;
    }

}

