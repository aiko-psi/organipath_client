import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Button} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import browserHistory from "../../browserHistory";

// From: https://material-ui.com/demos/app-bar/


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    constructor(){
        super();
        this.state = {
            auth: true,
            anchorElementUser: null,
            anchorElementLogin: null,
            anchorElementMain: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleMainMenu = this.handleMainMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseMain = this.handleCloseMain.bind(this);

    }

    handleChange(event) {
        this.setState({ auth: event.target.checked });
    };

    handleMenu(event) {
        this.setState({ anchorElementUser: event.currentTarget });
    };

    handleMainMenu(event) {
        this.setState({ anchorElementMain: event.currentTarget });
    };

    handleClose() {
        this.setState({ anchorElementUser: null });
    };

    handleCloseMain() {
        this.setState({ anchorElementMain: null });
    };

    loginRequest(){
        browserHistory.push('/login');

    }


    render() {
        const { classes } = this.props;
        const { auth, anchorEl, anchorElementMain } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                    aria-owns={anchorElementMain ? 'main-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMainMenu}
                                    color="inherit">
                            <MenuIcon />
                        </IconButton>
                            <Menu
                                id="main-menu"
                                anchorEl={anchorElementMain}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElementMain)}
                                onClose={this.handleCloseMain}
                            >
                                <MenuItem onClick={this.handleCloseMain}>Projektübersicht</MenuItem>
                                <MenuItem onClick={this.handleCloseMain}>Einstellungen</MenuItem>
                            </Menu>
                        </div>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Organipath
                        </Typography>
                        {this.props.loggedIn && (
                            <div>
                                <IconButton
                                    aria-owns={anchorEl ? 'menu-user' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-user"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profil</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}
                        {!this.props.loggedIn && (
                            <Button color="inherit" onClick={this.props.handleLogin}>
                                Login
                            </Button>
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

export default withStyles(styles)(MenuAppBar);