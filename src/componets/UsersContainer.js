import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/usersAction'

class UsersContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                Users Container
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer);