import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

interface Props {
  data: string[];
}

const Images: React.FC<Props> = ({ data }: Props) => {
  const isMobile = useMediaQuery("(max-width:780px)");

  return (
    <div style={{ width: "100%", minHeight: "450px", overflow: "hidden" }}>
      <Box sx={{ borderBottom: "1px solid gray", pb: 2 }}>
        <Typography variant="h1">Attached images</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          overflowX: "auto",
          marginTop: "20px",
          zIndex: 3,
          position: isMobile ? "absolute" : "relative",
          width: "99%",
          pr: 1,
        }}
        flexWrap="nowrap"
      >
        {data.map((item) => (
          <Grid item key={item}>
            <img src={item} alt={item} style={{ borderRadius: "8px" }} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Images;
