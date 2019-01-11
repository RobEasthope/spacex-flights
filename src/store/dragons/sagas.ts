// tslint:disable-next-line: no-submodule-imports
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import callApi from "../../utils/callApi";
import { fetchDragonsError, fetchDragonsSuccess } from "./actions";
import { dragonsActionTypes } from "./types";

// API config
import API_ROOT from "../api_endpoint";
const API_PATH = "/dragons";

function* handleDragonsFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ROOT, API_PATH);

    if (res.error) {
      yield put(fetchDragonsError(res.error));
    } else {
      yield put(fetchDragonsSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchDragonsError(err.stack!));
    } else {
      yield put(fetchDragonsError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchDragonsFetchRequest() {
  yield takeEvery(dragonsActionTypes.FETCH_DRAGONS_REQUEST, handleDragonsFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* dragonsSaga() {
  yield all([fork(watchDragonsFetchRequest)]);
}

export default dragonsSaga;
