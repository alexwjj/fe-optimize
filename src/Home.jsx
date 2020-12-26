import React, {Suspense, lazy} from 'react';
import {withStyles} from '@material-ui/core/styles';

const Card = lazy(() => import('./Card'));
import model from './model.js';
// import Card from './Card';

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
        marginBottom: 70,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    }
});

class Home extends React.Component {
    render() {
        let cards = [];
        // 多次添加更多的卡片，展示懒加载
        for (let i = 0; i < 100; i++) {
            cards.push(model.map(panel => (
                <Suspense fallback={<div></div>}>
                    <Card key={panel.name} image={panel.image} title={panel.name}
                          route={panel.route} description={panel.body}/>
                </Suspense>
            )));
        }
        return (
            <main className={this.props.classes.root}>
                <title className={this.props.classes.title}>
                    <span>性能与体验</span>
                </title>
                {cards}
            </main>
        );
    }
}

export default withStyles(styles)(Home);
