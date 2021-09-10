import React from 'react'
import { connect } from 'react-redux'
import QuestionsContainer from './QuestionsContainer'

const Hub = ({ questions }) => {
    return (
        <div>
            <QuestionsContainer />
            {questions.map(q => <link key={q.id}>{q.problems}</link>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {questions: state.questions}
    
}


export default connect(mapStateToProps)(Hub); 
