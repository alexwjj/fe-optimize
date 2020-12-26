import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MaterialUICard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ReactPlaceholder from 'react-placeholder';
import ContactPlaceholder from './ContactPlaceholder';

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
        objectFit: 'cover'
    }
});

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
    }

    becomeReady = () => {
        setTimeout(()=> {
            this.setState({
                ready: true
            })
        }, 2000)

    }

    render() {
        const {ready} = this.state;
        const imageStyle = !ready ? {display: 'none'}: {};
        let cardMedia = <CardMedia
            component={'img'}
            style={imageStyle}
            className={this.props.classes.media}
            image={this.props.image}
            onLoad={this.becomeReady}
        />;
        return (
            <div className={this.props.classes.root}>
                <ReactPlaceholder ready={this.state.ready} customPlaceholder={<ContactPlaceholder/>}>
                    <MaterialUICard className={this.props.classes.card}>
                        {cardMedia}
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography component="p">
                                {this.props.description}
                            </Typography>
                        </CardContent>
                    </MaterialUICard>
                </ReactPlaceholder>
                {!ready && cardMedia}
            </div>
        );
    }
}

export default withStyles(styles)(Contact);