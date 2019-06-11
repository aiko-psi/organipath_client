import React from "react";
import {createTask, getAllTasks, getProject, getTask} from "../../../Providers/HttpProvider";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {List, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core";
import DraftsIcon from '@material-ui/icons/Drafts';
import {Project} from "../../../Model/Project";
import ProjectTaskListStyles from "./ProjectTaskListStyles";
import {Task} from "../../../Model/Task";

class ProjectTaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {project: new Project(),taskList: new Array()};
        this.makeNewTask = this.makeNewTask.bind(this);
    }

    componentDidMount(){
        getProject(this.props.projectid).then(project => {
            this.setState({project: project})
        });
        getAllTasks(this.props.projectid).then((tasks) => {
            this.setState({taskList: tasks})
        });
    }

    makeNewTask(){
        createTask(this.state.project.id, new Task("default name", this.state.project.id, 0)).then((newTask)=> {
            let newTaskList = this.state.taskList;
            newTaskList.push(newTask);
            this.setState({taskList: newTaskList})
        });
    }

    render(){
        const {classes} = this.props;
        const tasks = this.state.taskList.map(task => {
            let name = task.name;
            return <ListItem key={task.id} button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={name}/>
            </ListItem>
        });

        return(
            <div>
                <h2>Projekt: {this.state.project.name}</h2>
                {this.state.taskList.length == 0 &&
                <p>Noch keine Aufgaben vorhanden!</p>}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.list}
                >
                    {tasks}
                </List>
                <Fab color="primary" aria-label="Add" size="large" className={classes.fab} onClick={this.makeNewTask} >
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default withStyles(ProjectTaskListStyles)(ProjectTaskList);
