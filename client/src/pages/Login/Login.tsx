import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Container, Grow, TextField, Paper, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const login = (email: string, password: string) => {
  
};

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grow in>
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
            <strong>Login</strong>
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
                    autoComplete="on"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </Grid>
                <Grid item sx={{ p: 3, pb: 4, pt: 10 }}>
                  <Grid container sx={{ justifyContent: "space-between" }}>
                    <Button variant="outlined" onClick={() => navigate("/signup")}>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Create account?
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
    </Grow>
  );
};

export default Login;
