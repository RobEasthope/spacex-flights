import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import callApi from "../../utils/callApi";
import { fetchLaunchesError, fetchLaunchesSuccess } from "./actions";
import { launchesActionTypes } from "./types";

// API config
import API_ROOT from "../api_endpoint";
const API_PATH = "/launches";

function* handleLaunchesFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ROOT, API_PATH);

    if (res.error) {
      yield put(fetchLaunchesError(res.error));
    } else {
      yield put(fetchLaunchesSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchLaunchesError(err.stack!));
    } else {
      yield put(fetchLaunchesError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchLaunchesFetchRequest() {
  yield takeEvery(
    launchesActionTypes.FETCH_LAUNCHES_REQUEST,
    handleLaunchesFetch
  );
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* launchesSaga() {
  yield all([fork(watchLaunchesFetchRequest)]);
}

export default launchesSaga;
