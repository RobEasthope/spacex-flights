// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /repos
// https://docs.opendota.com/#tag/repos%2Fpaths%2F~1repos%2Fget
export interface Repo {
  repo_id: number;
  rating: number;
  wins: number;
  losses: number;
  last_match_time: number;
  name: string;
  tag?: string;
  logo_url?: string;
}

export interface Player {
  account_id: number;
  name: string;
  games_played: number;
  wins: number;
  is_current_repo_member: boolean;
}

export interface RepoSelectedPayload {
  detail: Repo;
  players: Player[];
}

// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum ReposActionTypes {
  FETCH_REQUEST = "@@repos/FETCH_REQUEST",
  FETCH_SUCCESS = "@@repos/FETCH_SUCCESS",
  FETCH_ERROR = "@@repos/FETCH_ERROR",
  SELECT_TEAM = "@@repos/SELECT_TEAM",
  SELECTED = "@@repos/SELECTED",
  CLEAR_SELECTED = "@@repos/CLEAR_SELECTED"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface ReposState {
  readonly loading: boolean;
  readonly data: any;
  readonly selected?: RepoSelectedPayload;
  readonly errors?: string;
}
