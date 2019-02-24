import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Button} from "@material-ui/core";
import browserHistory from "../../browserHistory";
import UserDrawer from "./UserDrawer";
import appBarStyles from './AppBarStyles';

// From: https://material-ui.com/demos/app-bar/

class MenuAppBar extends React.Component {
    constructor(){
        super();
    }


    render() {
        const { classes } = this.props;

        return (
            <div className= 'root'>
                <AppBar position="fixed">
                    <Toolbar>
                        <div>
                            <IconButton className='menuButton'
                                        aria-label="Menu"
                                        onClick={this.props.handleMainMenuDrawer}
                                        color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Organipath
                        </Typography>
                        {this.props.authenticated && (
                            <div>
                                <IconButton
                                    onClick={this.props.handleUserDrawer}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        )}
                        {!this.props.authenticated && (
                            <div>
                            <Button
                                color="inherit"
                                onClick={this.props.handleUserDrawer}
                            >
                                Login
                            </Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(appBarStyles)(MenuAppBar);