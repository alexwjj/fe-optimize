import React from 'react';
import MaterialUICard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import './animation.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    root: {
        margin: theme.spacing(1),
    },
    card: {
        width: 300,
        height: 300
    },
    media: {
        height: 200,
        width: 300,
        objectFit: 'cover',
        backgroundColor: '#aaa',
        animation: 'react-placeholder-pulse 1.5s infinite'
    },
    textBlock: {
        maxHeight: '14.2857%',
        width: '97%',
        height: '1em',
        backgroundColor: 'rgb(205, 205, 205)',
        marginTop: 0,
        animation: 'react-placeholder-pulse 1.5s infinite'
    }
});

class ContactPlaceholder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <MaterialUICard className={this.props.classes.card}>
                <CardMedia
                    className={this.props.classes.media}
                    src={this.props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        <div className={this.props.classes.textBlock}></div>
                    </Typography>
                    <Typography component="p">
                        <div className={this.props.classes.textBlock}></div>
                    </Typography>
                </CardContent>
            </MaterialUICard>
        );
    }
}

export default withStyles(styles)(ContactPlaceholder);