import { JobListResponse, JobListData } from "./../types/Home";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const getListOfJobs = (): JobListResponse =>
  axios
    .get<JobListData>(`${baseURL}/data`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    })
    .then((res) => res.data);

export { getListOfJobs };
