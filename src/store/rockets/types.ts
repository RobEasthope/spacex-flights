// This file holds our state type, as well as any other types related to this Redux store.

// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum rocketsActionTypes {
  FETCH_ROCKETS_REQUEST = "@@rockets/FETCH_ROCKETS_REQUEST",
  FETCH_ROCKETS_SUCCESS = "@@rockets/FETCH_ROCKETS_SUCCESS",
  FETCH_ROCKETS_ERROR = "@@rockets/FETCH_ROCKETS_ERROR"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface RoadsterState {
  readonly loading: boolean;
  readonly data: any;
  readonly errors?: string;
}
