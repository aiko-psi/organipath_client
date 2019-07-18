import React from 'react';
import 'typeface-roboto';
import {IconButton, withStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import projectCardStyle from './ProjectCardStyles';
import {List, Create, ScatterPlot} from '@material-ui/icons';

import Typography from '@material-ui/core/Typography';

import '../project.svg';
import browserHistory from "../../../browserHistory";
import {generatePath} from "react-router";


class ProjectCard extends React.Component {

    constructor (props) {
        super(props);
        this.state = { };

        this.clickCard = this.clickCard.bind(this);

    }

    clickCard(project){
        console.log(this.props.project.id);
        browserHistory.push(generatePath("/project/showlist/:projectid/", { projectid: this.props.project.id}));
    }


    render(){
        const {classes} = this.props;
        return(
            <Card className={classes.card}>
                <CardActionArea onClick={this.clickCard}>
                    <CardMedia
                        component="img"
                        className= {classes.media}
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
                <CardActions className={classes.actions}>
                    <IconButton aria-label="Add to favorites">
                        <List/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ScatterPlot/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Create/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(projectCardStyle)(ProjectCard);