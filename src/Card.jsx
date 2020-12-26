import React from 'react';
import MaterialUICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import './animation.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const styles = theme => ({
    root: {
        margin: theme.spacing(1),
        willChange: 'transform'
    },
    card: {
        width: 300
    },
    cardSpinning: {
        width: 300,
        animation: '3s linear 1s infinite running rotate'
    },
    media: {
        height: 200,
        width: 300,
        objectFit: 'cover',
    }
});

class MyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
        }
    }

    spin = () => {
        this.setState({spinning: true});
    }

    render() {
        /*根据Spinning进行判断决定是否旋转*/
        let cardClass = this.state.spinning ? this.props.classes.cardSpinning : this.props.classes.card;
        return (
            <div className={this.props.classes.root}>
                {/* 添加点击事件，触发动画 onClick={this.spin} */}
                <MaterialUICard className={cardClass} >
                    <LazyLoadImage
                        className={this.props.classes.media}
                        src={this.props.image}
                        effect="blur"
                        rel="preconnect"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                    <CardActions className={this.props.classes.actions}>
                        <Button size="small" color="primary" variant="outlined">
                            前端性能优化
                        </Button>
                    </CardActions>
                </MaterialUICard>
            </div>
        );
    }
}

export default withStyles(styles)(MyCard);
