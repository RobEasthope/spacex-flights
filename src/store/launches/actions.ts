import { action } from "typesafe-actions";
import { launchesActionTypes } from "./types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchLaunchesRequest = () =>
  action(launchesActionTypes.FETCH_LAUNCHES_REQUEST);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchLaunchesSuccess = (data: any) =>
  action(launchesActionTypes.FETCH_LAUNCHES_SUCCESS, data);
export const fetchLaunchesError = (message: string) =>
  action(launchesActionTypes.FETCH_LAUNCHES_ERROR, message);
