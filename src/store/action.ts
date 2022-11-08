import { JobListItem } from "./../types/Home";
import { AppActions, AppActionsEnum } from "./types";

const SetSelectedJob = (job: JobListItem | undefined): AppActions => ({
  type: AppActionsEnum.SET_SELECTED_JOB,
  payload: job,
});

export { SetSelectedJob };
