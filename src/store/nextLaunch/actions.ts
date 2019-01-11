import { action } from "typesafe-actions";
import { nextLaunchActionTypes } from "./types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchNextLaunchRequest = () =>
  action(nextLaunchActionTypes.FETCH_CORES_REQUEST);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchNextLaunchSuccess = (data: any) =>
  action(nextLaunchActionTypes.FETCH_CORES_SUCCESS, data);
export const fetchNextLaunchError = (message: string) =>
  action(nextLaunchActionTypes.FETCH_CORES_ERROR, message);
