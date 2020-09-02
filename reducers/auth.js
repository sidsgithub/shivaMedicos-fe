import produce from "immer";
import { LOGIN_SUCCESS } from "../actions/auth";
import { getMyObject } from "../components/common/getItem";
import { setObjectValue } from "../components/common/setItem";

const token = getMyObject("token");
const user = token ? getMyObject("user") : null;

const initialState = {
  user,
  isLoggedIn: token != null,
  token,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      
      case LOGIN_SUCCESS:
        setObjectValue("token", action.payload.accessToken);
        setObjectValue("user", action.payload.user);
        draftState.user = action.payload.user;
        draftState.isLoggedIn = true;
        draftState.token = action.payload.accessToken;
        return;

      default:
        return;
    }
  });
