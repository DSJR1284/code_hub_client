import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAnswer } from '../actions/answersAction'

class AnswerForm extends Component {

    state = {
        response: '',
        question_id: '',
        user_id: 1        
    }

    handleChange = e => {
        const {name, value} = e.target 
        
        this.setState({
            [name]: value
        })      
    }

    handleSubmit = e => {
        // e.preventDefault()
        this.props.addAnswer(this.state)
    }
    
    render() {
        return (            
            <form onSubmit={this.handleSubmit}>
                <label>Answer: </label>
                <textarea type='text' value={this.state.response} onChange={this.handleChange} name="response"/>
                <input type="hidden" defaultValue={1} onChange={this.handleChange}  name="user_id"/>            
                <input type="hidden" value={this.state.question_id} onChange={this.handleChange}  name="question_id"/>
                <input type='submit' value="Answer Question"/>
            </form>           
        )
    }
}

export default connect(null, {addAnswer})(AnswerForm);