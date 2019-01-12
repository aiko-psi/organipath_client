import React from 'react';
import 'typeface-roboto';
import {Project} from "../../Model/Project";
import './ProjectCard.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../project.svg';

import Avatar from '@material-ui/core/Avatar';

class ProjectCard extends React.Component {

    constructor (props) {
        super(props);
        this.state = { };

        this.clickCard = this.clickCard.bind(this);

    }

    clickCard(project){
        console.log(this.props.project.id);
    }




    render(){
        return(
            <Card className='card'>
                <CardActionArea onClick={this.clickCard}>
                    <CardMedia
                        component="img"
                        className='media'
                        image='../project.svg'
                        title="Project Icon"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.project.name}
                        </Typography>
                        <Typography component="p">
                            Test
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </Card>
        )
    }
}

export default ProjectCard;