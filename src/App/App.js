import React, { Component } from 'react';
import './App.css';
import '../index.css';
import 'typeface-roboto';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProjectOverview from "./Sites/ProjectOverview/ProjectOverview";
import Welcome from "./Sites/Welcome/Welcome";
import TopBar from "./TopBar/TopBar";
import Login from "./Components/Login/Login";
import {Route, withRouter, Switch} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from "../browserHistory";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
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
            currentUser: {name: ""},
            authenticated: false
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(user){
        browserHistory.push('/projects');
        this.setState({currentUser:user, authenticated: true});
    }

    handleLogout(){
        this.setState({currentUser:null, authenticated:false});
    }


    componentDidMount(){

    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <TopBar
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
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
