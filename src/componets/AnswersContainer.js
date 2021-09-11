import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAnswers } from '../actions/answersAction'
import Answers from './Answers'

class AnswersContainer extends Component {

    componentDidMount() {
        this.props.fetchAnswers()
    }

    render() {
        return (
            <div>
                Answers Container
                <Answers />
            </div>
        )
    }
}

export default connect(null, { fetchAnswers })(AnswersContainer);
