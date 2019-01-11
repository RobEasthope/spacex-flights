import { action } from "typesafe-actions";
import { dragonsActionTypes } from "./types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchDragonsRequest = () =>
  action(dragonsActionTypes.FETCH_DRAGONS_REQUEST);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchDragonsSuccess = (data: any) =>
  action(dragonsActionTypes.FETCH_DRAGONS_SUCCESS, data);
export const fetchDragonsError = (message: string) =>
  action(dragonsActionTypes.FETCH_DRAGONS_ERROR, message);
