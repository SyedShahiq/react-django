import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (auth.is_loading) {
                return <h2>Loading ....</h2>
            } else if (!auth.is_authenticated) {
                return <Redirect to="/login"/>
            } else {
                return <Component {...props} />

            }
        }}

    />
)

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute);