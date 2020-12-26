import React, {Suspense, lazy} from 'react';
import {withStyles} from '@material-ui/core/styles';

const Card = lazy(() => import('./Card'));
import model from './model.js';
import ListComponent from './ListComponent';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginTop: '2rem'
    },
    title: {
        display: 'block',
        width: '100%',
        paddingLeft: 40,
        paddingRight: 40,
        fontFamily: 'Long Cang',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '80px',
        lineHeight: '1.40455',
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    }
});

class Home extends React.Component {
    render() {
        return (
            <main className={this.props.classes.root}>
                <title className={this.props.classes.title}>
                    <span>窗口化</span>
                </title>
                <ListComponent></ListComponent>
            </main>
        );
    }
}

export default withStyles(styles)(Home);
