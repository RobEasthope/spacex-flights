import { action } from "typesafe-actions";
import { LaunchsActionTypes, Launch, LaunchSelectedPayload } from "./types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchRequest = () => action(LaunchsActionTypes.FETCH_REQUEST);
export const clearSelected = () => action(LaunchsActionTypes.CLEAR_SELECTED);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: Launch[]) =>
  action(LaunchsActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) =>
  action(LaunchsActionTypes.FETCH_ERROR, message);
export const selectLaunch = (launch_id: string) =>
  action(LaunchsActionTypes.SELECT_TEAM, launch_id);
export const launchSelected = (launch: LaunchSelectedPayload) =>
  action(LaunchsActionTypes.SELECTED, launch);
