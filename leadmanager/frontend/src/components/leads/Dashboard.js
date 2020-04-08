import React from 'react'
import Form from './Form';
import Lead from './Lead'

export default function Dashboard() {
    return (
        <React.Fragment>
            <div className="container pd-t-1">
                <Form />
                <Lead />
            </div>
        </React.Fragment>
    )
}
