import { combineReducers } from "redux";
import auth from "./auth";
import { LOGOUT_SUCCESS } from "../actions/auth";
import { clearAll } from "../components/common/clearStorage";

const appReducers = combineReducers({
  auth,
});

const reducers = (state, action) => {
  let newState = { ...state };

  switch (action.type) {
    case LOGOUT_SUCCESS:
      clearAll();
      newState = {
        ...newState,
        auth: {
          isLoggedIn: false,
          token: null,
        },
      };
      break;
    default:
      break;
  }

  return appReducers(newState, action);
};

export default reducers;
