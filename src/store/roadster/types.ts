// This file holds our state type, as well as any other types related to this Redux store.

// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum roadsterActionTypes {
  FETCH_CORES_REQUEST = "@@roadster/FETCH_CORES_REQUEST",
  FETCH_CORES_SUCCESS = "@@roadster/FETCH_CORES_SUCCESS",
  FETCH_CORES_ERROR = "@@roadster/FETCH_CORES_ERROR"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface RoadsterState {
  readonly loading: boolean;
  readonly data: any;
  readonly errors?: string;
}
