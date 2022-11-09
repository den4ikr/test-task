import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorPlaceholder: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography variant="h1">Something went wrong :(</Typography>
    </Box>
  );
};

export default ErrorPlaceholder;
