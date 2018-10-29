import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import './././Providers/HttpProvider/HttpProvider.js'

class ChangeTask extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name : "",
            notes: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

    handleChange(){
        axios.get('http://localhost:8080/api/tasks/1')
            .then(response => {
                console.log(response);
                this.setState({taskname: response.data.name})
            })
    }

    handleClick(){

    }

    initialLoad(){

    }


}