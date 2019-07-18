export class baseModel{
    constructor(){
        this.id = 0;
    }

    toJSON(){
        let copy = {};
        for (let propName in this){
            if(propName != "id"){
                copy[propName] = this[propName];
            }
        }
        if(this.id != 0){
            copy.id = this.id;
        }
        return copy;
    }
}