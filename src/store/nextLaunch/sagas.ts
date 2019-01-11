// tslint:disable-next-line: no-submodule-imports
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import callApi from "../../utils/callApi";
import { fetchNextLaunchError, fetchNextLaunchSuccess } from "./actions";
import { nextLaunchActionTypes } from "./types";

// API config
import API_ROOT from "../api_endpoint";
const API_PATH = "/launches/next";

function* handleNextLaunchFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ROOT, API_PATH);

    if (res.error) {
      yield put(fetchNextLaunchError(res.error));
    } else {
      yield put(fetchNextLaunchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchNextLaunchError(err.stack!));
    } else {
      yield put(fetchNextLaunchError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchNextLaunchFetchRequest() {
  yield takeEvery(
    nextLaunchActionTypes.FETCH_CORES_REQUEST,
    handleNextLaunchFetch
  );
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* nextLaunchSaga() {
  yield all([fork(watchNextLaunchFetchRequest)]);
}

export default nextLaunchSaga;
