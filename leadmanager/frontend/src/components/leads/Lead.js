import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getleads } from '../../actions/leads';
class Lead extends Component {
    // static PropTypes = {
    //     leads: PropTypes.array.isRequired
    // }
    componentDidMount() {
        this.props.getleads();
    }
    render() {
        return (
            <div>
                <h1>LEADS</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map((lead, index) => (
                            <tr key={index}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    leads: state.leads.leads
})
export default connect(mapStateToProps, { getleads })(Lead)
