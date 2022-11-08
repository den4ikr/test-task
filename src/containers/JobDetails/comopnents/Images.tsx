import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

interface Props {
  data: string[];
}

const Images: React.FC<Props> = ({ data }: Props) => {
  const isMobile = useMediaQuery("(max-width:780px)");

  return (
    <div>
      <Box sx={{ borderBottom: "1px solid gray", pb: 2 }}>
        <Typography variant="h1">Attached images</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", overflowX: "auto", marginTop: "20px" }}
        flexWrap="nowrap"
      >
        {data.map((item) => (
          <Grid item key={item} sx={{ minWidth: isMobile ? "65%" : "auto" }}>
            <img src={item} alt={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Images;
