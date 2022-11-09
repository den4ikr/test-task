import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { dateToTimeAgo } from "../../../helpers/formats";
import { JobListItem } from "../../../types/Home";
import Images from "./Images";
import Panels from "./Panels";

interface Props {
  data: JobListItem;
}

const Content: React.FC<Props> = ({ data }: Props) => {
  const isMobile = useMediaQuery("(max-width:780px)");

  return (
    <Box sx={{ marginTop: "50px" }}>
      {!isMobile && <Button variant="contained">APPLY NOW</Button>}
      <Grid container justifyContent="space-between" sx={{ marginTop: "32px" }}>
        <Grid item sx={{ maxWidth: "501px" }}>
          <Typography variant="h1">{data.title}</Typography>
        </Grid>
        {!isMobile && (
          <Grid item>
            <Typography variant="h1">€ {data.salary}</Typography>
            <Typography variant="h2" sx={{ fontWeight: 400 }}>
              Brutto, per year
            </Typography>
          </Grid>
        )}
      </Grid>
      <Box sx={{ mt: 1 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle1" sx={{ fontSize: "13px" }}>
              Posted {dateToTimeAgo(new Date(data.createdAt))}
            </Typography>
          </Grid>
          {isMobile && (
            <Grid item>
              <Typography variant="h3" sx={{ fontWeight: 400 }}>
                Brutto, per year
              </Typography>
              <Typography variant="h2">€ {data.salary}</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
      <Box sx={{ mt: "50px", maxWidth: "700px" }}>
        <Typography variant="h2">Responsopilities</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {data.description}
        </Typography>
      </Box>
      <Box sx={{ mt: "50px" }}>
        <Typography variant="h2">Compensation & Benefits:</Typography>
        <Grid container direction="column" spacing={1} sx={{ mt: 1 }}>
          {data.benefits.map((item) => (
            <Grid item key={item}>
              <Typography
                variant="body1"
                sx={{
                  position: "relative",
                  "&:after": {
                    content: "''",
                    position: "absolute",
                    width: "9px",
                    height: "9px",
                    background: "gray",
                    left: "-15px",
                    top: "8px",
                  },
                }}
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          mt: "50px",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        <Button variant="contained">APPLY NOW</Button>
      </Box>
      {isMobile && (
        <Box sx={{ mt: "87px" }}>
          <Images data={data.pictures} />
        </Box>
      )}
      <Box sx={{ mt: "86px" }}>
        <Box sx={{ borderBottom: `1px solid gray`, pb: 1 }}>
          <Typography variant="h1" sx={{ pb: "5px", fontSize: "28px" }}>
            Additional info
          </Typography>
        </Box>
        <Box sx={{ mt: "15px" }}>
          <Typography variant="h3" gutterBottom>
            Employment type
          </Typography>
          <Box sx={{ mt: "30px" }}>
            <Panels
              data={data.employment_type}
              bg={"rgba(161, 177, 219, 0.317343)"}
              textColor="#55699E"
            />
          </Box>
        </Box>
        <Box sx={{ mt: "45px" }}>
          <Typography variant="h3" gutterBottom>
            Benefits
          </Typography>
          <Box sx={{ mt: "30px" }}>
            <Panels
              data={data.benefits}
              bg={"rgba(255, 207, 0, 0.15)"}
              textColor="#988B49"
            />
          </Box>
        </Box>
      </Box>
      {!isMobile && (
        <Box sx={{ mt: "87px" }}>
          <Images data={data.pictures} />
        </Box>
      )}
    </Box>
  );
};

export default Content;
