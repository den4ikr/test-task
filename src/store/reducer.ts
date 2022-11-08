import { AppStateContext, AppActions, AppActionsEnum } from "./types";

const reducer = (
  state: AppStateContext,
  action: AppActions
): AppStateContext => {
  switch (action.type) {
    case AppActionsEnum.SET_SELECTED_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      };
  }
};

export default reducer;
