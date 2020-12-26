import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = {
    title: {
        backgroundColor: "#3e7fee"
    },
    aboutLink: {
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
        textDecoration: 'none',
        border: '1px solid w',
        padding: 6,
        borderTopRightRadius: 10,
        '&:hover': {
            color: '#f3a279',
            border: '1px solid #f3a279',
        },
        '&:active': {
            color: '#fa6a21',
            border: '1px solid #fa6a21',
        }
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openDrawer = this.openDrawer.bind(this);
    }
    openDrawer() {
        this.setState({open: true});
    }
    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar position="static" className={this.props.classes.title}>
                    <Toolbar>
                        <Typography variant="h6">
                            <Link className={this.props.classes.aboutLink} to="/">前端性能优化</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={this.props.classes.aboutLink} to="/about">骨架屏</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className={this.props.classes.aboutLink} to="/window">窗口化</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
