import { Reducer } from "redux";
import { coresActionTypes, CoresState } from "./types";

// Type-safe initialState!
const initialState: CoresState = {
  data: [],
  errors: undefined,
  loading: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<CoresState> = (state = initialState, action) => {
  switch (action.type) {
    case coresActionTypes.FETCH_CORES_REQUEST: {
      return { ...state, loading: true };
    }
    case coresActionTypes.FETCH_CORES_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case coresActionTypes.FETCH_CORES_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as coresReducer };
