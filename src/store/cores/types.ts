// This file holds our state type, as well as any other types related to this Redux store.

// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum coresActionTypes {
  FETCH_CORES_REQUEST = "@@cores/FETCH_CORES_REQUEST",
  FETCH_CORES_SUCCESS = "@@cores/FETCH_CORES_SUCCESS",
  FETCH_CORES_ERROR = "@@cores/FETCH_CORES_ERROR"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface CoresState {
  readonly loading: boolean;
  readonly data: any;
  readonly errors?: string;
}
