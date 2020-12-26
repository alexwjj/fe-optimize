import React from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Window from './Window.jsx';
import loadable from '@loadable/component';

const primary = '#30929b';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primary,
            contrastText: '#fff'
        },
        secondary: {
            main: '#000000',
            contrastText: primary
        }
    }
});

// 使用React-Loadable动态加载组件
const LoadableAbout = loadable(() => import('./About.jsx'), {
    fallback: ''
});

const LoadableWindow = loadable(() => import('./Window.jsx'), {
    fallback: ''
});

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.calculatePi(1500); // 测试密集计算对性能的影响
        // test(); // 测试函数lazy parsing, eager parsing
    }

    calculatePi(duration) {
        const start = new Date().getTime();
        while (new Date().getTime() < start + duration) {
            // TODO(Dereck): figure out the Math problem
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <MuiThemeProvider theme={theme}>
                        <div>
                            <Header/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={LoadableAbout}/>
                            <Route path="/window" component={LoadableWindow}/>
                        </div>
                    </MuiThemeProvider>
                </Switch>
            </Router>
        );
    }
}

export default App;
