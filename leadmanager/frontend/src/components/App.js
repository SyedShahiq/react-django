import React, { Component } from 'react'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from "../store"

class App extends Component {
    render() {
        return (
            <Provider store={store }>
                <React.Fragment>
                    <Header />
                    <Dashboard />
                </React.Fragment>
            </Provider>
        )
    }
}
import Form from './leads/Form'
ReactDOM.render(<App />, document.getElementById('app'))
