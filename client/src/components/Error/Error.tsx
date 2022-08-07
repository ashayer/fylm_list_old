import { Box, Typography } from "@mui/material";
import React from "react";
import error from "../../assets/error.png";

const Error = () => {
  return (
    <Box
      sx={{
        marginInline: "auto",
        textAlign: "center",
        mt: 10,
      }}
    >
      <img src={error} alt="error" width="400rem" />

      <Typography variant="h2" fontWeight="bold">
        SOMETHING WENT WRONG
      </Typography>

    </Box>
  );
};

export default Error;
