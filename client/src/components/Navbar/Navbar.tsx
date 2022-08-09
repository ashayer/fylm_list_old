import { Button, Grid, IconButton, Link, TextField, Typography } from "@mui/material";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./navbarStyles";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  movieSearch: yup.string(),
});

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

  const formik = useFormik({
    initialValues: {
      movieSearch: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate(`/search/${values.movieSearch}`);
    },
  });

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
          <Grid item>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="movieSearch"
                name="movieSearch"
                variant="standard"
                autoComplete="true"
                placeholder="Search For Movie"
                value={formik.values.movieSearch}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <IconButton onClick={() => formik.handleSubmit()}>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </form>
          </Grid>
          <Grid
            item
            sx={{
              ...styles.navBarIsUserBox,
            }}
            order={{ lg: 1, xs: 2 }}
          >
            <IconButton sx={{ color: "black" }} onClick={() => navigate(`/user/${username}`)}>
              <AccountBoxIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item order={{ lg: 1, xs: 3 }}>
            <Button variant="contained" onClick={() => logoutUser()}>
              Log Out
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Navbar;
