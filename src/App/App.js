import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import {HttpProvider} from "../Providers/HttpProvider/HttpProvider";
import ChangeTask from  "./TaskContainer/ChangeTask/ChangeTask";
import {Task} from "../Model/task";

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
         <div className='button__container'>
             <ChangeTask prov={this.state.httpProvider}/>

             <Button variant="contained" color="primary" className='button' onClick={this.handleClick}>
                 Get Taskname
             </Button>
             <p>{this.state.task.name}</p>
        </div>
    );
  }
}

export default App;
