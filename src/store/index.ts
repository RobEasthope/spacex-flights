import { Action, AnyAction, combineReducers, Dispatch } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";

// Launches
import { launchesReducer } from "./launches/reducer";
import launchesSaga from "./launches/sagas";
import { launchesState } from "./launches/types";

// Rockets
import { rocketsReducer } from "./rockets/reducer";
import rocketsSaga from "./rockets/sagas";
import { rocketsState } from "./rockets/types";

// Dragons
import { dragonsReducer } from "./dragons/reducer";
import dragonsSaga from "./dragons/sagas";
import { dragonsState } from "./dragons/types";

// Cores
import { coresReducer } from "./cores/reducer";
import coresSaga from "./cores/sagas";
import { coresState } from "./cores/types";

// Next Launch
import { nextLaunchReducer } from "./nextLaunch/reducer";
import nextLaunchSaga from "./nextLaunch/sagas";
import { nextLaunchState } from "./nextLaunch/types";

// Roadster
import { roadsterReducer } from "./roadster/reducer";
import roadsterSaga from "./roadster/sagas";
import { roadsterState } from "./roadster/types";

// The top-level state object
export interface ApplicationState {
  router: any;
  launches: launchesState;
  rockets: rocketsState;
  dragons: dragonsState;
  cores: coresState;
  nextLaunch: nextLaunchState;
  roadster: roadsterState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = history =>
  combineReducers<ApplicationState>({
    router: connectRouter(history),
    launches: launchesReducer,
    rockets: rocketsReducer,
    dragons: dragonsReducer,
    cores: coresReducer,
    nextLaunch: nextLaunchReducer,
    roadster: roadsterReducer
  });

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([
    fork(launchesSaga),
    fork(rocketsSaga),
    fork(dragonsSaga),
    fork(coresSaga),
    fork(nextLaunchSaga),
    fork(roadsterSaga)
  ]);
}
