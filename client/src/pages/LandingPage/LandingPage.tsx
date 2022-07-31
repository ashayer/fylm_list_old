import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TheatersIcon from "@mui/icons-material/Theaters";
import Signup from "../Signup/Signup";
import useStore from "../../store";

const LandingPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useStore((state) => state.isUser);

  useEffect(() => {
    if (user) navigate("/home");
  });

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: "100vh",
        backgroundColor: "#FFFFFF",
        ml: 15,
        borderRight: "10px solid #2B2A2A",
        borderLeft: "10px solid #2B2A2A",
        alignItems: "center",
      }}
      maxWidth="sm"
    >
      <Grid item>
        <Typography variant="h1" sx={{ mt: 4 }}>
          <strong>FILM LIST</strong>
        </Typography>
      </Grid>
      <Grid item sx={{ fontSize: "85px", mt: 3 }}>
        <RemoveRedEyeIcon fontSize="inherit"></RemoveRedEyeIcon>
      </Grid>
      <Grid item>
        <Typography variant="h4">See popular movies</Typography>
      </Grid>
      <Grid item sx={{ fontSize: "85px", mt: 3 }}>
        <FavoriteIcon fontSize="inherit"></FavoriteIcon>
      </Grid>
      <Grid item>
        <Typography variant="h4">Track your favorites</Typography>
      </Grid>
      <Grid item sx={{ fontSize: "85px", mt: 3 }}>
        <TheatersIcon fontSize="inherit"></TheatersIcon>
      </Grid>
      <Grid item>
        <Typography variant="h4">Find new films</Typography>
      </Grid>
      <Grid item sx={{ mt: 10 }}>
        <Button variant="contained" onClick={handleOpen}>
          <Typography>GET STARTED</Typography>
        </Button>
      </Grid>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Signup />
      </Dialog>
    </Grid>
  );
};

export default LandingPage;
