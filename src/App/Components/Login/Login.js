import React from "react";
import Button from "@material-ui/core/es/Button/Button";
import {signin} from "../../Providers/AuthProvider";
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import "./Login.css";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from "../../browserHistory";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "", password: "", nameEmpty: false, pwEmpty: false};
        this.login = this.login.bind(this);
        this.loginError = this.loginError.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    login(){
        if(this.checkFill()){
            signin(this.state.name, this.state.password)
                .then((resp) => {
                    browserHistory.push('/projects');
                })
                .catch((err) => {
                    this.loginError(err);
                })
        }

    }

    loginError(error){
        switch (error.status) {
            case 401:
                toast("Username oder Passwort");
                break;
            default:
                toast("Undefinierter Fehler (Panik now)");

        }

    }

    checkFill(){
        let returnbool = true;
        if( this.state.name.length == 0){
            this.setState({nameEmpty: true});
            returnbool = false;
        }
        if(this.state.password.length == 0){
            this.setState({pwEmpty: false});
            returnbool = false;
        }
        return returnbool;
    }


    render(){

        return (
            <form noValidate className='loginContainer' autoComplete="off">
                <TextField
                    error={this.state.nameEmpty}
                    id="usernameOrEmail"
                    label="Nutzername oder E-Mail-Adresse"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    error={this.state.pwEmpty}
                    id="password"
                    label="Passwort"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                    type="password"
                    fullWidth
                />
                <Button onClick={this.login} color={"primary"} style={{margin: 20}} >Login</Button>
            </form>
        )
    }
}

export default Login;


