import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TheatersIcon from "@mui/icons-material/Theaters";
import Signup from "../Signup/Signup";
import useStore from "../../stores/authStore";

const LandingPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
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
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        marginInline: "auto",
      }}
      maxWidth="md"
    >
      <Grid item>
        <Typography variant="h1" sx={{ mt: 3 }}>
          <strong>FiLM LIST</strong>
        </Typography>
      </Grid>
      <Grid item sx={{ fontSize: "55px", mt: 2 }}>
        <RemoveRedEyeIcon fontSize="inherit"></RemoveRedEyeIcon>
      </Grid>
      <Grid item>
        <Typography variant="h4">See popular movies</Typography>
      </Grid>
      <Grid item sx={{ fontSize: "55px", mt: 2 }}>
        <FavoriteIcon fontSize="inherit"></FavoriteIcon>
      </Grid>
      <Grid item>
        <Typography variant="h4">Track your favorites</Typography>
      </Grid>
      <Grid item sx={{ fontSize: "55px", mt: 2 }}>
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
