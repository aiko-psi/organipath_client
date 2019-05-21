import React from 'react';
import 'typeface-roboto';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControlLabel, Switch,
    TextField, withStyles
} from "@material-ui/core";
import {Project} from "../../../Model/Project";
import {createProject} from "../../../Providers/HttpProvider";


class NewProjectDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newProject: new Project(), nameFill: false};

        this.checkFill = this.checkFill.bind(this);
        this.createProject = this.createProject.bind(this);
    }

    handleChange = name => event => {
        let newProj = this.state.newProject;
        newProj[name] = event.target.value;
        this.setState({
            newProject: newProj,
        });
        this.checkFill();
    };

    checkFill(){
        this.setState({nameFill: this.state.newProject.name !== "", })
    }

    createProject(){
        if(this.state.nameFill){
            createProject(this.state.newProject).then( response => {
                this.props.handleProjDialogClose();
            })
        }

    }

    render(){
        let open = this.props.openNewProjectDialog;
        let handleClose = this.props.handleProjDialogClose;

        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Neues Projekt anlegen</DialogTitle>
                <DialogContent>
                    <TextField
                        error={this.state.nameFill}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        value={this.state.newProject.name}
                        onChange={this.handleChange('name')}
                        type="text"
                        fullWidth
                    />
                    <FormControlLabel control={
                        <Switch value={this.state.newProject.privacy}
                                onChange={this.handleChange("privacy")}/>
                    } label="Privat"
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Beschreibung"
                        value={this.state.newProject.description}
                        onChange={this.handleChange('description')}
                        type="text"
                        fullWidth
                        multiline
                        rows="4"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Abbrechen
                    </Button>
                    <Button onClick={this.createProject} color="primary">
                        Erstellen
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

}

export default NewProjectDialog;