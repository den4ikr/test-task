import React from "react";
import { JobListItem } from "../types/Home";
import ratingMobile from "../assets/RatingMobile.png";
import { dateToTimeAgo } from "../helpers/formats";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import colors from "../theme/colors";
import location from "../assets/Location.png";

interface Props {
  data: JobListItem;
  handleRedirectOnDetailsPage(job: JobListItem): void;
}

const JobCardMobile: React.FC<Props> = ({
  data,
  handleRedirectOnDetailsPage,
}: Props) => {
  return (
    <Card
      sx={{ background: colors.mobileCardBg, mt: 2 }}
      onClick={() => handleRedirectOnDetailsPage(data)}
    >
      <CardContent>
        <Grid container flexWrap="nowrap">
          <Grid item sx={{ width: "100px" }}>
            <Box
              component="img"
              src={data.pictures[0]}
              sx={{ width: "66px", height: "66px", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box component="img" src={ratingMobile} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">
                  Posted {dateToTimeAgo(new Date(data.createdAt))}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={1} sx={{ mt: 1 }}>
              <Grid item>
                <Typography variant="h3" sx={{ fontSize: "16px" }}>
                  {data.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
                  {data.name} • {data.address}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box component="img" src={location} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Vienna, Austria</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCardMobile;
