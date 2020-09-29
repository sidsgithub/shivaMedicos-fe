import produce from "immer";
import { ADD_CART} from "../actions/index";
import store from '../store';

const initialState = store?.getState();

export default (state = initialState?initialState:{}, action) =>

  produce(state, (draftState) => {

    switch (action.type) {
      case ADD_CART:
        draftState.value=action.payload;
        return;

      default:
        return;
    }
  });
