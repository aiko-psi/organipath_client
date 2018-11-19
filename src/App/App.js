import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {HttpProvider} from "../Providers/HttpProvider/HttpProvider";
import ChangeTask from  "./TaskContainer/ChangeTask/ChangeTask";
import {Task} from "../Model/Task";

import Sidebar from "./Sidebar/Sidebar";
import MenuAppBar from "./Sidebar/AppBar";

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
            httpProvider: new HttpProvider(),
            task: new Task(),
            taskname : ""
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.state.httpProvider.getTask(1).then(task => {
            console.log(task);
            this.setState({task: task});
        })
    }

    componentDidMount(){
        this.state.httpProvider.getTask(1)
            .then(task => {
                console.log(task);
                this.setState({task: task})
            });

    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MenuAppBar/>
                <div className='site_container'>
                    <Sidebar/>
                    <div className='button__container'>
                        <ChangeTask prov={this.state.httpProvider}/>

                        <Button variant="contained" color="primary" className='button' onClick={this.handleClick}>
                            Get Taskname
                        </Button>
                        <p>{this.state.task.name}</p>
                    </div>
                </div>
            </MuiThemeProvider>
    );
  }
}

export default App;
