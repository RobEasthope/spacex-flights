import { Reducer } from "redux";
import { LaunchsState, LaunchsActionTypes } from "./types";

// Type-safe initialState!
const initialState: LaunchsState = {
  data: [],
  errors: undefined,
  selected: undefined,
  loading: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<LaunchsState> = (state = initialState, action) => {
  switch (action.type) {
    case LaunchsActionTypes.FETCH_REQUEST:
    case LaunchsActionTypes.SELECT_TEAM: {
      return { ...state, loading: true };
    }
    case LaunchsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case LaunchsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case LaunchsActionTypes.SELECTED: {
      return { ...state, loading: false, selected: action.payload };
    }
    case LaunchsActionTypes.CLEAR_SELECTED: {
      return { ...state, selected: undefined };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as launchsReducer };
