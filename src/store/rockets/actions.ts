import { action } from "typesafe-actions";
import { rocketsActionTypes } from "./types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchRocketsRequest = () =>
  action(rocketsActionTypes.FETCH_ROCKETS_REQUEST);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchRocketsSuccess = (data: any) =>
  action(rocketsActionTypes.FETCH_ROCKETS_SUCCESS, data);
export const fetchRocketsError = (message: string) =>
  action(rocketsActionTypes.FETCH_ROCKETS_ERROR, message);
