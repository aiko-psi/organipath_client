import React from 'react';
import {Divider, Drawer, IconButton, withStyles} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import settingsDrawerStyles from './SettingsDrawerStyles';

class SettingsDrawer extends React.Component{


    constructor() {
        super();
        this.state = {};
    }


    render(){

        return(
            <Drawer
                className='drawer'
                variant="persistent"
                anchor="top"
                open={Boolean(this.props.anchorEl)}
                classes={{
                    paper: 'drawerPaper',
                }}
            >
                <div className='drawerHeader'>
                    <IconButton onClick={this.props.handleDrawerClose}>
                         <ExpandLess />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button >
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Mail" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        )
    }


}

export default withStyles(settingsDrawerStyles)(SettingsDrawer);