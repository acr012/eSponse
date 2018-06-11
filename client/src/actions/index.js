import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

/* Action creators
 * return an action with type prop and payload
 *
 * Thunk
 * used with action creators to allow direct access to the dispatch function
 * so that the action is not immediately sent to the store
 *
 * Dispatch action after api request
 */
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data});
};

// Update user with payment token from stripe
export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Send POST request with form values
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys')
  dispatch({ type: FETCH_USER, payload: res.data });
};


// List of surveys
export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data })
}
