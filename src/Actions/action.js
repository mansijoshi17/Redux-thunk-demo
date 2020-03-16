import Axios from "axios";


export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const getpost = (val) => {
    return {
        type: "FETCH_POSTS",
        payload: val
    };
}

export function FetchPosts() {
    return dispatch => {
        dispatch(loading());
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
            dispatch(getpost(data.data));
        })
    }
}