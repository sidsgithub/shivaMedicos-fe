import produce from "immer";
import { LOGIN_SUCCESS } from "../actions/index";
import { LOGOUT_SUCCESS } from "../actions/index";
import store from '../store';

const initialState = store?.getState();

export default (state = initialState ? initialState:{}, action) =>

  produce(state, (draftState) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draftState.user = action.payload.user;
        draftState.isLoggedIn = true;
        draftState.token = action.payload.accessToken;
        return;

      case LOGOUT_SUCCESS:
        draftState.isLoggedIn = false;
        draftState.token = null;
        return;
      default:
        return;
    }
  });
