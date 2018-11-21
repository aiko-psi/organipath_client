import React from 'react';
import 'typeface-roboto';
import './ProjectOverview.css';
import {Project} from "../../Model/Project";
import ProjectCard from "./ProjectCard";

class ProjectOverview extends React.Component {

    constructor (props) {
        super(props);
        this.state = {projectList: new Array()};

        this.provider = this.props.prov;
        //this.handleNotesChange = this.handleNotesChange.bind(this);

    }

    componentDidMount(){
        this.provider.getAllProjects()
            .then(projectList => {
                this.setState({projectList: projectList});
            })
    }



    render(){
        const projects = this.state.projectList.map(project => {
            console.log(project);
            return <ProjectCard
                project = {project}
                key={project.id.toString()}
            />
        });

        return(
            <div className='projectOverview'>
                {projects}
            </div>
        )
    }
}

export default ProjectOverview;