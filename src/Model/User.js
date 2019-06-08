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

    static fromJSON(data){
        let newUser = new User();
        newUser.id = data.id;
        newUser.name = data.name;
        newUser.username = data.username;
        newUser.email = data.email;
        return newUser;
    }


}
