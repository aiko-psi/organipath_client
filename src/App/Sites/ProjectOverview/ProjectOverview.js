import React from 'react';
import 'typeface-roboto';
import './ProjectOverview.css';
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import {getAllProjects} from "../../../Providers/HttpProvider";

class ProjectOverview extends React.Component {

    constructor (props) {
        super(props);
        this.state = {projectList: new Array()};

    }

    componentDidMount(){
        getAllProjects().then(projectList =>{
            console.log(projectList);
            this.setState({projectList: projectList})
        })
    }

    render(){
        const projects = this.state.projectList.map(project => {
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