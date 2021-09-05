export const answersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ANSWERS':
            return action.payload
            case 'ADD_ANSWERS':
            return [...state, action.payload]            
        default:
            return state 
    }
}

