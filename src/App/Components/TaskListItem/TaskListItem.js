import React from 'react';
import {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, withStyles} from "@material-ui/core";
import UndefinedIcon from "@material-ui/icons/HelpOutlined";
import BacklogIcon from "@material-ui/icons/WatchLater";
import TodoIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import WaitingIcon from "@material-ui/icons/HourglassEmpty";
import MiniIcon from "@material-ui/icons/PhotoSizeSelectSmall";
import DraftIcon from "@material-ui/icons/OutlinedFlag";
import DailyIcon from "@material-ui/icons/Event";
import FunIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import DangerIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/CheckBox";
import browserHistory from "../../../browserHistory";
import {generatePath} from "react-router";
import TaskListItemStyles from "./TaskListItemStyles";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class TaskListItem extends React.Component{

    constructor (props) {
        super(props); //needs task and projectid
        this.state = {open: false};
        this.changeTask = this.changeTask.bind(this);
    }

    changeTask(){
        browserHistory.push(generatePath(generatePath("/project/:projectid/task/change/:taskid/",
            { projectid: this.props.projectid, taskid: this.props.task.id})))
    }
    
    statusIcon(){
        let icon = <UndefinedIcon/>;
        switch (this.props.task.status) {
            case "Backlog": {icon = <BacklogIcon fontSize="large"/>; break;}
            case "Todo": {icon = <TodoIcon fontSize="large"/>; break;}
            case "Waiting": {icon = <WaitingIcon fontSize="large"/>; break;}
            case "Done": {icon = <DoneIcon fontSize="large"/>; break;}
        }
        return icon;
    }

    render(){
        const {classes} = this.props;
        let dailyTrue = false; //Todo Dummy
        let dangerTrue = false; //Todo Dummy

        return(
            <ListItem button onClick={this.changeTask} className={classes.listItem}>
                <ListItemIcon>
                    {this.statusIcon()}
                </ListItemIcon>
                <ListItemText
                    primary={this.props.task.name}
                    secondary={this.props.task.notes}
                    classes={{
                        primary: classes.primaryText,
                        secondary: classes.secondaryText
                    }}
                />
                <div className={classes.iconBar}>
                    <DailyIcon color={dailyTrue ? "primary": "secondary"} className={classes.iconBarIcon}/>
                    <FunIcon color={this.props.task.fun ? "primary": "secondary"} className={classes.iconBarIcon}/>
                    <DraftIcon color={this.props.task.draft ? "primary": "secondary"} className={classes.iconBarIcon}/>
                    <MiniIcon color={this.props.task.mini ? "primary": "secondary"} className={classes.iconBarIcon}/>
                    <DangerIcon color={dailyTrue ? "primary": "secondary"} className={classes.iconBarIcon}/>
                </div>
                {this.state.open ? <ExpandLess fontSize="large"/> : <ExpandMore fontSize="large"/>}
            </ListItem>
        )
    }
}

export default withStyles(TaskListItemStyles)(TaskListItem);