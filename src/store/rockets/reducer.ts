import { Reducer } from "redux";
import { rocketsActionTypes, RocketsState } from "./types";

// Type-safe initialState!
const initialState: RocketsState = {
  data: [],
  errors: undefined,
  loading: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<RocketsState> = (state = initialState, action) => {
  switch (action.type) {
    case rocketsActionTypes.FETCH_ROCKETS_REQUEST: {
      return { ...state, loading: true };
    }
    case rocketsActionTypes.FETCH_ROCKETS_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case rocketsActionTypes.FETCH_ROCKETS_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as rocketsReducer };
