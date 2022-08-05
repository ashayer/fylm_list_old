import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import useStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Navbar = () => {
  const user = useStore((state) => state.isUser);
  const username = useStore((state) => state.username);
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        minHeight: "10vh",
        backgroundColor: "white",
        alignItems: "center",
        borderBottom: "10px solid #2B2A2A",
        marginInline: "auto",
      }}
      maxWidth="xl"
    >
      <Grid item sx={{ flexGrow: 1 }}>
        <Typography
          variant="h2"
          sx={{ border: "1px solid red", cursor: "pointer" }}
          onClick={() => navigate("/home")}
        >
          <strong>FiLM LIST</strong>
        </Typography>
      </Grid>
      {user && (
        <>
          <Grid
            item
            sx={{
              mr: 5,
              fontSize: "50px",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h4">{username}</Typography>
            <AccountBoxIcon fontSize="inherit" onClick={() => navigate(`/user/${username}`)} />
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
