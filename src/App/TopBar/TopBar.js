import React from 'react';
import AppBar from "./AppBar";
import UserDrawer from "../Components/UserDrawer/UserDrawer";
import MainMenuDrawer from "../Components/MainMenuDrawer/MainMenuDrawer";
import SettingsDrawer from "../Components/SettingsDrawer/SettingsDrawer";


class TopBar extends React.Component{

    constructor(){
        super();
        this.state = {
            settingsDisplay: false,
            showUserDrawer: false,
            showMainMenuDrawer: false,
            showSettingsDrawer: false
        };

        this.handleUserDrawer = this.handleUserDrawer.bind(this);
        this.handleMainMenuDrawer = this.handleMainMenuDrawer.bind(this);
        this.handleSettingsDrawer = this.handleSettingsDrawer.bind(this);

    }

    handleUserDrawer(){
        this.setState((state) => ({showUserDrawer: !state.showUserDrawer}))
    }

    handleMainMenuDrawer(){
        this.setState((state) => ({showMainMenuDrawer: !state.showMainMenuDrawer}))
    }

    handleSettingsDrawer(){
        this.setState((state) => ({showSettingsDrawer: !state.showSettingsDrawer}))
    }



    render(){
        return(
            <div>
                <AppBar
                    authenticated = {this.props.authenticated}
                    settings = {this.state.authenticated}
                    handleUserDrawer = {this.handleUserDrawer}
                    handleMainMenuDrawer = {this.handleMainMenuDrawer}
                    handleSettingsDrawer = {this.handleSettingsDrawer}
                />
                <UserDrawer
                    authenticated = {this.props.authenticated}
                    showUserDrawer = {this.state.showUserDrawer}
                    handleUserDrawer = {this.handleUserDrawer}
                    handleLogin={this.props.handleLogin}
                    handleLogout={this.props.handleLogout}
                    currentUser = {this.props.currentUser}
                />
                <MainMenuDrawer
                    showMainMenuDrawer = {this.state.showMainMenuDrawer}
                    handleMainMenuDrawer = {this.handleMainMenuDrawer}
                />
                {this.state.settingsDisplay &&
                <SettingsDrawer
                    settings = {this.props.settings}
                    showSettingsDrawer = {this.state.showSettingsDrawer}
                    handleSettingsDrawer = {this.handleSettingsDrawer}
                />
                }
            </div>
        )
    }
}

export default TopBar;