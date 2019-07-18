import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/es/Button";
import {deleteTask, getTask, updateTask} from "../../../Providers/HttpProvider";
import {Task} from "../../../Model/Task";
import {FormControl, InputLabel, MenuItem, Select, Switch, withStyles} from "@material-ui/core";
import MiniIcon from "@material-ui/icons/PhotoSizeSelectSmall";
import DraftIcon from "@material-ui/icons/OutlinedFlag";
import DailyIcon from "@material-ui/icons/Event";
import FunIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import DangerIcon from "@material-ui/icons/Warning";
import projectCardStyle from "../../Components/ProjectCard/ProjectCardStyles";
import ChangeTaskStyles from "./ChangeTaskStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import browserHistory from "../../../browserHistory";

class ChangeTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: new Task(" ", 0, 0)};
        this.updateTaskOnServer = this.updateTaskOnServer.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount(){
        if(this.props.taskid !== 0){
            getTask(this.props.projectid, this.props.taskid).then((task) => {
                this.setState({
                    task: task
                });
            })
        } else{
            throw new Error("No Task!")
        }
    }


    handleChange = name => event => {
        let updatedTask = this.state.task;
        if (name === "mini" || name === "fun" || name === "draft" ){
            updatedTask[name] = event.target.checked;
        } else {
            updatedTask[name] = event.target.value;
        }
        console.log(event.target);
        this.setState({task: updatedTask}, this.updateTaskOnServer);
    };

    updateTaskOnServer(){
        console.log("red");
        updateTask(this.props.projectid, this.state.task).then(() => {
            console.log("green")
        })

    }

    deleteTask(){
        deleteTask(this.props.projectid, this.state.task.id).then(() => {
            console.log("Deleted Task");
            browserHistory.goBack();
        })
    }

    render(){
        const {classes} = this.props;
        // ToDo
        return (
            <div className={classes.changeTask}>
                <h2>Aufgabe bearbeiten</h2>

                <TextField
                    className={classes.textfield}
                    id="taskname"
                    label="Name"
                    value={this.state.task.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                />
                <TextField
                    className={classes.textfield}
                    id="notes"
                    label="Beschreibung"
                    value={this.state.task.notes}
                    onChange={this.handleChange('notes')}
                    margin="normal"
                    multiline
                    fullWidth
                    rowsMax="3"
                    InputProps={{
                        classes: {
                            input: classes.full,
                        },
                    }}
                />
                <div className={classes.selectContainer}>
                    <p className={classes.label}>Status:</p>
                    <Select
                        className={classes.select}
                        value={this.state.task.status}
                        onChange={this.handleChange('status')}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Backlog"}>Backlog</MenuItem>
                        <MenuItem value={"Todo"}>Todo</MenuItem>
                        <MenuItem value={"Waiting"}>Waiting</MenuItem>
                        <MenuItem value={"Done"}>Done</MenuItem>
                    </Select>
                </div>
                <div className={classes.switchContainer}>
                    <MiniIcon className={classes.icon}/>
                    <p className={classes.label}>Mini-Task:</p>
                    <Switch
                        className={classes.switch}
                        checked={this.state.task.mini}
                        onChange={this.handleChange('mini')}
                        value="Mini"
                        color="primary"
                    />
                </div>
                <div className={classes.switchContainer}>
                    <DraftIcon className={classes.icon}/>
                    <p className={classes.label}>Noch nicht fertig:</p>
                    <Switch
                        className={classes.switch}
                        checked={this.state.task.draft}
                        onChange={this.handleChange('draft')}
                        value="Mini"
                        color="primary"
                    />
                </div>
                <div className={classes.switchContainer}>
                    <FunIcon className={classes.icon}/>
                    <p className={classes.label}>Macht Spaß:</p>
                    <Switch
                        className={classes.switch}
                        checked={this.state.task.fun}
                        onChange={this.handleChange('fun')}
                        value="Mini"
                        color="primary"
                    />
                </div>
                <div className={classes.deadlineContainer}>
                    <p className={classes.label}>Deadline:</p>
                    <TextField
                        id="deadline"
                        label="Deadline"
                        type="date"
                        className={classes.dateField}
                        value={this.state.task.deadline}
                        onChange={this.handleChange('deadline')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <p className={classes.label}>Danger-Zone:</p>
                    <TextField
                        id="dangerZone"
                        label="Tage"
                        value={this.state.task.dangerZone}
                        onChange={this.handleChange('dangerZone')}
                        type="number"
                        className={classes.numberField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <Fab color="primary" aria-label="Delete" size="large" className={classes.fab} onClick={this.deleteTask} >
                    <DeleteIcon/>
                </Fab>
            </div>
        )
    }


}

export default withStyles(ChangeTaskStyles)(ChangeTask);