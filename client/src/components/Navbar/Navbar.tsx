import { Button, Grid, IconButton, Link, TextField, Typography } from "@mui/material";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./navbarStyles";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const user = useAuthStore((state) => state.isUser);

  const setUser = useAuthStore((state) => state.setIsUser);
  const username = useAuthStore((state) => state.username);
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/login");
    setUser(false, "", "");
    localStorage.removeItem("user");
    await axios.post("/api/user/logout");
  };

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
            <IconButton sx={{ color: "black" }} onClick={() => navigate("/search")}>
              <SearchIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "black" }} onClick={() => navigate(`/user/${username}`)}>
              <AccountBoxIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => logoutUser()}>
              LOG OUT
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Navbar;
