import React from 'react';
import {Divider, Drawer, IconButton, withStyles} from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import Login from "../Login/Login";
import userDrawerStyles from './UserDrawerStyles';
import TopBar from "../../App";
import UserInfo from "../UserInfo/UserInfo";


class UserDrawer extends React.Component{


    constructor() {
        super();
        this.state = {};
    }


    render(){
        const { classes } = this.props;

        return(
            <Drawer
                className='drawer'
                variant="persistent"
                anchor="top"
                open={this.props.showUserDrawer}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.props.handleUserDrawer}>
                        <ExpandLess />
                    </IconButton>
                </div>
                <Divider/>
                 {!this.props.authenticated &&
                 <Login
                    handleUserDrawer={this.props.handleUserDrawer}
                    handleLogin={this.props.handleLogin}
                />}
                {this.props.authenticated &&
                <UserInfo
                    currentUser = {this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                />}

            </Drawer>
        )
    }


}

export default withStyles(userDrawerStyles)(UserDrawer);