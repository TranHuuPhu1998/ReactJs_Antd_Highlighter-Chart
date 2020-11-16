import { combineReducers } from "redux";
import FetchData from "./reducersFetchData.js";
import FetchDataEngDetails from "./reducersFetchEngDetail.js";

const appReducers = combineReducers({
  FetchData,
  FetchDataEngDetails
});


export default appReducers;
