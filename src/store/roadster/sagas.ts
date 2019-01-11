import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import callApi from "../../utils/callApi";
import { fetchRoadsterError, fetchRoadsterSuccess } from "./actions";
import { roadsterActionTypes } from "./types";

// API config
import API_ROOT from "../api_endpoint";
const API_PATH = "/roadster";

function* handleRoadsterFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ROOT, API_PATH);

    if (res.error) {
      yield put(fetchRoadsterError(res.error));
    } else {
      yield put(fetchRoadsterSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchRoadsterError(err.stack!));
    } else {
      yield put(fetchRoadsterError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchRoadsterFetchRequest() {
  yield takeEvery(roadsterActionTypes.FETCH_CORES_REQUEST, handleRoadsterFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* roadsterSaga() {
  yield all([fork(watchRoadsterFetchRequest)]);
}

export default roadsterSaga;
