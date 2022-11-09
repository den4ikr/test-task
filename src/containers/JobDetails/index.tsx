import React from "react";
import { useAppContext } from "../../store";
import Content from "./comopnents/Content";
import DetailsHeader from "./comopnents/Header";
import Map from "./comopnents/Map";
import arrowBackIcon from "../../assets/Arrow.png";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SetSelectedJob } from "../../store/action";
import { removeSelectedJobFromLocalStorage } from "../../helpers/localStorag";
import { appLinks } from "../../routes";
import ErrorPlaceholder from "../../components/ErrorPlaceholder";

const JobDetails: React.FC = () => {
  const {
    state: { selectedJob },
    dispatch,
  } = useAppContext();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:780px)");

  const handleRedirectHome = () => {
    dispatch(SetSelectedJob(undefined));
    removeSelectedJobFromLocalStorage();
    navigate(appLinks.home.link);
  };

  return selectedJob ? (
    <Box sx={{ padding: "20px", overflowX: "hidden" }}>
      <Grid container justifyContent="center">
        <Grid
          sx={{ maxWidth: "1400px", overflowX: "hidden" }}
          container
          justifyContent="space-around"
        >
          <Grid item>
            <DetailsHeader />
            <Content data={selectedJob} />
          </Grid>
          <Grid item>
            <Map data={selectedJob} />
          </Grid>
        </Grid>
      </Grid>
      {!isMobile && (
        <Box sx={{ maxWidth: "1450px", margin: "0 auto" }}>
          <Button
            onClick={handleRedirectHome}
            sx={{
              background: "#DDDEE5",
              width: "213px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#3A4562",
              marginTop: "89px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <img src={arrowBackIcon} alt="arrow" />
              </Grid>
              <Grid item>RETURN TO JOB BOARD</Grid>
            </Grid>
          </Button>
        </Box>
      )}
    </Box>
  ) : (
    <ErrorPlaceholder />
  );
};

export default JobDetails;
