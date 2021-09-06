export const fetchAnswers = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/answers')
        .then(resp => resp.json())
        .then(responses => console.log('fetchAnswers',responses))
            // dispatch({ type: 'FETCH_ANSWERS', payload: responses}))
    }
}

export const addAnswer = (response) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/answers', {
            method: 'POST',
            body: JSON.stringify(response),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(response => dispatch({ type: 'ADD_ANSWER', payload: response}))
    }
}