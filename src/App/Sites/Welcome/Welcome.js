import React from "react";
import Paper from '@material-ui/core/Paper';
import Skizze1 from '../../Images/OrganipathSkizze1.png';
import {withStyles} from "@material-ui/core";
import ProjectOverviewStyles from "../ProjectOverview/ProjectOverviewStyles";
import WelcomeStyles from "./WelcomeStyles";

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        //this.handleNotesChange = this.handleNotesChange.bind(this);
    }


    render() {
        const {classes} = this.props;
        return(
            <div className={classes.welcomeSite}>
                <Paper className={classes.welcomeContent}>
                    <h1 className={classes.welcomeMessage}>Wilkommen!</h1>

                    <h3>Was ist Organipath?</h3>
                    <p>Organipath ist eine in der Entwickling befindliche Applikation zum Organisieren von Projekten
                        und Aufgaben. <br/> Die Features und ihre Entwicklungsstufen werden im Folgenden vorgestellt.
                    </p>
                    <img className={classes.img} src={Skizze1} alt="Sketch of Organipath Design" />
                </Paper>
            </div>
        )
    }


}

export default withStyles(WelcomeStyles)(Welcome);