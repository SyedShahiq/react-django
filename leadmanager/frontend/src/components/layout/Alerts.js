import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

export class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            console.log(error);
            if (error.msg.name) {
                alert.error('Name: ' + error.msg.name)
            }
            if (error.msg.email) {
                alert.error('Email: ' + error.msg.email.join())
            }
            if (error.msg.detail) {
                alert.error(error.msg.detail)
            }
            if (error.msg.username) {
                alert.error("Username: "+error.msg.username) 
            }
            if (error.msg.password) {
                alert.error("Password: "+error.msg.password) 
            }
            if (error.msg.non_field_errors) {
                alert.error('Login: ' + error.msg.non_field_errors.join())
            }
        }
        if (message !== prevProps.message) {
            if (message.leadDeleted) {
                alert.success(message.leadDeleted)
            }
            if (message.leadAdded) {
                alert.success(message.leadAdded)
            }
        }
    }
    render() {
        return <Fragment />
    }
}
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})
export default connect(mapStateToProps)(withAlert()(Alerts));
