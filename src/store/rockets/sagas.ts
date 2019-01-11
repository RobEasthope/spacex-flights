// tslint:disable-next-line: no-submodule-imports
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import callApi from "../../utils/callApi";
import { fetchRocketsError, fetchRocketsSuccess } from "./actions";
import { rocketsActionTypes } from "./types";

// API config
import API_ROOT from "../api_endpoint";
const API_PATH = "/rockets";

function* handleRocketsFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ROOT, API_PATH);

    if (res.error) {
      yield put(fetchRocketsError(res.error));
    } else {
      yield put(fetchRocketsSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchRocketsError(err.stack!));
    } else {
      yield put(fetchRocketsError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchRocketsFetchRequest() {
  yield takeEvery(rocketsActionTypes.FETCH_ROCKETS_REQUEST, handleRocketsFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* rocketsSaga() {
  yield all([fork(watchRocketsFetchRequest)]);
}

export default rocketsSaga;
