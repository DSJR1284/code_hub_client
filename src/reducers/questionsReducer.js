const questionsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUESTIONS':
            return action.payload
            case 'ADD_QUESTIONS':
            return [...state, action.payload]            
        default:
            return state 
    }
}

export default questionsReducer; 