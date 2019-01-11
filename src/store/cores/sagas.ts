import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import callApi from "../../utils/callApi";
import { fetchCoresError, fetchCoresSuccess } from "./actions";
import { coresActionTypes } from "./types";

// API config
import API_ROOT from "../api_endpoint";
const API_PATH = "/cores";

function* handleCoresFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ROOT, API_PATH);

    if (res.error) {
      yield put(fetchCoresError(res.error));
    } else {
      yield put(fetchCoresSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchCoresError(err.stack!));
    } else {
      yield put(fetchCoresError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchCoresFetchRequest() {
  yield takeEvery(coresActionTypes.FETCH_CORES_REQUEST, handleCoresFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* coresSaga() {
  yield all([fork(watchCoresFetchRequest)]);
}

export default coresSaga;
