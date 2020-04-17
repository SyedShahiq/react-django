import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import store from "../store";
import Register from './accounts/Register';
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';



const alertOptions = {
    timeout: 3000,
    position: 'top right',
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <React.Fragment>
                            <Alerts />
                            <Header />
                        </React.Fragment>
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard}/>
                                <Route exact path="/register" component={Register}></Route>
                                <Route exact path="/login" component={Login}></Route>
                            </Switch>
                        </div>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'))
