
// Import the constants for the action types
import { TOGGLE_FAVE } from "../constants/action-types";
import { CLICK_DETAILS } from "../constants/action-types";
import { DETAILS_HAS_ERRORED } from "../constants/action-types";
import { DETAILS_IS_LOADING } from "../constants/action-types";
import { DETAILS_FETCH_DATA_SUCCESS } from "../constants/action-types";
import axios from 'axios';

// Action generator functions
export const toggleFave = film => (
  { type: TOGGLE_FAVE, payload: film }
)

export const clickDetails = film => (
  { type: CLICK_DETAILS, payload: film}
)

export const detailsHasErrored = bool => (
  { type: DETAILS_HAS_ERRORED, hasErrored: bool }
)

export const detailsIsLoading = bool => (
  { type: DETAILS_IS_LOADING, isLoading: bool }
)

export const detailsFetchDataSuccess = details => (
  { type: DETAILS_FETCH_DATA_SUCCESS, payload: details }
)

// Thunk function for writing async actions
export const detailsFetchData = url => {
  return (dispatch) => {
    dispatch(detailsIsLoading(true))
    axios.get(url).then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(detailsIsLoading(false))
      return response
    }).then((details) => dispatch(detailsFetchDataSuccess(details)))
      .catch(() => dispatch(detailsHasErrored(true)))
  }
}
