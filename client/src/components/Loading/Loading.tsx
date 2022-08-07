import { Box, Typography } from "@mui/material";
import React from "react";
import LoadingGif from "../../assets/loading_3.gif";

const Loading = () => {
  return (
    <Box sx={{ marginInline: "auto", mt: 10, textAlign: "center" }}>
      <img src={LoadingGif} alt="loading..." width="400rem" />
      <Typography variant="h2" fontWeight="bold">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
