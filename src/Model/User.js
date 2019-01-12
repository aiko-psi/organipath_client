import {baseModel} from "./baseModel";


export class User extends baseModel{
    constructor(){
        super();
        this.id = 0;
        this.name ="";
        this.username="";
        this.email="";
        this.password="";
    }


}
