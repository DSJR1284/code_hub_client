import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../actions/questionsAction'

class QuestionsContainer extends Component {

    componentDidMount() {
        this.props.fetchQuestions()
    }

    render() {
        return (
            <div>
                Questions Container
            </div>
        )
    }
}




export default connect(null, {fetchQuestions})(QuestionsContainer);
