import { createContext, useContext, useMemo, useReducer } from "react";
import { getSelectedJobFromLocalStorage } from "../helpers/localStorag";
import reducer from "./reducer";
import { AppStateContext, IAppContext } from "./types";

const job = getSelectedJobFromLocalStorage();

const initialState: AppStateContext = {
  selectedJob: job
    ? JSON.parse(getSelectedJobFromLocalStorage() as string)
    : undefined,
};

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null,
});

export const useAppContext = (): IAppContext => useContext(AppContext);

export const AppStoreProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
