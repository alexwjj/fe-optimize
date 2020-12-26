import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    loading: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      loadingSpan: {
        display: 'inline-block',
        width: '8px',
        height: '100%',
        marginRight: '5px',
        borderRadius: '4px',
        animation: 'load 1.04s ease infinite',
      },
      
    });

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.classes.loading}>
                <span className={this.props.classes.loadingSpan}></span>
                <span style="animation-delay:0.13s;" className={this.props.classes.loadingSpan}></span>
                <span style="animation-delay:0.26s;" className={this.props.classes.loadingSpan}></span>
                <span style="animation-delay:0.39s;" className={this.props.classes.loadingSpan}></span>
                <span style="animation-delay:0.52s;" className={this.props.classes.loadingSpan}></span>
            </div>
        );
    }
}

export default withStyles(styles)(Loading);

