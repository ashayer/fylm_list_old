import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import useStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./navbarStyles";
const Navbar = () => {
  const user = useStore((state) => state.isUser);
  const username = useStore((state) => state.username);
  const navigate = useNavigate();

  return (
    <Grid container sx={{ ...styles.navBarContainer }} maxWidth="xl">
      <Grid item sx={{ flexGrow: 1 }}>
        <Link component="button" underline="none" onClick={() => navigate("/home")}>
          <Typography variant="h2">
            <strong>FiLM LIST</strong>
          </Typography>
        </Link>
      </Grid>
      {user && (
        <>
          <Grid
            item
            sx={{
              ...styles.navBarIsUserBox,
            }}
          >
            <IconButton onClick={() => navigate(`/user/${username}`)}>
              <AccountBoxIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Button variant="contained">Log Out</Button>
          </Grid>
        </>
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
