// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /launchs
// https://docs.opendota.com/#tag/launchs%2Fpaths%2F~1launchs%2Fget
export interface Launch {
  launch_id: number;
  rating: number;
  wins: number;
  losses: number;
  last_match_time: number;
  name: string;
  tag?: string;
  logo_url?: string;
}

// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum LaunchsActionTypes {
  FETCH_REQUEST = "@@launchs/FETCH_REQUEST",
  FETCH_SUCCESS = "@@launchs/FETCH_SUCCESS",
  FETCH_ERROR = "@@launchs/FETCH_ERROR",
  SELECT_TEAM = "@@launchs/SELECT_TEAM",
  SELECTED = "@@launchs/SELECTED",
  CLEAR_SELECTED = "@@launchs/CLEAR_SELECTED"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface LaunchsState {
  readonly loading: boolean;
  readonly data: any;
  readonly errors?: string;
}
