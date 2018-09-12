
export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess = (cheeses) => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
const fetchCheesesError = (error) => ({
    type: FETCH_CHEESES_ERROR,
    error
});
/*
export const fetchCheeses = () => {
    dispatch(fetchCheesesRequest());
    return fetch(`/api/racks`)
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            dispatch(fetchCheesesSuccess(res));
        })
        .catch((err) => {
            dispatch(fetchCheesesError(err));
        })
}*/

const BASE_URL = 'http://localhost:9002';


/*export const fetchCheeses = () => (dispatch) => {
  dispatch(fetchCheesesRequest());
  fetch(`${BASE_URL}/api/cheeses`)
		.then(res => res.json())
		.then((cheeses) => dispatch(fetchCheesesSuccess(cheeses)))
		.catch(err => {
			dispatch(fetchCheesesError(err));
		});



};*/

export const fetchCheeses = () => (dispatch) => {
  console.log(BASE_URL);
  dispatch(fetchCheesesRequest());
  return(
        fetch (`${BASE_URL}/api/cheeses`, {
             method: 'GET'
        })
        .then(res => {
            if (!res.ok) {
              return Promise.reject('Unable to reach server');
            }
        return res.json();
        })
        .then(data => dispatch(fetchCheesesSuccess(data)))
        .catch(err => fetchCheesesError(err))
    )

}



