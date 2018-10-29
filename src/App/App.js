import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import {HttpProvider, ProviderContext} from "../Providers/HttpProvider/HttpProvider";

class App extends Component {
    

    constructor () {
        super();
        this.state = {
            httpProvider: new HttpProvider(),
            taskname : ""
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.state.httpProvider.getTask(1).then(response => {
            console.log(response);
            this.setState({taskname:response.data.name});
        })
    }



    render() {
        return (
         <div className='button__container'>
             <Button variant="contained" color="primary" className='button' onClick={this.handleClick}>
                 Get Taskname
             </Button>
             <p>{this.state.taskname}</p>
        </div>
    );
  }
}

export default App;
