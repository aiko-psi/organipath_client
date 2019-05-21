import React from 'react';
import Login from "../../Components/Login/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RedirectLogin extends React.Component{
    constructor (props) {
        super(props);
        this.state = {projectList: new Array()};
        this.showLoginError = this.showLoginError.bind(this);
    }

    componentDidMount(){
        if (this.props.error) this.showLoginError() ;
    }

    showLoginError(){
        toast.error("Keine Berechtigung!" + this.props.stringi.stringi, {
            position: toast.POSITION.TOP_LEFT
        });

    }

    render(){
        return (
            <Login/>
        )
    }
}

export default RedirectLogin;