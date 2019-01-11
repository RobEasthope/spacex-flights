import { action } from "typesafe-actions";
import { coresActionTypes } from "./types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchCoresRequest = () =>
  action(coresActionTypes.FETCH_CORES_REQUEST);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchCoresSuccess = (data: any) =>
  action(coresActionTypes.FETCH_CORES_SUCCESS, data);
export const fetchCoresError = (message: string) =>
  action(coresActionTypes.FETCH_CORES_ERROR, message);
