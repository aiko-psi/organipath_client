import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/es/Button";
import {getTask, updateTask} from "../../../Providers/HttpProvider";
import {Task} from "../../../Model/Task";
import {withStyles} from "@material-ui/core";
import projectCardStyle from "../../Components/ProjectCard/ProjectCardStyles";
import ChangeTaskStyles from "./ChangeTaskStyles";

class ChangeTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: new Task()};
    }

    componentDidMount(){
        if(this.props.taskid !== 0){
            getTask(this.props.projectId, this.props.taskid).then((task) => {
                this.setState({
                    task: task,
                });
            })
        } else{
            // TODO new Task
        }
    }


    handleChange = name => event => {
        let updatedTask = this.state.task;
        updatedTask[name] = event.target.value;
        updateTask(updatedTask).then(() => {
            this.setState({
                task: updatedTask,
            });
        });
    };


    render(){
        const {classes} = this.props;
        // ToDo
        return (
            <div>
                <h1>Aufgabe</h1>
                <TextField
                    error={this.state.nameEmpty}
                    id="taskname"
                    label="Name"
                    value={this.state.task.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
            </div>
        )
    }


}

export default withStyles(ChangeTaskStyles)(ChangeTask);