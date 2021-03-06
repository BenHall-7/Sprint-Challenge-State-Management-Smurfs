import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCEED = 'FETCH_SMURFS_SUCCEED';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START});
    axios.get("http://localhost:3333/smurfs")
        .then(({data}) => {
            dispatch({type: FETCH_SMURFS_SUCCEED, payload: data});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: FETCH_SMURFS_FAIL});
        });
}

export const addSmurf = (name, age, height) => dispatch => {
    axios.post("http://localhost:3333/smurfs", { name, age, height })
        .then(({data}) => {
            dispatch({type: FETCH_SMURFS_SUCCEED, payload: data});
        })
        .catch(console.log);
}

export const setSmurf = (id, name, age, height) => dispatch => {
    axios.put(`http://localhost:3333/smurfs/${id}`, { name, age, height })
        .then(({data}) => {
            dispatch({type: FETCH_SMURFS_SUCCEED, payload: data})
        })
        .catch(console.log);
}