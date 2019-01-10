import { action } from "typesafe-actions";
import { ReposActionTypes, Repo, RepoSelectedPayload } from "./types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchRequest = () => action(ReposActionTypes.FETCH_REQUEST);
export const clearSelected = () => action(ReposActionTypes.CLEAR_SELECTED);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: Repo[]) =>
  action(ReposActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) =>
  action(ReposActionTypes.FETCH_ERROR, message);
export const selectRepo = (repo_id: string) =>
  action(ReposActionTypes.SELECT_TEAM, repo_id);
export const repoSelected = (repo: RepoSelectedPayload) =>
  action(ReposActionTypes.SELECTED, repo);
