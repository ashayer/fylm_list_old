import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./navbarStyles";
const Navbar = () => {
  const user = useAuthStore((state) => state.isUser);
  const username = useAuthStore((state) => state.username);
  const navigate = useNavigate();

  return (
    <Grid item container sx={{ ...styles.navBarContainer }} xs={11}>
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
