// This file holds our state type, as well as any other types related to this Redux store.

// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum launchesActionTypes {
  FETCH_REQUEST = "@@launches/FETCH_REQUEST",
  FETCH_SUCCESS = "@@launches/FETCH_SUCCESS",
  FETCH_ERROR = "@@launches/FETCH_ERROR"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface launchesState {
  readonly loading: boolean;
  readonly data: any;
  readonly errors?: string;
}
