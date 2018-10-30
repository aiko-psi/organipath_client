export class baseModel{
    constructor(){

    }

    toJSON(){
        let copy = {};
        for (let propName in this){
            if(propName != "id"){
                copy[propName] = this[propName];
            }
        }
        return copy;
    }
}