import React, { Component } from 'react'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import ReactDOM from 'react-dom'
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Dashboard/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'))
