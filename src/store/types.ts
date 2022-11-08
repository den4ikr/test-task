import { Dispatch } from "react";
import { JobListItem } from "./../types/Home";

export interface IAppContext {
  state: AppStateContext;
  dispatch: Dispatch<AppActions>;
}

export interface AppStateContext {
  selectedJob: JobListItem | undefined;
}

export enum AppActionsEnum {
  SET_SELECTED_JOB = "SET_SELECTED_JOB",
}

interface SetSelectedJob {
  type: AppActionsEnum.SET_SELECTED_JOB;
  payload: JobListItem | undefined;
}

export type AppActions = SetSelectedJob;
