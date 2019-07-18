import React from "react";
import {createTask, getAllTasks, getProject, getTask} from "../../../Providers/HttpProvider";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {List, ListSubheader, withStyles} from "@material-ui/core";
import {Project} from "../../../Model/Project";
import ProjectTaskListStyles from "./ProjectTaskListStyles";
import {Task} from "../../../Model/Task";
import TaskListItem from "../../Components/TaskListItem/TaskListItem";
import browserHistory from "../../../browserHistory";
import {generatePath} from "react-router";

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
            this.setState({taskList: newTaskList});
            browserHistory.push(generatePath(generatePath("/project/:projectid/task/change/:taskid/",
                { projectid: this.state.project.id, taskid: newTask.id})))
        });
    }

    render(){
        const {classes} = this.props;
        const tasks = this.state.taskList.map(task =>
            <TaskListItem task={task} projectid={this.state.project.id} key={task.id}>
            </TaskListItem>
        );

        return(
            <div className={classes.taskList}>
                <h2>Projekt: {this.state.project.name}</h2>
                {this.state.taskList.length == 0 &&
                <p>Noch keine Aufgaben vorhanden!</p>}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={<ListSubheader>Aufgaben</ListSubheader>}
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
