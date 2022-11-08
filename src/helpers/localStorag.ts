import { JobListItem } from "./../types/Home";

const LocalStorageEnum = {
  job: "test_task_selected_job",
};

const setSelectedJobToLocalStorage = (job: JobListItem | undefined) =>
  localStorage.setItem(LocalStorageEnum.job, JSON.stringify(job));

const getSelectedJobFromLocalStorage = (): string | undefined => {
  return localStorage.getItem(LocalStorageEnum.job) as unknown as string;
};

const removeSelectedJobFromLocalStorage = () =>
  localStorage.removeItem(LocalStorageEnum.job);

export {
  setSelectedJobToLocalStorage,
  getSelectedJobFromLocalStorage,
  removeSelectedJobFromLocalStorage,
};
