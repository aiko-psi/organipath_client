import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import axios from 'axios'

class App extends Component {
    

    constructor () {
        super();
        this.state = {taskname : ""};

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        axios.get('http://localhost:8080/api/tasks/1')
            .then(response => {
                console.log(response);
                this.setState({taskname: response.data.name})
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
