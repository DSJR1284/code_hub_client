import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../actions/questionsAction'
import QuestionForm from './QuestionForm'

class QuestionsContainer extends Component {

    componentDidMount() {
        this.props.fetchQuestions()
    }

    render() {
        return (
            <div>
                Questions Container
                <QuestionForm />
            </div>
        )
    }
}




export default connect(null, {fetchQuestions})(QuestionsContainer);
