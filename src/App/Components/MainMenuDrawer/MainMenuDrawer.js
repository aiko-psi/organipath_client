import React from 'react';
import {Divider, Drawer, IconButton, withStyles} from "@material-ui/core";
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import ListItemIcon from '@material-ui/core/ListItemIcon/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ViewWeek from '@material-ui/icons/ViewWeek';
import Help from '@material-ui/icons/Help'
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import mainMenuDrawerStyles from './MainMenuDrawerStyles';
import { Link } from 'react-router-dom';

class MainMenuDrawer extends React.Component{


    constructor() {
        super();
        this.state = {};
    }


    render(){
        const {classes} = this.props;

        return(
            <Drawer
                className='drawer'
                variant="persistent"
                anchor="left"
                open={Boolean(this.props.showMainMenuDrawer)}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className='drawerHeader'>
                    <IconButton onClick={this.props.handleMainMenuDrawer}>
                        <ChevronLeft/>
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/projects">
                        <ListItemIcon><ViewWeek/></ListItemIcon>
                        <ListItemText primary="Projektübersicht" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button >
                        <ListItemIcon><Help/></ListItemIcon>
                        <ListItemText primary="Hilfe" />
                    </ListItem>
                </List>
            </Drawer>
        )
    }


}

export default withStyles(mainMenuDrawerStyles)(MainMenuDrawer);