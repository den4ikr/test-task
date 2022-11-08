import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
