import React from 'react';
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import {Task} from "../../../Model/Task";
import "./InputItem";
import InputItem from "./InputItem";

class ChangeTask extends React.Component {

    constructor (props) {
        super(props);
        this.state = {task: new Task()};

        this.handleNotesChange = this.handleNotesChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

    }

    componentDidMount(){
        this.props.prov.getTask(1)
            .then(task => {
                console.log(task);
                this.setState({task:task});
                //this.settingState(task)
            })
    }

    update(){
        this.props.prov.updateTask(this.state.task)
            .catch((err) => {
                // Error Message
                this.componentDidMount();
            });
    }


    handleNameChange(newName){
        this.setState({task:{...this.state.task, name:newName}}, () => this.update());
    }

    handleNotesChange(newNotes){
        this.setState({task:{...this.state.task, notes:newNotes}}, () => this.update());
    }

    render(){
        return(
            <div>
                <h3>{this.state.task.id}</h3>
                <InputItem
                    label={"Name"}
                    value={this.state.task.name}
                    handleChange={this.handleNameChange}
                />

                <InputItem
                    label={"Notizen"}
                    value={this.state.task.notes}
                    handleChange={this.handleNotesChange}
                />
            </div>
        )
    }
}

export default ChangeTask;