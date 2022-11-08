import React from "react";
import map from "../../../assets/Map.png";
import location from "../../../assets/Location.png";
import { JobListItem } from "../../../types/Home";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import colors from "../../../theme/colors";
import mapLocation from "../../../assets/mapLocation.png";

interface Props {
  data: JobListItem;
}

const Map: React.FC<Props> = ({ data }: Props) => {
  const lg = useMediaQuery("(max-width: 1121px)");

  return (
    <Box sx={{ maxWidth: "436px", mt: lg ? "50px" : "0px" }}>
      <Box
        sx={{
          background: colors.primary,
          height: "213px",
          padding: "31px 62px 20px 63px",
          position: "relative",
          overflow: "hidden",
          "&:after": {
            content: "''",
            position: "absolute",
            width: "273px",
            height: "273px",
            borderRadius: "50%",
            left: "-55px",
            top: "-20px",
            background: colors.darkBg,
          },
        }}
      >
        <Grid
          container
          direction="column"
          spacing={2}
          sx={{ zIndex: 2, position: "relative" }}
        >
          <Grid item>
            <Typography variant="h2" sx={{ color: colors.secondary }}>
              Department name.
            </Typography>
            <Typography variant="h2" sx={{ color: colors.secondary }}>
              {data.name}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <Box component="img" src={location} />
              </Grid>
              <Grid item>
                <Typography variant="h3" sx={{ color: colors.secondary }}>
                  {data.address}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ color: colors.secondary }}>
              {data.phone}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ color: colors.secondary }}>
              {data.email}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "block",
          "&:after": {
            content: "''",
            position: "absolute",
            backgroundImage: `url(${mapLocation})`,
            width: "30px",
            height: "38px",
            left: "70px",
            top: "50px",
            zIndex: 2,
          },
        }}
      >
        <Box component="img" src={map} />
      </Box>
    </Box>
  );
};

export default Map;
