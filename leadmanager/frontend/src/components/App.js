import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import { Provider } from 'react-redux';

import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import store from "../store";



const alertOptions = {
    timeout: 3000,
    position: 'top right',
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <React.Fragment>
                        <Alerts/>
                        <Header />
                        <Dashboard />
                    </React.Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'))
