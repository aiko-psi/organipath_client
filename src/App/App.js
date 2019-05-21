import React, { Component } from 'react';
import '../index.css';
import 'typeface-roboto';
import {withStyles} from "@material-ui/core/es";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Welcome from "./Sites/Welcome/Welcome";
import TopBar from "./TopBar/TopBar";
import Login from "./Components/Login/Login";
import {Switch} from 'react-router-dom';
import {Redirect, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from "../browserHistory";
import RedirectLogin from "./Sites/RedirectLogin/RedirectLogin";
import ProjectOverview from "./Sites/ProjectOverview/ProjectOverview";
import {PrivateRoute} from "../Providers/RouterProvider";
import classNames from 'classnames';
import AppStyle from "./AppStyle";
import {checkLoggedIn} from "../Providers/AuthProvider";

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
            authenticated: false,
            leftDrawerOpen: false,
            rightDrawerOpen: false
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleDrawer = this.handleDrawer.bind(this);
    }


    handleLogin(user){
        browserHistory.push('/projects');
        this.setState({currentUser:user, authenticated: true});
    }

    handleLogout(){
        browserHistory.push('/');
        this.setState({currentUser:null, authenticated:false});
    }

    handleDrawer(side, value){
        switch (side) {
            case "left": {
                this.setState({leftDrawerOpen: value});
                break;
            }
            case "right": {
                this.setState({rightDrawerOpen: value});
                break;
            }
            default: {
                throw new Error("Funktion falsch genutzt") //ToDO is this usefull?
            }


        }
    }


    componentDidMount(){
        checkLoggedIn()
            .then(access => {
                this.handleLogin("user") //TODO: Dummy!!!
            })
            .catch(() => {
                //dunno?
            })

    }




    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <TopBar
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    handleDrawer={this.handleDrawer}/>
                <ToastContainer />
                <div className= {classNames(classes.site_container,
                    {[classes.site_container_small] : this.state.leftDrawerOpen} )}>
                    <Switch>
                        <Route exact path="/"
                               render={(props) =>
                                   <Welcome/>
                               }>
                        </Route>
                        <PrivateRoute path="/projects"
                                      component={ProjectOverview}
                               >
                        </PrivateRoute>
                        <Route path="/login/:stringi"
                               render={({match}) =>
                                   <RedirectLogin error={true} stringi={match.params}/>
                               }>
                        </Route>

                    </Switch>
                </div>
            </MuiThemeProvider>
    );
  }
}

export default withStyles(AppStyle)(App);
