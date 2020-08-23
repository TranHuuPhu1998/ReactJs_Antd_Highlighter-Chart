import * as Types from "../constants/ActionTypes.js";
import callApi from "../utils/apiCaller";
// fetch All Data
export const actFetchAllData = dataFetch => {
  return {
      type: Types.FETCH_ALL_DATA,
      dataFetch
  };
};
export const actFetchAllDataRequest = data => {
  return dispatch => {
    return callApi("course", "GET", null).then(res => {
        if (res.data) {
            dispatch(actFetchAllData(res.data));
        }
    });
};
};