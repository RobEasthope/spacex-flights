import { Reducer } from "redux";
import { ReposState, ReposActionTypes } from "./types";

// Type-safe initialState!
const initialState: ReposState = {
  data: [],
  errors: undefined,
  selected: undefined,
  loading: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ReposState> = (state = initialState, action) => {
  switch (action.type) {
    case ReposActionTypes.FETCH_REQUEST:
    case ReposActionTypes.SELECT_TEAM: {
      return { ...state, loading: true };
    }
    case ReposActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case ReposActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case ReposActionTypes.SELECTED: {
      return { ...state, loading: false, selected: action.payload };
    }
    case ReposActionTypes.CLEAR_SELECTED: {
      return { ...state, selected: undefined };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as reposReducer };
