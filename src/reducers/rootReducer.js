import { combineReducers } from 'redux'
import { questionsReducer } from './questionsReducer'
import { answersReducer } from './answersReducer'
import { usersReducer } from './usersReducer'



export const rootReducer = combineReducers({   
    questions: questionsReducer,
    answers: answersReducer,
    users: usersReducer
})