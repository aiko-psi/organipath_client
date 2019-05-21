import React from 'react';
import 'typeface-roboto';
import './ProjectOverview.css';
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import {getAllProjects} from "../../../Providers/HttpProvider";
import NewProjectDialog from "../../Components/NewProjectDialog/NewProjectDialog";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class ProjectOverview extends React.Component {

    constructor (props) {
        super(props);
        this.state = {projectList: new Array(), openNewProjectDialog: false};

        this.handleProjDialogClose = this.handleProjDialogClose.bind(this);
        this.handleProjDialogOpen = this.handleProjDialogOpen.bind(this);
    }

    componentDidMount(){
        getAllProjects().then(projectList =>{
            console.log(projectList);
            this.setState({projectList: projectList})
        })
    }

    handleProjDialogClose(){
        this.setState({openNewProjectDialog: false, })
    }

    handleProjDialogOpen(){
        this.setState({openNewProjectDialog: true, })
    }

    render(){
        const projects = this.state.projectList.map(project => {
            return <ProjectCard
                project = {project}
                key={project.id.toString()}
            />
        });

        return(
            <div>
                <div className='projectOverview'>
                    {projects}
                </div>
                <NewProjectDialog
                    openNewProjectDialog={this.state.openNewProjectDialog}
                    handleProjDialogClose={this.handleProjDialogClose}
                 />
                <Fab color="primary" aria-label="Add" onClick={this.handleProjDialogOpen}>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default ProjectOverview;