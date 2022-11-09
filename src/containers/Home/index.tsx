import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListOfJobs } from "../../api/homeApi";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";
import JobCard from "../../components/JobCard";
import JobCardMobile from "../../components/JobCardMobile";
import Loader from "../../components/Loader";
import { setSelectedJobToLocalStorage } from "../../helpers/localStorag";
import { appLinks } from "../../routes";
import { useAppContext } from "../../store";
import { SetSelectedJob } from "../../store/action";
import { JobListData, JobListItem } from "../../types/Home";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [jobsListData, setJobsListData] = useState<JobListData>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErorr] = useState(false);
  const isMobile = useMediaQuery("(max-width:780px)");

  const handleRedirectOnDetailsPage = (job: JobListItem) => {
    navigate(appLinks.jobDetails.asLink(job.id));
    dispatch(SetSelectedJob(job));
    setSelectedJobToLocalStorage(job);
  };

  useEffect(() => {
    setIsLoading(true);
    getListOfJobs().then(
      (res) => {
        setJobsListData(res);
        setIsLoading(false);
      },
      () => {
        setIsErorr(true);
      }
    );
  }, []);

  if (isError) {
    return <ErrorPlaceholder />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ maxWidth: "1400px", margin: "0 auto", padding: 2 }}>
      {jobsListData.map((item) =>
        isMobile ? (
          <JobCardMobile
            data={item}
            handleRedirectOnDetailsPage={handleRedirectOnDetailsPage}
            key={item.id}
          />
        ) : (
          <JobCard
            data={item}
            handleRedirectOnDetailsPage={handleRedirectOnDetailsPage}
            key={item.id}
          />
        )
      )}
    </Box>
  );
};

export default Home;
