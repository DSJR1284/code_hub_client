import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addQuestion } from '../actions/questionsAction'

class QuestionForm extends Component {

    state = {
        problem: '',
        user_id: 2      
    }

    handleChange = e => {
        const {name, value} = e.target        
        this.setState({
            [name]: value
        })      
    }

    handleSubmit = e => {
        this.props.addQuestion(this.state)
    }
    
    render() {
        return (            
            <form onSubmit={this.handleSubmit}>                 
                <label> Question: </label>
                <textarea type='text' value={this.state.problem} onChange={this.handleChange} name="problem"/> 
                < br />
                <input type="hidden" defaultValue={2} onChange={this.handleChange}  name="user_id"/>            
                <input type='submit' value="Ask A Question"/>
            </form>           
        )
    }
}

export default connect(null, {addQuestion})(QuestionForm);