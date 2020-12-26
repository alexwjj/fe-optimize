import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import model from './model';
import 'react-placeholder/lib/reactPlaceholder.css';
import Contact from './Contact';

const styles = theme => ({
    root: {
        display: 'flex',
        // flexFlow: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        margin: '2rem',
    },
    title: {
        fontFamily: 'Long Cang',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '40px',
        lineHeight: '1.40455',
        paddingLeft: 24
    },
    listContainer: {
        backgroundColor: '#353740',
        border: '2px solid #bcbcbc',
        borderRadius: '20px'
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

class About extends Component {
    render() {

        let contacts = [];
        for (let i = 0; i < 5; i++) {
        contacts.push(model.map(m=>(
            <Contact key={m.name} image={m.image} title={m.name} description={m.body}/>
        )))
        }
        return (
            <main className={this.props.classes.root}>
                <title className={this.props.classes.title}>
                    <span>骨架屏</span>
                </title>
                {/*<span className={this.props.classes.title}>随时联系</span>*/}
                {/*{contacts}*/}

                {/*注释：将svg以组件引入*/}
                {/*<AddressCardSvg width={100} color={'#fa1010'}/>*/}

                {/*<ListComponent className={this.props.classes.listContainer}/>*/}

                {contacts}
            </main>
        );
    }
}

export default withStyles(styles)(About);
