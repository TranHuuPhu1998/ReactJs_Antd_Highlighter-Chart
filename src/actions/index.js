import * as Types from "../constants/ActionTypes.js";
import callApi from "../utils/apiCaller";

// fetch All Data 
export const actFetchAllData = (data) => {
  return {
      type: Types.FETCH_ALL_DATA,
      payload : {
        data
      }
  };
};

export const actFetchAllDataRequest = () => {
  return dispatch => {
    return callApi("english", "GET", null).then(res => {
        if (res.data) {
            dispatch(actFetchAllData(res.data));
        }
    });
  };
};


export const actFetchEnglishDetailRequest = (id) => {
  return dispatch => {
    return callApi(`english/${id}/project`, "GET", null).then(res => {
      if (res.data) {
        dispatch(actFetchEnglishDetail(res.data));
      }
    });
  };
};

export const actFetchEnglishDetail = (data) => {
  return {
    type: Types.FETCH_ENG_DEATIL_DATA,
    payload : {
      data
    }
};
};
