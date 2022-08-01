import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import useStore from "../../store";

const Navbar = () => {
  const user = useStore((state) => state.isUser);
  const username = useStore((state) => state.username);

  return (
    <Grid
      container
      sx={{
        height: "10vh",
        backgroundColor: "white",
        alignItems: "center",
        borderBottom: "10px solid #2B2A2A",
        marginInline: "auto",
      }}
      maxWidth="xl"
    >
      <Grid item>
        <Typography variant="h2" sx={{ border: "1px solid red" }}>
          <strong>FiLM LIST</strong>
        </Typography>
      </Grid>
      {user && (
        <Grid item>
          <Typography variant="h4">{username}</Typography>
          <Button variant="contained">Log Out</Button>
        </Grid>
      )}
      {!user && (
        <Grid item>
          <Button variant="contained">Log In</Button>
          <Button variant="contained">Sign Up</Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Navbar;
