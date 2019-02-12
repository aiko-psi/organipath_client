import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProjectOverview from "./Sites/ProjectOverview/ProjectOverview";
import Welcome from "./Sites/Welcome/Welcome";
import MenuAppBar from "./Sidebar/AppBar";
import Login from "./Components/Login/Login";
import {Route, withRouter, Switch} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from "../browserHistory";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6a1b9a',
        },
        secondary: {
            main: '#7c4dff',
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
        browserHistory.push('/login');
        this.setState({currentUser:user, loggedIn: true});
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
                <ToastContainer />
                <div className='site_container'>
                    <Switch>
                        <Route exact path="/"
                               render={(props) =>
                                   <Welcome/>
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
