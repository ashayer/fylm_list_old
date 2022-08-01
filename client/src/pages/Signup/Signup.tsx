import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Container, TextField, Paper, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  username: yup.string().required("Username is required"),
});

type SignupProps = {
  email: string;
  password: string;
  username: string;
};

const signupUser = async (userData: SignupProps) => {
  try {
    const response = await axios.post("/api/user/signup", userData);
    return response;
  } catch (error) {
    return error;
  }
};

const Signup = () => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const setUser = useStore((state) => state.setIsUser);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setEmailError("");
      setPasswordError("");
      setUsernameError("");
      signupUser(values).then((response: any) => {
        console.log(response);

        if (response.status === 201) {
          navigate("/home");
          setUser(true, response.data.username);
        } else {
          setEmailError(response.data.errors.email);
          setPasswordError(response.data.errors.password);
          setUsernameError(response.data.errors.username);
        }
      });
    },
  });

  return (
    <Container
      sx={{
        height: "70vh",
        backgroundColor: "#FFFFFF",
        borderRadius: "0px 0px 5px 5px",
        borderBottom: "10px solid #2B2A2A",
      }}
      maxWidth="sm"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
        maxWidth="sm"
        disableGutters
      >
        <Typography variant="h2" sx={{ pt: 5, color: "#2B2A2A" }}>
          <strong>Create Account</strong>
        </Typography>
        <Box sx={{ backgroundColor: "#2b2a2a", borderRadius: "5px", mt: 2 }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container sx={{ flexDirection: "column" }}>
              <Grid item sx={{ p: 3, pt: 10 }}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  variant="filled"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    (formik.touched.email && Boolean(formik.errors.email)) || emailError !== ""
                  }
                  helperText={(formik.touched.email && formik.errors.email) || emailError}
                />
              </Grid>
              <Grid item sx={{ p: 3 }}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  variant="filled"
                  autoComplete="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    (formik.touched.password && Boolean(formik.errors.password)) ||
                    passwordError !== ""
                  }
                  helperText={(formik.touched.password && formik.errors.password) || passwordError}
                />
              </Grid>
              <Grid item sx={{ p: 3 }}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  variant="filled"
                  autoComplete="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    (formik.touched.username && Boolean(formik.errors.username)) ||
                    usernameError !== ""
                  }
                  helperText={(formik.touched.username && formik.errors.username) || usernameError}
                />
              </Grid>
              <Grid item sx={{ p: 3, pb: 4, pt: 10 }}>
                <Grid container sx={{ justifyContent: "space-between" }}>
                  <Button variant="outlined" onClick={() => navigate("/login")}>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      Already have an account?
                    </Typography>
                  </Button>
                  <Button variant="contained" type="submit" color="primary">
                    <Typography variant="body1">Sign Up</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default Signup;
