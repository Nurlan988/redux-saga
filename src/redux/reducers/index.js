import { combineReducers } from "redux";
import news from "./news";
import errors from "./errors";

const rootreduser = combineReducers({
  news,
  errors,
});

export default rootreduser;

