import {baseModel} from "./baseModel";

export class Task extends baseModel{
    constructor(){
        super();
        this.id = 0;
        this.name = undefined;
        this.notes = undefined;
    }

    static fromJSON(data){
        let newTask = new Task();
        newTask.id = data.id;
        if (data.name) newTask.name = data.name;
        if (data.notes) newTask.notes = data.notes;
        return newTask;
    }

}

