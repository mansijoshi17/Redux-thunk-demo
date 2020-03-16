
const INITIAL_STATE = {
    posts : [],
    loading : false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            state.loading = false
            state.posts = action.payload
            break;
        case 'LOADING' :
            state.loading = true
            break;
    }
    return {...state}
}