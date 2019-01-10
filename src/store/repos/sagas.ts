import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import callApi from "../../utils/callApi";
import { fetchError, fetchSuccess, selectRepo, repoSelected } from "./actions";
import { ReposActionTypes } from "./types";

const API_ENDPOINT = "https://api.github.com/repos/facebook";

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ENDPOINT, "/create-react-app");
    console.log(API_ENDPOINT);

    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError("An unknown error occured."));
    }
  }
}

function* handleSelect(action: ReturnType<typeof selectRepo>) {
  try {
    const detail = yield call(
      callApi,
      "get",
      API_ENDPOINT,
      `/repos/${action.payload}`
    );
    const players = yield call(
      callApi,
      "get",
      API_ENDPOINT,
      `/repos/${action.payload}/players`
    );

    if (detail.error || players.error) {
      yield put(fetchError(detail.error || players.error));
    } else {
      yield put(repoSelected({ detail, players }));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(ReposActionTypes.FETCH_REQUEST, handleFetch);
}

function* watchSelectRepo() {
  yield takeLatest(ReposActionTypes.SELECT_TEAM, handleSelect);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* heroesSaga() {
  yield all([fork(watchFetchRequest), fork(watchSelectRepo)]);
}

export default heroesSaga;
