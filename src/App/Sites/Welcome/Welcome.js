import React from "react";
import './Welcome.css';
import Paper from '@material-ui/core/Paper';
import Skizze1 from '../../Images/OrganipathSkizze1.png';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        //this.handleNotesChange = this.handleNotesChange.bind(this);
    }


    render() {
        return(
            <div className='welcomeSite'>
                <Paper className='welcomeContent'>
                    <h1 className='welcomeMessage'>Wilkommen!</h1>

                    <h3>Was ist Organipath?</h3>
                    <p>Organipath ist eine in der Entwickling befindliche Applikation zum Organisieren von Projekten
                        und Aufgaben. <br/> Die Features und ihre Entwicklungsstufen werden im Folgenden vorgestellt.
                    </p>
                    <img src={Skizze1} alt="Scetch of Organipath Design" />
                </Paper>
            </div>
        )
    }


}

export default Welcome;