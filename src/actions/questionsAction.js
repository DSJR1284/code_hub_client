export const fetchQuestions = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/questions')
        .then(resp => resp.json())
        .then(problems => dispatch({ type: 'FETCH_QUESTIONS', payload: problems}))
    }
}

export const addQuestion = (problems) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/questions', {
            method: 'POST',
            body: JSON.stringify(problems),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(problems => dispatch({ type: 'ADD_QUESTION', payload: problems}))
    }
}