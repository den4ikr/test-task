import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import addToFavoritesIcon from "../../../assets/Rectangle 31.png";
import shareIcon from "../../../assets/Shape icon.png";
import addToFavoriteStar from "../../../assets/Fill 1 Copy 7.png";

const DetailsHeader: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:780px)");

  return (
    <Grid
      container
      justifyContent="space-between"
      direction={isMobile ? "column" : "row"}
      alignItems={isMobile ? "flex-start" : "center"}
      sx={{
        borderBottom: `${isMobile ? "0px" : "1px"} solid gray`,
        paddingBottom: 2,
      }}
      spacing={isMobile ? 2 : 0}
    >
      <Grid
        item
        sx={{
          borderBottom: `${isMobile ? "1px" : "0px"} solid gray`,
          width: isMobile ? "100%" : "auto",
          paddingBottom: isMobile ? 1.5 : 0,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "28px" }}>
          Job Details
        </Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Box
                  component="img"
                  src={isMobile ? addToFavoriteStar : addToFavoritesIcon}
                />
              </Grid>
              <Grid item>
                <Typography variant={isMobile ? "subtitle1" : "h3"}>
                  Save to my list
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Box component="img" src={shareIcon} />
              </Grid>
              <Grid item>
                <Typography variant={isMobile ? "subtitle1" : "h3"}>
                  Share
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsHeader;
