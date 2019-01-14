import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import MenuAppBar from "./Sidebar/AppBar";
import Login from "./Login/Login";
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6a1b9a',
        },
        secondary: {
            main: '#4527a0',
        },
    },
});

class App extends Component {

    constructor () {
        super();
        this.state = {
            currentUser: null,
            loggedIn: false
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(user){
        this.setState({currentUser:user, loggedIn: true})
    }

    handleLogout(){
        this.setState({currentUser:null, loggedIn:false});
    }


    componentDidMount(){

    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MenuAppBar currentUser={this.state.currentUser}
                            loggedIn={this.state.loggedIn}
                            handleLogin={this.handleLogin}
                            handleLogout={this.handleLogout}/>
                <div className='site_container'>
                    <Switch>
                        <Route exact path="/"
                               render={(props) =>
                                   <div>Welcome!</div>
                               }>
                        </Route>
                        <Route path="/projects"
                               render={(props) =>
                                   <ProjectOverview />
                               }>
                        </Route>
                        <Route path="/login"
                               render={(props) =>
                                   <Login />
                               }>
                        </Route>

                    </Switch>
                </div>
            </MuiThemeProvider>
    );
  }
}

export default App;
