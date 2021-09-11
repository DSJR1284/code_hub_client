import React from 'react'
import { connect } from 'react-redux'
import AnswersContainer from './AnswersContainer'
import AnswersForm from './AnswersForm'
import QuestionsContainer from './QuestionsContainer'
// import {useSelector} from 'react-redux'

const Hub = ({ questions,answers }) => {
    
   
    // let question = questions.map(q => q.id)
    // let answer = answers.map(a => a.question_id)

    // if(question === answer){
    //     <AnswersContainer /> }
    
        
    return (
        <div>
            <QuestionsContainer />
            <ul>
                {questions.map(q => <li key={q.id}> {q.problem} <br /> 
                Answers: {q.answers.map(q => q.response)}
                
                <AnswersForm /> </li>
                )}
            <AnswersContainer />
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        answers: state.answers
    }
    
}


export default connect(mapStateToProps)(Hub); 
