import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Container, Zoom, TextField, Grid, Typography } from "@mui/material";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/authStore";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

type loginProps = {
  email: string;
  password: string;
};

const loginUser = async (userData: loginProps) => {
  try {
    const response = await axios.post("/api/user/login", userData);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) return error.response;
    return error as AxiosError;
  }
};

const Login = () => {
  const user = useAuthStore((state) => state.isUser);
  const setUser = useAuthStore((state) => state.setIsUser);

  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (user) navigate("/home");
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setEmailError("");
      setPasswordError("");
      loginUser(values).then((response: any) => {
        if (response.status === 200) {
          setUser(true, response.data.username, response.data.id);
          navigate("/home");
        } else {
          setEmailError(response?.data.errors.email);
          setPasswordError(response?.data.errors.password);
        }
      });
    },
  });

  return (
    <Zoom in>
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
          <Typography variant="h2" sx={{ pt: 5 }}>
            <strong>Login</strong>
          </Typography>
          <Box sx={{ borderRadius: "5px", mt: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container sx={{ flexDirection: "column" }}>
                <Grid item sx={{ p: 3, pt: 10 }}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    autoComplete="on"
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
                    autoComplete="on"
                    variant="filled"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      (formik.touched.password && Boolean(formik.errors.password)) ||
                      passwordError !== ""
                    }
                    helperText={
                      (formik.touched.password && formik.errors.password) || passwordError
                    }
                  />
                </Grid>
                <Grid item sx={{ p: 3, pb: 4, pt: 10 }}>
                  <Grid container sx={{ justifyContent: "space-between" }}>
                    <Button variant="outlined" onClick={() => navigate("/signup")}>
                      <Typography variant="body1" sx={{}}>
                        Need an account?
                      </Typography>
                    </Button>
                    <Button variant="contained" type="submit" color="primary">
                      <Typography variant="body1">Login</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </Container>
    </Zoom>
  );
};

export default Login;
