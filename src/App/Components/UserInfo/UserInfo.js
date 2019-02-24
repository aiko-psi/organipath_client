import React from "react";
import {Divider, List, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core";
import Eject from '@material-ui/icons/Eject';
import Person from '@material-ui/icons/Person';
import userInfoStyles from './UserInfoStyles';
import UserDrawer from "../../Sidebar/UserDrawer";

class UserInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        const userTitle = "User: " + this.props.currentUser.name;

        return (
            <div className={classes.container}>
                <List component="userInfo">
                    <ListItem button >
                        <ListItemIcon><Eject/></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button >
                        <ListItemIcon><Person/></ListItemIcon>
                        <ListItemText primary={userTitle}/>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default withStyles(userInfoStyles)(UserInfo);